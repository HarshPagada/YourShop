import React, { useContext } from 'react'
import Productshow from './Productshow'
import Notecontext from './Context/Notecontext'
// import React, {useContext} from 'react'

function Updatepro() {

  const context = useContext(Notecontext)
  const { products, getallProducts } = context;
  // useEffect(() => {
    
  
      
  //   }
  // }, []);

  return (

    <>
      {/* <div className='container my-4'>
        <h2 className='my-4'>Add Product</h2>
        <form className="row g-3" onSubmit={handleclick}>
          <div className="col-md-6">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" value={product.title} onChange={onChange} className="form-control" name="title" id="title" />
          </div>
          <div className="col-md-6">
            <label htmlFor="brand" className="form-label">Brand Name</label>
            <input type="text" value={product.brand} onChange={onChange} className="form-control" name="brand" id="brand" />
          </div>
          <div className="col-md-6">
            <label htmlFor="image" className="form-label">Upload Image</label>
            <input type="file" onChange={onChangenext} className="form-control" name="image" id="image" />
          </div>
          <div className="col-12">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea type="text" onChange={onChange} value={product.description} className="form-control" name='description' id="description" placeholder="About Your Product like : size, color, design" />
          </div>
          <div className="col-md-6">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="text" onChange={onChange} value={product.price} className="form-control" name='price' id="price" />
          </div>
          <div className="col-md-6">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input type="text" onChange={onChange} value={product.quantity} className="form-control" name='quantity' id="quantity" min={1} />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Create</button>
          </div>
        </form>
      </div> */}

      <div>
        {
          products.map((item) => {
            return <Productshow key={item._id} item={item} />
          })
        }
      </div>

    </>
  )
}

export default Updatepro
