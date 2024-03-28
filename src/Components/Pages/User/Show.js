import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Show() {
    const [user, setUser] = useState([])

    async function fetchUser(){
        let result = await axios.get('http://127.0.0.1:8000/person')
        // console.log(result.data)
        setUser(result.data)
    }

    useEffect(()=>{fetchUser()}, [])

  return (
    <>
    <table className='table'>
        <thead>
            <tr>
                <th>first_name</th>
                <th>Last_name</th>
                <th>City</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Pincode</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
             user.map(obj=>{
                return(
                    <tr>
                        <td>{obj.first_name}</td>
                        <td>{obj.last_name}</td>
                        <td>{obj.city}</td>
                        <td>{obj.email}</td>
                        <td>{obj.contact}</td>
                        <td>{obj.address}</td>
                        <td>{obj.pincode}</td>
                        <td>
                            <NavLink to={`/user/update/${obj.id}`} className='btn btn-outline-warning btn-sm me-3' >Update</NavLink>
                            <NavLink to={`/user/delete/${obj.id}`} className='btn btn-outline-danger btn-sm me-3' >Delete</NavLink>
                        </td>
                    </tr>
                )
             })   
            }
        </tbody>
    </table>
    </>
  )
}

export default Show