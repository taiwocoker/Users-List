import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import Alert from './alert'

export default function Create() {
  let history = useHistory()
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const postData = (e) => {
    e.preventDefault()
    if (first_name && last_name && email && avatar) {
      axios
        .post(`https://reqres.in/api/users`, {
          first_name,
          last_name,
          email,
          avatar,
        })
        .then(() => {
          history.push('/')
          showAlert(true, 'success', 'Contact successfully created')
        })
    } else {
      showAlert(true, 'danger', 'please enter value')
    }
  }
  return (
    <div className='container'>
      <form onSubmit={postData}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label htmlFor='firstname' className='form-label'>
              First Name
            </label>
            <input
              id='firstname'
              type='text'
              className='form-control'
              placeholder='First Name'
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label htmlFor='lastname' className='form-label'>
              Last Name
            </label>
            <input
              id='lastname'
              type='text'
              className='form-control'
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='form-control'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              size='30'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label htmlFor='avatar' className='form-label'>
              Phone Number
            </label>
            <input
              type='file'
              id='avatar'
              className='form-control'
              placeholder='Image'
              onChange={(e) => setAvatar(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='butto'>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </div>
      </form>
      
    </div>
  )
}
