import {useState} from 'react'
import axios from 'axios'

export default function LogIn() {
  const [form, setForm] =  useState({email: '', password: ''})

  function handleChange(e) {
    const {name, value} = e.currentTarget;
    setForm({...form, [name]: value})
  }
  async function handleSubmit() {
    const res = await axios.post('/api/session', form)
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
        name='password'
        onChange={handleChange}
        value={form.password}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Log In</button>
    </div>
  )
}