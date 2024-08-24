import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Read() {
  const [data, setData] = useState();
  const [Error, setError] = useState("");
  async function getData() {
    const response = await fetch("http://localhost:4000");
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setData(result);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/${id}`, {  // Use backticks here
        method: "DELETE"
      });
      const result = await response.json();
      
      if (!response.ok) {
        console.log(result.error);
        setError(result.error);
      } else {
        setError("Data deleted successfully");
      }
      
      setTimeout(() => {
        setError("");
        getData();
      }, 2000);
    } catch (error) {
      console.error('Failed to delete data:', error);
      setError('An unexpected error occurred.');
    }
  };
  return (
    <div className='container my-2  '>
      {Error && <div className="alert alert-danger">
        {Error}
      </div>}
      <h2 className='text-center'>All Post</h2>
      <div className='row'>
        {data?.map((ele) => (
          <div key={ele._id} className='col-3'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> {ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="text-muted">{ele.age}</p>
                <a href="#" className="card-link" onClick={()=> handleDelete(ele._id)}>Delete</a>
                <Link to={`/${ele._id}`}className="card-link">Update</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Read