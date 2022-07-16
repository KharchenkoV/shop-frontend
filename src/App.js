import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Bucket from './components/Bucket';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';

import Register from './components/Register';
import { useEffect, useState } from 'react';
import BucketService from './services/bucket.service';
import ProductService from './services/product.service';


function App() {
  const [bucket, setBucket] = useState({})
  useEffect(() => {
    BucketService.getBucket().then(res => {
      setBucket(res.data)
    }).catch(e => {
      console.log(e)
    })

  }, [])
  const addToBucket = (id) => {
    ProductService.addToBucket(id).then(() => window.location.reload())
      .catch((error) => console.log(error))
  }

  const deleteFromBucket = (id) => {
    ProductService.deleteFromBucket(id).then(() => window.location.reload())
      .catch((error) => console.log(error))
  }

  const deleteAllProductFromBucket = (id) => {
    ProductService.deleteAllProductFromBucket(id).then(() => window.location.reload())
      .catch((error) => console.log(error))
  }

  const cleanBucket = () => {
    BucketService.cleanBucket().then(() => window.location.reload())
    .catch((error) => console.log(error))
  }
  return (
    <div>
      <Navbar amountProducts={bucket.amountProducts} />
      <div>
        <Routes>
          <Route path='/' element={<ProductList addToBucket={addToBucket} />} />
          <Route path='/bucket' element={<Bucket 
          bucket={bucket} 
          addToBucket={addToBucket} 
          deleteFromBucket={deleteFromBucket} 
          deleteAllProductFromBucket={deleteAllProductFromBucket}
          cleanBucket={cleanBucket}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
