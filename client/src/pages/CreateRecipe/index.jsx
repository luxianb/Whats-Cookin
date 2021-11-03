/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Col, Row } from '../../components/Containers/Index'
import Axios from 'axios'
// import Button from "../../components/Buttons/index"

const CreateRecipe = () => {
    const [mealName, setMealName] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [hours, setHours] = useState("")
    const [minutes, setMinutes] = useState("")
    const [amount, setAmount] = useState("")
    const [unit, setUnit] = useState("")
    const [ingridientName, setIngridientName] = useState("")
    const [stepTittle, setStepTittle] = useState("")
    const [instructions, setInstructions] = useState("")

    const mealNameUpdate = (event) => {
        setMealName(event.target.value)
    }
    const descriptionUpdate = (event) => {
        setDescription(event.target.value)
    }
    const tagsUpdate = (event) => {
        setTags(event.target.value)
    }
    const hoursUpadte = (event) => {
        setHours(event.target.value)
    }
    const minutesUpdate = (event) => {
        setMinutes(event.target.value)
    }
    const amountUpdate = (event) => {
        setAmount(event.target.value)
    }
    const unitUpdate = (event) => {
        setUnit(event.target.value)
    }
    const ingridientsUpdate = (event) => {
        setIngridientName(event.target.value)
    }
    const stepTittleUpdate = (event) => {
        setStepTittle(event.target.value)
    }
    const instructionsUpdate = (event) => {
        setInstructions(event.target.value)
    }

    const newRecipeData = () => {
        Axios.post("http://localhost:4000/api/recipes/new", {
            mealName: mealName,
            description: description
        })
     console.log(mealName)
    }










    return (
        <div>
            
          <h1>Add a Recipe</h1>
          <Row>
          
          <Col>
            <form>
             <input onChange={mealNameUpdate} type="text" className="input-text-normal" placeholder="Meal Name"/>
             <input onChange={descriptionUpdate} type="text" className="input-text-large" placeholder="Description"/>
             <input onChange={tagsUpdate} type="text" className="input-text-normal" placeholder="Tags"/>
             <h4>Est. Time to cook</h4>
            <Row>
             <input onChange={hoursUpadte} type="text" className="input-text-normal" placeholder="hours"/>
             <input onChange={minutesUpdate} type="text" className="input-text-normal" placeholder="minutes"/>
            </Row>
             <h3>Ingridients</h3>
            <Row>
             <input onChange={amountUpdate} type="text" className="input-text-normal" placeholder="amount"/>
             <input onChange={unitUpdate} type="text" className="input-text-normal" placeholder="unit"/>
             <input onChange={ingridientsUpdate} type="text" className="input-text-normal" placeholder="name"/>
            </Row>
            <div>add fields</div>
             <h3>Steps</h3>
             <input onChange={stepTittleUpdate} type="text" className="input-text-normal" placeholder="Step title"/>
             <input onChange={instructionsUpdate} type="text" className="input-text-large" placeholder="Instructions"/>
             <button onClick={newRecipeData}>Submit</button>
            </form>
          </Col>
          <Col>
            {/* <input type="text" id="fname" name="fname" placeholder="Hours"/> */}
          </Col>
          </Row>
        </div>
    )
}

export default CreateRecipe
