import { React, useState } from "react";
import { Col, Row } from '../../components/Containers/Index'

const CreateRecipe = () => {
    const [createInputMealName, setCreateInputMealName] = useState("")
    const [createInputDescription, setCreateInputDescription] = useState("")
    const [createInputTags, setCreateInputTags] = useState("")
    const [createInputHours, setCreateInputHours] = useState("")
    const [createInputMinutes, setCreateInputMinutes] = useState("")
    const [createInputAmount, setCreateInputAmoun] = useState("")
    const [createInputUnit, setCreateInputUnit] = useState("")
    const [createInputName, setCreateInputName] = useState("")
    const [createInputStepTittle, setCreateInputStepTittle] = useState("")
    const [createInputInstructions, setCreateInputInstructions] = useState("")
  
    return (
        <div>
            
          <h1>Add a Recipe</h1>
          <Row>
          
          <Col>
             <input type="text" className="input-text-normal" placeholder="Meal Name"/>
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

          </Col>
          <Col>
            
            {/* <input type="text" id="fname" name="fname" placeholder="Hours"/> */}
            
   
 
          </Col>
          </Row>
            
        </div>
    )
}

export default CreateRecipe
