import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Addbook from './Addbook'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Login = () => {
    var [name,setName]=useState("")
    var [pswd,setPswd]=useState("")

    const loginVlalues=()=>{
        const data={"username":name,"Password":pswd}
        console.log(data)
    }
  return (
    <div>
    
        <div classNAme="container">
    <div classNAme="row">
        <div classNAme="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div classNAme="row g-3">
                <div classNAme="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" classNAme="form-label">UserName</label>
                    <input onChange={(a)=>{setName(a.target.value)}} type="text" classNAme="form-control"/>
                </div>
                <div classNAme="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" classNAme="form-label">Password</label>
                    <input onChange={(a)=>{setPswd(a.target.value)}} type="text" classNAme="form-control"/>
                </div>
                <div classNAme="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button classNAme="btn btn-success" onClick={loginVlalues}>LOGIN</button>
                </div>
          
            <div classNAme="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <Link className='nav-link' to="/register">New User ?? Click Here !!</Link>
            </div>
            

        </div>
    </div>
</div>
    </div>
    </div>
  )
}

export default Login