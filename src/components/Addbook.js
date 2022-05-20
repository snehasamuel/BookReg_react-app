import React, { useState } from 'react'
import Header from './Header'

const Addbook = () => {
    var [bookname,setBookname]=useState("")
    var [author,setAuthor]=useState("")
    var [price,setPrice]=useState("")

    const addBook=()=>{
        const add={"Bookname":bookname,"Author":author,"Price":price}
        console.log(add)
    }
  return (
    <div>
        <Header/>

        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Book Name</label>
                    <input onChange={(a)=>{setBookname(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Author</label>
                    <input onChange={(a)=>{setAuthor(a.target.value)}}  type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Price</label>
                    <input onChange={(a)=>{setPrice(a.target.value)}}  type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={addBook} className="btm btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addbook