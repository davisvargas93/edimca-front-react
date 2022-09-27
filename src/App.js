import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'; 
import { Login } from './components/login';
import { Producs } from './components/products';
import { Product } from './components/product';

function App() {
  return (
    <Container>
      <h2>Prueba Edimca</h2>
      <Login></Login>
      <Producs></Producs>
      <Product></Product>
      <h4>what was the main architectural pattern that you have applied in your solution?</h4>
      <p>Use layered pattern</p>
    </Container>

  );
}

export default App;
