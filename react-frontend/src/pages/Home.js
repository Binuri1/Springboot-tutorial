import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {

  const [users,setUsers]=useState([])  //create object for store user info using useState hook....initial state [](empty array)

  useEffect(()=>{                            //useEffect hook use to tell the react that my component needs to do something after render..
                                             //so every time page is open so it will load the user info
        loadUsers();

  },[]);        //if we not pass empty array this will run unlimited time

  const loadUsers=async()=>{                  //load users 
                                               //use async bcz JS execute line by line in here we want to execute all the lines to get all users
        
     const result =await axios.get("http://localhost:8080/users") //await use to wait here
     setUsers(result.data)
};

                                        
  
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user,index)=>(  //create a new array from calling a function for every array element,when new user is created it shows on the table
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <button className='btn btn-primary mx-2'>View</button>
          <Link className='btn btn-success mx-2'
             to={`/edituser/${user.id}`}
          >Edit</Link>
          <button className='btn btn-danger mx-2'>Delete</button>
        </td>
      </tr>
      ))          
    }
    
    
  </tbody>
</table>
        </div>
      
    </div>
  )
}
