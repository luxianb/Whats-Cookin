/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Col, Row } from '../../components/Containers/Index'
import Axios from 'axios'
// import Button from "../../components/Buttons/index"

const CreateRecipe = () => {
    // const [mealName, setMealName] = useState("")
    // const [description, setDescription] = useState("")
    // const [tags, setTags] = useState("")
    // const [hours, setHours] = useState("")
    // const [minutes, setMinutes] = useState("")
    // const [amount, setAmount] = useState("")
    // const [unit, setUnit] = useState("")
    // const [ingridientName, setIngridientName] = useState("")
    // const [stepTittle, setStepTittle] = useState("")
    // const [instructions, setInstructions] = useState("")

    // const mealNameUpdate = (event) => {
    //     setMealName(event.target.value)
    // }
    // const descriptionUpdate = (event) => {
    //     setDescription(event.target.value)
    // }
    // const tagsUpdate = (event) => {
    //     setTags(event.target.value)
    // }
    // const hoursUpadte = (event) => {
    //     setHours(event.target.value)
    // }
    // const minutesUpdate = (event) => {
    //     setMinutes(event.target.value)
    // }
    // const amountUpdate = (event) => {
    //     setAmount(event.target.value)
    // }
    // const unitUpdate = (event) => {
    //     setUnit(event.target.value)
    // }
    // const ingridientsUpdate = (event) => {
    //     setIngridientName(event.target.value)
    // }
    // const stepTittleUpdate = (event) => {
    //     setStepTittle(event.target.value)
    // }
    // const instructionsUpdate = (event) => {
    //     setInstructions(event.target.value)
    // }

    // const newRecipeData = () => {
        //     Axios.post("http://localhost:4000/api/recipes/new", { /api/recipes/new
            //         mealName: mealName,
            //         description: description
            //     })
            //  console.log(mealName)
            // }
    
    const URL = "http://localhost:4000/api/recipes/new"
    const postRecipe = async (data) => {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data }),
          });
       };

    const [form, setForm] = useState({
        name: String,
        description: String,
        tags: Number,
        hours: Number,
        minutes: Number,
        amount: Number,
        unit: String,
        ingridients: String,
        stepsTittle: String,
        stepsBody: String
      });
    
      const handleChange = (e) => {
        const { name, price, description, tags, hours, minutes, amount, unit, ingridients, stepsTittle, stepsBody } = e.target;
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
          [stepsTittle]: e.target.value,
          [stepsBody]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setForm({ name: "", 
                  description: "", 
                  tags: [], 
                  hours: Number, 
                  minutes: Number, 
                  amount: Number, 
                  unit: "",
                  ingridients: "", 
                  stepTittle: "", 
                  stepsBody: ""});
        postRecipe(form);
      };
console.log(form)

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
             value={form.stepsTittle} 
             type="text" 
             name="stepsTittle" 
             className="input-text-normal" 
             placeholder="Step Tittle"
             />
             <input 
             onChange={(e) => handleChange(e)}
             value={form.stepsBody} 
             type="text" 
             name="stepsBody" 
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
