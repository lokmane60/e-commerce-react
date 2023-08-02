import { useState } from "react"


const Crt_post = () => {
  
  const [Name,SetName] = useState("");
  const [Desception,SetDesception] = useState("");
  const [Adress,SetAdress] = useState("");
  const handlform = ()=> {
    let state ={
      name: Name,
      Desception :Desception,
      adress: Adress,
    }
    fetch("http://localhost:5000/add",{
      method : "POST",
      headers : {"Content-Type": "application/json"},
      //mode : 'cors',
      body : JSON.stringify(state)
    })
  }
  return (
    <div>
        <form className="container mt-3" onSubmit={handlform}>
          <h2>Add post</h2>
            <input className="form-control mt-3" type="text"  placeholder="name" onChange={(e)=>SetName(e.target.value)} value={Name}/>
            <input className="form-control mt-3" type="Desception" placeholder="Desception" onChange={(e)=>SetDesception(e.target.value)} value={Desception}/>
            <input className="form-control mt-3" type="text" placeholder="address" onChange={(e)=>SetAdress(e.target.value)} value={Adress}/>
            <input className=" btn btn-primary mt-5" type="submit"/>
        </form>
    </div>
  )
}

export default Crt_post