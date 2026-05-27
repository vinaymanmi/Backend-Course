import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Notebook = () => {
  const [notes,setNotes]=useState([]);
  const getnotes=async ()=> {
    const response= await axios.get("http://localhost:5000/allNotes");
    // console.log(response.data.allNotebooks); 
    setNotes(response.data.allNotebooks);
  }


  useEffect((getnotes)=>{},[])  

  return (
    <div>
      <h1>Availble notes...</h1> 

      {notes.map((element, index, array) => {
        // console.log(element.heading);
        // console.log(element.content);
      return (
        <>
          <h3>{element.heading}</h3>
          <p>{element.content}</p>
          <button>Update</button>
          <button>Delete</button>
          <hr>
          </hr>
        </>
      )
          
      })}
    </div> 
  )
}

export default Notebook