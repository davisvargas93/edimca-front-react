import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Button, Table} from 'react-bootstrap'; 
import { porductsApi } from '../api/PorductsApi';



export function Product() {
    const [product, setProduct]=useState({});
    useEffect(()=>{
    },[])
    function changeInput(e){
        setProduct({
          ...product,
          [e.target.name]: e.target.value
        });
    }

    const createProduct= async ()=>{
        console.log(product);
        const result = await porductsApi.post('http://localhost:8080/api/v1/createProduct',product);
        console.log(result);
        // setProduct(result.data);
    }


  return (
    <Form>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name Product</Form.Label>
            <Form.Control type="Text" placeholder="Name product" value={product.name} name="name" onChange={changeInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Price"  value={product.price} name="price" onChange={changeInput} />
        </Form.Group>
        <Button variant="primary" onClick={()=>{createProduct()}} >
            Create 
        </Button>
    </Form>
  );
}
