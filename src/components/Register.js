import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    var [name,setName]=useState("")
    var [email,setEmail]=useState("")
    var [user,setUsername]=useState("")
    var [pswd,setPswd]=useState("")
    var [cnfrm,setConfirm]=useState("")

    const registerValues=()=>{
        const reg={"Name":name,"Email":email,"Username":user,"Password":pswd,"ConfirmPassword":cnfrm}
        console.log(reg)

    }
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(a)=>{setName(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Email Id</label>
                    <input onChange={(a)=>{setEmail(a.target.value)}} type="email" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">UserName</label>
                    <input onChange={(a)=>{setUsername(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(a)=>{setPswd(a.target.value)}} type="password" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Confirm Password</label>
                    <input onChange={(a)=>{setConfirm(a.target.value)}} type="password" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <Link to="/add"> <button onClick={registerValues} className="btn btn-success">REGISTER</button></Link>
                   
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <Link className='nav-link' to="/">Back To Login</Link>
                </div>
            </div>

        </div>
    </div>
</div>

        
    </div>
  )
}

export default Register