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
    <div className='container'>
      
          
          {APIData.map((data, i) => {
            return (
              <div key={i}>
                <p>{data.first_name}</p>
                <p>{data.last_name}</p>
                <p>{data.email}</p>
                <img src={data.avatar} alt="" />
                <p>
                  <Link to={`/update/${data.id}`}>
                    <button className='table-btn'>Update</button>
                  </Link>
                </p>
                <p>
                  <button
                    onClick={() => onDelete(data.id)}
                    className='table-btn red'
                  >
                    Delete
                  </button>
                </p>
              </div>
            )
          })}
      
      <Link to='/create'>
        <button className='btn btn-primary add'>Add User</button>
      </Link>
    </div>
  )
}
