import {useState} from 'react'
import axios from 'axios'

export default function SignUp() {
  const [form, setForm] =  useState({name: '', email: '', password: ''})

  function handleChange(e) {
    const {name, value} = e.currentTarget;
    setForm({...form, [name]: value})
  }
  async function handleSubmit() {
    const res = await axios.post('/api/user', form)
    console.log(res)
  }

  return(
    <div>
      <input 
        name='email'
        onChange={handleChange}
        value={form.email}
        placeholder="email"
       />
      <input 
        name='name'
        onChange={handleChange}
        value={form.name}
        placeholder="name"
      />
      <input 
        name='password'
        onChange={handleChange}
        value={form.password}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  )
}