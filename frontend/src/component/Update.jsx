import React, { useState ,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [Error, setError] = useState("");
  const {id}=useParams();
  const Navigate=useNavigate();
  const getUser = async()=>{
    const response= await fetch(`http://localhost:4000/${id}`);
    const result= await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    } else {
      
      setError("Data updated successfully");
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
    }
    
  };
  useEffect(()=>{
    getUser();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = { name, email, age };
    const response = await fetch(`http://localhost:4000/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateUser),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setError("");
      setAge(0);
      setEmail("");
      setName("");
      Navigate("/all");
    }
  }
  return (
    <div>
      <h2>Edit Your response</h2>
      <form  onSubmit={handleSubmit}>
      
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input type="text" className="form-control" id="exampleInputName" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="mb-3">
      <label className="form-label">Age</label>
      <input type="number" className="form-control" id="exampleInputAge" value={age} onChange={(e) => setAge(e.target.value)} />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}

export default Update