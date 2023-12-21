import React, { useState } from 'react'
import Gps from './Gps';



export default function Form({ onSubmit }) {


    const [data, setData] = useState({ inputEmail4: '', inputPassword4: '', inputAddress: '', inputCity: '', inputState: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
        setData({ inputEmail4: '', inputPassword4: '', inputAddress: '', inputCity: '', inputState: '' });
    }





    return (

        <>

            <div className='container my-4'>
                <Gps />
            </div>

            <div className='container my-4'>
                <h1 className='my-4'>Contact Us</h1>
                <form className="row g-3" id='row' onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Enter yourEmail</label>
                        <input type="email" autoComplete="current-input" className="form-control" id="inputEmail4" placeholder='admin@gmail.com' value={data.inputEmail4} onChange={handleChange} />
                    </div>
                  
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <textarea type="text" className="form-control" id="inputAddress" value={data.inputAddress} onChange={handleChange} />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="complain" className="form-label">Complain</label>
                        <textarea type="text" className="form-control" id="complain" value={data.complain} onChange={handleChange} />
                    </div>
                    
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>
                </form>
            </div>

        </>
    )

}