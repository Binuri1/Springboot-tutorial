import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [users,setUsers]=useState([])  //create object for store user info using useState hook....initial state [](empty array)

  useEffect(()=>{                            //useEffect hook use to tell the react that my component needs to do something after render..
                                             //so every time page is open so it will load the user info
        loadUsers();

  },[]);        //if we not pass empty array this will run unlimited time

  const loadUsers=async()=>{                  //load users 
                                               //use async bcz JS execute line by line in here we want to execute all the lines to get all users
        
     const result =await axios.get("http://localhost:8080/users") //await use to wait here
     console.log(result)
};

                                        
  
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
      
    </div>
  )
}
