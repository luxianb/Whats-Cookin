/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Col, Row } from '../../components/Containers/Index'
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

    // const handleSubmit=()=> { 
    //     const postURL = "mongodb://localhost:27017/whatsCookin" 
    //     fetch(postURL, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ 
    //             name: mealName,
    //             clockedIn:false,
    //             dates:[]
    //         })
    //     })
    //     .then(()=>{
    //          Once posted, the user will be notified 
    //         alert('You have been added to the system!');
    //     })
    // }

    const addTest =() => {
        console.log(mealName)
    }
  
    return (
        <div>
            
          <h1>Add a Recipe</h1>
          <Row>
          
          <Col>
            <form>
             <input required onChange={mealNameUpdate} type="text" className="input-text-normal" placeholder="Meal Name"/>
             <input required onChange={descriptionUpdate} type="text" className="input-text-large" placeholder="Description"/>
             <input required onChange={tagsUpdate} type="text" className="input-text-normal" placeholder="Tags"/>
             <h4>Est. Time to cook</h4>
            <Row>
             <input required onChange={hoursUpadte} type="text" className="input-text-normal" placeholder="hours"/>
             <input required onChange={minutesUpdate} type="text" className="input-text-normal" placeholder="minutes"/>
            </Row>
             <h3>Ingridients</h3>
            <Row>
             <input required onChange={amountUpdate} type="text" className="input-text-normal" placeholder="amount"/>
             <input required onChange={unitUpdate} type="text" className="input-text-normal" placeholder="unit"/>
             <input required onChange={ingridientsUpdate} type="text" className="input-text-normal" placeholder="name"/>
            </Row>
            <div>add fields</div>
             <h3>Steps</h3>
             <input required onChange={stepTittleUpdate} type="text" className="input-text-normal" placeholder="Step title"/>
             <input required onChange={instructionsUpdate} type="text" className="input-text-large" placeholder="Instructions"/>
             <button onClick={addTest}>Submit</button>
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
