import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Button, Table} from 'react-bootstrap'; 
import { porductsApi } from '../api/PorductsApi';



export function Producs() {
const [products, setProducts]=useState([]);
    useEffect(()=>{
        getProducts();
    },[])

    const getProducts= async ()=>{
        const result = await porductsApi.get('http://localhost:8080/api/v1/getProducts');
        setProducts(result.data);
    }


  return (
    <Container>
        <h2>Producs</h2>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product=>(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </Container>
  );
}
