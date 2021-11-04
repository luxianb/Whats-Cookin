/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router';

import Button, { BackButton } from "../../components/Buttons";
import { Col, Container, GridRow, Page, Row, Section } from '../../components/Containers/index';
import ErrorPrompt from "../../components/ErrorPrompt";
import Input, { TextArea } from "../../components/Inputs";
import ImageInput from "../../components/Inputs/ImageInput";
import TagsInput from "../../components/Inputs/TagsInput";
import LoginRequiredModal from "../../components/Modals/LoginRequired";
import { DeleteButton, StepDeleteButton } from "./components";

class Ingredient {
	constructor(amount, unit, name) {
		this.amount = amount || '';
		this.unit = unit || '';
		this.name = name || '';
	}
}
class Step {
	constructor(title, body) {
		this.title = title || '';
		this.body = body || '';
	}
}

const CreateRecipe = () => {
	const [errors, setErrors] = useState({ name: '', description: '', time: '', ingredients: [], steps: [] })
	const [ingredients, setIngredients] = useState([new Ingredient()])
	const [steps, setSteps] = useState([new Step()])
	const [loggedUser, setLoggedUser] = useState(null);
	const [modal, setModal] = useState('')
	const history = useHistory()

	useEffect(() => {
		async function fetchUserInfo() {
			const res = await axios.get('/api/session');
			setLoggedUser(res.data);
		}
		fetchUserInfo();
	}, [])


	const URL = "http://localhost:4000/api/recipes/new"
	const [form, setForm] = useState({
		name: '',
		description: '',
		tags: [],
		time: {hours: '', minutes: ''},
		avatar: null,
	});

	const handleChange = (e) => {
		const { name } = e.target;
		setForm({ ...form, [name]: e.target.value });
	};

	function handleIngredientChange(e, index) {
		const { value, name } = e.currentTarget
		const editedObject = { ...ingredients[index], [name]: value }

		const array = [...ingredients]
		array.splice(index, 1, editedObject)

		for (let i = array.length - 1; i >= 0; i--) {
			if (i !== index && array[i].amount === '' && array[i].unit === '' && array[i].name === '') {
				array.splice(i, 1);
			}
		}

		setIngredients(array)
	}

	function handleRemoveIngredient(index) {
		const array = [...ingredients]
		array.splice(index, 1)
		setIngredients(array)
	}

	function addNewIngredientField() {
		setIngredients([...ingredients, new Ingredient('')]);
	}

	function handleStepChange(e, index) {
		const { value, name } = e.currentTarget
		const editedObject = { ...steps[index], [name]: value }

		const array = [...steps]
		array.splice(index, 1, editedObject)

		for (let i = array.length - 1; i >= 0; i--) {
			if (i !== index && array[i].title === '' && array[i].body === '') {
				array.splice(i, 1);
			}
		}

		setSteps(array)
	}

	function addNewStepField() {
		setSteps([...steps, new Step('')]);
	}

	function handleRemoveStep(index) {
		const array = [...steps]
		array.splice(index, 1)
		setSteps(array)
	}

	function checkForm() {
		if (!loggedUser) {
			return setModal('reqLogin')
		}
		const errors = {name: '', description: '', time: '', ingredients: [], steps: []}

		if (!form.name) {
			errors.name = "Include the name of your recipe"
		}

		if (!form.description) {
			errors.description = "The description of your recipe"
		}

		if (!form.time.hours && !form.time.minutes) {
			errors.time = "Include an estimate cooking time"
		}

		for (let i = 0; i < ingredients.length; i++) {
			if (!ingredients[i].amount || !ingredients[i].name) {
				errors.ingredients.push('Include an amount and ingredient name')
			} else {
				errors.ingredients.push(null)
			}
		}

		for (let i = 0; i < steps.length; i++) {
			if (!steps[i].title || !steps[i].body) {
				errors.steps.push('Include a title and description for your step')
			} else {
				errors.steps.push(null)
			}
		}
		setErrors(errors);

		if (
			!errors.name &&
			!errors.description &&
			!errors.time &&
			errors.ingredients.filter((each) => each !== null).length === 0 &&
			errors.steps.filter((each) => each !== null).length === 0)
		{
			postRecipe()
		}
	}


	const postRecipe = async (data) => {
		// const postForm = JSON.stringify({...form, steps, ingredients});
		const formData = new FormData();

		// for (const field in postForm) {
			formData.append('avatar', form.avatar)
			formData.append('name', form.name)
			formData.append('description', form.description)
			formData.append('time', JSON.stringify(form.time))
			formData.append('steps', JSON.stringify(steps))
			formData.append('ingredients', JSON.stringify(ingredients))
		// }

		
		const res = await axios.post('/api/recipes/new', formData, {
			headers: {
				 'Content-Type': 'multipart/form-data'
			}
	 });

		if (typeof res.data === 'object') {
			history.push(`/profile/${loggedUser._id}?display=recipes`)
		}

	};

	return (
		<>
		<Page>
			<Section>
				<Container>
					<GridRow gap={"36px"}>
						<Col>

							<GridRow style={{ marginBottom: 36 }}>
								<BackButton />
								<h1 style={{ margin: 0 }}>Add a Recipe</h1>
							</GridRow>

							<Col style={{ marginBottom: 12 }}>
								<Input
									onChange={(e) => handleChange(e)}
									value={form.name}
									type="text"
									name="name"
									placeholder="Meal Name"
									error={errors.name}
								/>
								{errors.name && <ErrorPrompt>{errors.name}</ErrorPrompt>}
							</Col>

							<Col style={{ marginBottom: 18 }}>
								<TextArea
									onChange={(e) => handleChange(e)}
									value={form.description}
									type="text"
									name="description"
									placeholder="Description"
									style={{ minHeight: '8rem' }}
									error={errors.description}
								/>
								{errors.description && <ErrorPrompt>{errors.description}</ErrorPrompt>}
							</Col>

							<TagsInput
								onChange={(data) => setForm({ ...form, tags: data })}
								value={form.tags}
								style={{ marginBottom: 18 }}
							/>

							<Col style={{ marginBottom: 18 }}>
								<GridRow style={{ alignItems: 'center', fontSize: '.9rem' }} gap={'6px'}>
									<p style={{ margin: 0 }}>Est. Time to cook</p>
									<Row vCenter>
										<Input
											onChange={(e) => setForm({...form, time: {...form.time, hours: e.target.value}})}
											value={form.time.hours}
											type="number"
											name="hours"
											placeholder="0"
											style={{ width: '4rem' }}
											min={1}
											max={24}
											error={errors.time}
										/>
										<p style={{ margin: 0 }}>hr </p>
									</Row>
									<Row vCenter>
										<Input
											onChange={(e) => setForm({...form, time: {...form.time, minutes: e.target.value}})}
											value={form.minutes}
											type="number"
											name="minutes"
											placeholder="00"
											style={{ width: '4rem' }}
											min={1}
											max={59}
											error={errors.time}
										/>
										<p style={{ margin: 0 }}>mins</p>
									</Row>
								</GridRow>
								{errors.time && <ErrorPrompt>{errors.time}</ErrorPrompt>}
							</Col>

							<h2 style={{ marginBottom: 12 }}>Ingredients</h2>
							<Col style={{ marginBottom: '-6px' }}>
								{ingredients.map((ingredient, index) => (
									<Col key={`ing${index}`} style={{ marginBottom: 6 }}>
										<GridRow key={index} colTemplate={'8rem 4rem 1fr'} gap={'6px'} style={{ position: 'relative' }}>
											{index !== 0 && (<DeleteButton onClick={() => handleRemoveIngredient(index)} />)}
											<Input
												type="number"
												name='amount'
												placeholder="amount"
												value={ingredient.amount}
												onChange={(e) => handleIngredientChange(e, index)}
												min={0}
												error={errors?.ingredients[index]}
											/>
											<Input
												type="text"
												name='unit'
												placeholder="unit"
												value={ingredient.unit}
												onChange={(e) => handleIngredientChange(e, index)}
												error={errors?.ingredients[index]}
											/>
											<Input
												type="text"
												name='name'
												placeholder="name"
												value={ingredient.name}
												onChange={(e) => handleIngredientChange(e, index)}
												error={errors?.ingredients[index]}
											/>
										</GridRow>
										{errors?.ingredients[index] && <ErrorPrompt>{errors?.ingredients[index]}</ErrorPrompt>}
									</Col>
								))}
								<Button.Ghost
									onClick={() => addNewIngredientField()}
									color={'#c4c4c4'}
									style={{ borderStyle: 'dashed', marginTop: 12 }}
									rounded
								>
									Add field +
								</Button.Ghost>
							</Col>

							<h2 style={{ marginBottom: 12 }}>Steps</h2>
							<Col style={{ marginBottom: '-12px' }}>
								{steps.map((step, index) => (
									<Col key={`stp${index}`} style={{ marginBottom: 12 }}>
										<Row style={{ justifyContent: 'space-between', marginBottom: 6 }}>
											<h3 style={{ margin: 0 }}>Step {index + 1}</h3>
											{index !== 0 && (
												<StepDeleteButton onClick={() => handleRemoveStep(index)} />
											)}
										</Row>
										<Input
											type="text"
											name='title'
											placeholder="Step Title"
											value={step.title}
											onChange={(e) => handleStepChange(e, index)}
											style={{ borderRadius: "6px 6px 0 0" }}
											error={errors?.steps[index]}
										/>
										<TextArea
											type="text"
											name='body'
											placeholder="Step Description"
											value={step.body}
											onChange={(e) => handleStepChange(e, index)}
											style={{ borderRadius: "0 0 6px 6px", borderTop: 0, minHeight: '6rem' }}
											error={errors?.steps[index]}
										/>
										{errors?.steps[index] && <ErrorPrompt>{errors?.steps[index]}</ErrorPrompt>}
									</Col>
								))}
							</Col>
							<Button.Ghost
								onClick={() => addNewStepField()}
								color={'#c4c4c4'}
								style={{ borderStyle: 'dashed', marginTop: 12 }}
								rounded
							>
								Add field +
							</Button.Ghost>
						</Col>
						
						<ImageInput
							onChange={(file) => setForm({...form, avatar: file})}
							height={'600px'}
							width={'400px'}
							borderRadius={'12px'}
						/>

					</GridRow>
					<Button.Primary
						color={"#FFB800"}
						style={{ width: 300, marginTop: 24, alignSelf: 'center', fontSize: '1rem' }}
						onClick={checkForm}
					>
						Submit
					</Button.Primary>
				</Container>
			</Section>
		</Page>
		{modal && (
				<>
					{modal === 'reqLogin' && (
						<LoginRequiredModal 
							closeModal={() => setModal('')}
						/>
					)}
				</>
			)}
		</>
	)
}

export default CreateRecipe
