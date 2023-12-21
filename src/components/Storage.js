import React from 'react'
// import PropTypes from 'prop-types'

export default function Storage({data}) {
  return (
    <div className='data my-4'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">E-mail</th>
            <th scope="col">Password</th>
            <th scope="col">Address</th>
            <th scope="col">City/State</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
          <tr key={index}>
            <td>{item.inputEmail4}</td>
            <td>{item.inputPassword4}</td>
            <td>{item.inputAddress}</td>
            <td>{item.inputCity + ',' + item.inputState}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
