import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
const axios =require("axios")
export default function 
() {
  let Navigate=useNavigate();
  useEffect(() => {
    axios.get("https://kmitattbackend.herokuapp.com/")
  }, [])
  
  return (
    <div id='home_body'>
      <h1 id='boom_welcome' >Boom!!</h1>
      <div className='d-flex justify-content-center my-3'>
        <Link to="/attendance" id='click_me_for_att'>Click Me For Your Attendance</Link><br></br>
        </div>

          <p className='d-flex justify-content-center' id='get_entire'>Get Entire Section Attendance</p>
        <div id='sections_but' className='container my-3' >
          <div className='container'>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"cse_a"}})}}>CSE A</button>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"cse_b"}})}}>CSE B</button>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"cse_c"}})}}>CSE C</button>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"cse_d"}})}}>CSE D</button>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"cse_e"}})}}>CSE E</button>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"cse_f"}})}}>CSE F</button>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"cse_g"}})}}>CSE G</button>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"aiml_a"}})}}>AIML A</button>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"aiml_b"}})}}>AIML B</button>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"it_a"}})}}>IT A</button>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"it_b"}})}}>IT B</button>
        <button className='mx-2 but_home_sec' onClick={()=>{Navigate("/section",{state:{"sec":"ds_a"}})}}>DS A</button>
        </div>
        </div>
    </div>
  )
}
