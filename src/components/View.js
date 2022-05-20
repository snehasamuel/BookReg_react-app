import React from 'react'
import Header from './Header'

const View = () => {
    var viewdata=[{"Bookname":"The chronicle of a death foretold","Author":"Gabriel Guarcia","Price":"500"},
    {"Bookname":"Tuesdays with Morrie","Author":"Charles Dickens","Price":"350"},
    {"Bookname":"Premalekhanam","Author":"Basheer","Price":"300"},
    {"Bookname":"Oru Sankeerthanam Pole","Author":"Sreedaran","Price":"400"},
    {"Bookname":"Three Mistakes of my life","Author":"Chetan Bhagat","Price":"400"},]

   
  return (
    <div>
        <Header/>
        <br></br>
        
        <div className="container">
    <div className="row">
    <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Book Name</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
      
    </tr>
  </thead>
  <tbody>
      {viewdata.map((value,key)=>{
return <tr>
<th scope="row">{value.Bookname}</th>
<td>{value.Author}</td>
<td>{value.Price}</td>

</tr>

      })}
    
  
  </tbody>
</table>

    </div>
</div>

    </div>
  )
}

export default View