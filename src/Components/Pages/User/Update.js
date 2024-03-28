import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    let {pk} = useParams()

    const {register, handleSubmit, setValue} = useForm()

    async function fetchUser(){
        let result = await axios.get(`http://127.0.0.1:8000/person/${pk}/`)
        // console.log(result.data)
        setValue('first_name', result.data.first_name)
        setValue('last_name', result.data.last_name)
        setValue('city', result.data.city)
        setValue('email', result.data.email)
        setValue('contact', result.data.contact)
        setValue('address', result.data.address)
        setValue('pincode', result.data.pincode)
    }

    useEffect(()=>{fetchUser()}, [])

    const navi = useNavigate()

    function saveData(data){
        axios.put(`http://127.0.0.1:8000/person/${pk}/`, data)
        navi('/user/show')
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveData)} >
        <label htmlFor='fn'>Enter First Name:</label>
        <input type='text'id='fn' className='form-control' {...register('first_name')} />
        <br />
        <label htmlFor='ln'>Enter Last Name:</label>
        <input type='text'id='ln' className='form-control' {...register('last_name')} />
        <br />
        <label htmlFor='c'>Enter City:</label>
        <input type='text'id='c' className='form-control' {...register('city')} />
        <br />
        <label htmlFor='email'>Enter Email:</label>
        <input type='email' id='email' className='form-control' {...register('email')} />
        <br />
        <label htmlFor='contact'>Enter Contact:</label>
        <input type='number' id='contact' className='form-control' {...register('contact')} />
        <br />
        <label htmlFor='address'>Enter Address:</label>
        <input type='text' id='address' className='form-control' {...register('address')} />
        <br />
        <label htmlFor='pincode'>Enter Pincode:</label>
        <input type='number' id='pincode' className='form-control' {...register('pincode')} />
        <br />
        <input type='submit' className='btn btn-outline-success col-6' />
        <input type='reset' className='btn btn-outline-danger col-6' />
    </form>
    </>
  )
}

export default Update