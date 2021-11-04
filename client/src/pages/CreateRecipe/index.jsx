/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Col, Row } from '../../components/Containers/index'
import Axios from 'axios'
// import Button from "../../components/Buttons/index"

const CreateRecipe = () => {
    
    const URL = "http://localhost:4000/api/recipes/new"
    const [form, setForm] = useState({
        name: String,
        description: String,
        tags: Array,
        hours: Number, 
        minutes: Number,
        amount: Number,
        unit: String,
        ingridients: String,
        title: String,
        body: String
    });
    console.log(form)
    
    const handleChange = (e) => {
        const { name, description, tags, hours, minutes, amount, unit, ingridients, title, body } = e.target;
        setForm({
            ...form,
            [name]: e.target.value,
            [description]: e.target.value,
            [tags]: e.target.value,
            [hours]: e.target.value,
            [minutes]: e.target.value,
            [amount]: e.target.value,
            [unit]: e.target.value,
            [ingridients]: e.target.value,
            [title]: e.target.value,
            [body]: e.target.value
        });
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({ 
            name: String, 
            description: String, 
            tags: Array,
            hours: Number, 
            minutes: Number, 
            unit: String,
            amount: Number,
            ingridients: Array, 
            title: String, 
            body: String
        });
            postRecipe(form);
     };
        console.log(form)
        
        const postRecipe = async (data) => {
            const res = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": `${form.name}`,
                    "description": `${form.description}`,
                    "tags": [`${form.tags}`],
                    "type": "Lunch",
                    "time": {"hour": `${form.hours}`, "minutes": `${form.minutes}`},
                    "ingredients": [{"amount": `${form.amount}`, "unit": `${form.unit}`, "name": `${form.ingridients}`}],
                    "picture": {"avatar": "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/ab/bf/5e/eggs-ben-with-bacon-delicious.jpg", "cloudinary_id": ""},
                    "steps": [{"title": `${form.title}`, "body": `${form.body}`}]
                }),
              });
           };
        
        return (
            <div>
            
          <h1>Add a Recipe</h1>
          <Row>
          <Col>
            <form onSubmit={(e) => handleSubmit(e)}>
             <input
              onChange={(e) => handleChange(e)} 
              value={form.name} 
              type="text" 
              name="name" 
              className="input-text-normal" 
              placeholder="Meal Name"
             />
             <input 
              onChange={(e) => handleChange(e)} 
              value={form.description} 
              type="text" 
              name="description"
              className="input-text-large" 
              placeholder="Description"
             />
             <input 
              onChange={(e) => handleChange(e)} 
              value={form.tags} 
              type="text" 
              name="tags" 
              className="input-text-normal" 
              placeholder="Tags"
             />
             <h4>Est. Time to cook</h4>
            <Row>
             <input 
             onChange={(e) => handleChange(e)} 
             value={form.hours} 
             type="number" 
             name="hours" 
             className="input-text-normal" 
             placeholder="Hours"
             />
             <input 
             onChange={(e) => handleChange(e)} 
             value={form.minutes} 
             type="number" 
             name="minutes" 
             className="input-text-normal" 
             placeholder="Minutes"
             />
            </Row>
             <h3>Ingridients</h3>
            <Row>
             <input 
             onChange={(e) => handleChange(e)} 
             value={form.amount} 
             type="number" 
             name="amount" 
             className="input-text-normal" 
             placeholder="Amount"
             />
             <input onChange={(e) => handleChange(e)} 
             value={form.unit} 
             type="text" 
             name="unit" 
             className="input-text-normal" 
             placeholder="Unit"
             />
             <input 
             onChange={(e) => handleChange(e)} 
             value={form.ingridients} 
             type="text" 
             name="ingridients" 
             className="input-text-normal" 
             placeholder="Ingridients"
             />
            </Row>
            <div>add fields</div>
             <h3>Steps</h3>
             <input 
             onChange={(e) => handleChange(e)} 
             value={form.title} 
             type="text" 
             name="title" 
             className="input-text-normal" 
             placeholder="Step Tittle"
             />
             <input 
             onChange={(e) => handleChange(e)} 
             value={form.body} 
             type="text" 
             name="body" 
             className="input-text-normal" 
             placeholder="Step Instructions"
             />
             <button>Submit</button>
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
