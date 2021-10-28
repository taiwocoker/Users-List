import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Read() {
  const [APIData, setAPIData] = useState([])
  useEffect(() => {
    axios.get(`https://reqres.in/api/users`).then((response) => {
      console.log(response.data.data)
      setAPIData(response.data.data)
    })
  }, [])
  console.log(APIData)

  const getData = () => {
    axios.get(`https://reqres.in/api/users`).then((getData) => {
      setAPIData(getData.data.data)
    })
  }

  const onDelete = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`).then(() => {
      getData()
    })
  }

  return (
    <>
    <div className='container contain-row'>
      {APIData.map((data, i) => {
        return (
          <div className='' key={i}>
            <div className='col-sm-12 user-box mt-3'>
              <div className='img-style'>
                <img src={data.avatar} alt='' />
                <div className=''>
                  <span className='me-2'>{data.first_name}</span>
                  <span>{data.last_name}</span>
                </div>
                <div className=''>{data.email}</div>
              </div>
              <div className='but mt-2'>
                <span className='me-2 up-butt'>
                  <Link to={`/update/${data.id}`}>
                    <button className='table-btn'>Update</button>
                  </Link>
                </span>
                <span>
                  <button
                    onClick={() => onDelete(data.id)}
                    className='table-btn red'
                  >
                    Delete
                  </button>
                </span>
              </div>
            </div>
          </div>
        )
      })}
      
      </div>
      <div className='bttn'>
        <Link to='/create'>
          <button className='btn btn-primary add'>Add User</button>
        </Link>
      </div>
      </>
  )
}
