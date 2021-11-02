import React from 'react'
import { Col, Row } from '../../components/Containers'

const CreateRecipe = () => {
    return (
        <div>
            
          <h1>Add a Recipe</h1>
          <Row>
          
          <Col>
             <input type="text" name="fname" placeholder="Meal Name"/>
             <input type="text" name="fname" placeholder="Description"/>
             <input type="text" name="fname" placeholder="Tags"/>
             <span>Est. Time to cook</span>
            <Row>
             <input type="text" name="fname" placeholder="hours"/>
             <input type="text" name="fname" placeholder="minutes"/>
            </Row>
             <span>Ingridients</span>
            <Row>
             <input type="text" name="fname" placeholder="amount"/>
             <input type="text" name="fname" placeholder="unit"/>
             <input type="text" name="fname" placeholder="name"/>
            </Row>
            <div>add fields</div>
            <h3>Steps</h3>
            <input type="text" name="fname" placeholder="Step title"/>
            <input type="text" name="fname" placeholder="Instructions"/>

          </Col>
          <Col>
            
            {/* <input type="text" id="fname" name="fname" placeholder="Hours"/> */}
            
   
 
          </Col>
          </Row>
            
        </div>
    )
}

export default CreateRecipe
