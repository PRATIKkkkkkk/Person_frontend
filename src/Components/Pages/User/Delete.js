import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    let {pk} = useParams()

    const navi = useNavigate()

    function deleteUser(){
        axios.delete(`http://127.0.0.1:8000/person/${pk}/`)
        navi('/user/show')
    }

  return (
    <>
    <form className='container' onSubmit={()=>{deleteUser()}} >
        <h2>Do you want to delete this user??</h2>
        <input type="submit" value="Delete" className='btn btn-outline-danger me-3' />
        <NavLink to='/user/show' className='btn btn-outline-info' >Return</NavLink>
    </form>
    </>
  )
}

export default Delete