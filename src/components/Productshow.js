import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
// import Notecontext from './Context/Notecontext';

export default function Productshow(props) {


  const { item } = props;
  console.log('Image URL:', item.image ? URL.createObjectURL(item.image) : 'No image available');

  return (
    <>
      <div className='container my-4'>
        <div className="card mb-3 h-auto">
          <div className="row g-0">
            <div className="col-md-4">
            <div className=''>
              {item.image ?  <img src={URL.createObjectURL(item.image)} className="img-fluid rounded-start" style={{width:"100%",height:"auto"}} alt="product image" /> : <img style={{width:"100%",height:"auto"}} src='https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D' alt='not loaded'/>}
            </div>
            </div>
            <div className="col-md-8">
              <div className='d-flex justify-content-end'>
                <FontAwesomeIcon className='my-2 mx-1' icon={faPenToSquare} onClick={() => { }} />
                <FontAwesomeIcon className='my-2 mx-2' icon={faTrash} onClick={() => { }} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h5 className="card-title">{item.brand}</h5>
                <p className="card-text">{item.description}</p>
                <h5 className="card-title">Quentity : {item.quantity}</h5>
                <h5 className="card-title">Price : {item.price}</h5>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
