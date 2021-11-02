/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Col, Row } from '../../components/Containers/Index'
import Button from "../../components/Buttons/index"

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
        // setDescription(event.target.value)
        // setTags(event.target.value)
        // setHours(event.target.value)
        // setMinutes(event.target.value)
        // setAmount(event.target.value)
        // setUnit(event.target.value)
        // setIngridientName(event.target.value)
        // setStepTittle(event.target.value)
        // setInstructions(event.target.value)
    }

    const handleSubmit=()=> { 
        const postURL = "mongodb://localhost:27017/whatsCookin" 
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name: mealName,
                clockedIn:false,
                dates:[]
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        })
    }
  
    return (
        <div>
            
          <h1>Add a Recipe</h1>
          <Row>
          
          <Col>
            <form>
             <input required onChange={mealNameUpdate} type="text" className="input-text-normal" placeholder="Meal Name"/>
             <input type="text" className="input-text-large" placeholder="Description"/>
             <input type="text" className="input-text-normal" placeholder="Tags"/>
             <span>Est. Time to cook</span>
            <Row>
             <input type="text" className="input-text-normal" placeholder="hours"/>
             <input type="text" className="input-text-normal" placeholder="minutes"/>
            </Row>
             <span>Ingridients</span>
            <Row>
             <input type="text" className="input-text-normal" placeholder="amount"/>
             <input type="text" className="input-text-normal" placeholder="unit"/>
             <input type="text" className="input-text-normal" placeholder="name"/>
            </Row>
            <div>add fields</div>
             <h3>Steps</h3>
             <input type="text" className="input-text-normal" placeholder="Step title"/>
             <input type="text" className="input-text-large" placeholder="Instructions"/>
            <Button.Ghost>
             <button type="submit"> Submit</button>
            </Button.Ghost>
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
