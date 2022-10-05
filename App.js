import logo from './logo.svg';
import './App.css';
import React from "react";
import { EventHandler } from 'react';
import { Chart } from "react-google-charts";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'react';




class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value2: '',
      value3: '',
      value4: '',
      options: [],
      options1: [],
      options2: []
    };
    

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  
  handleChange(event) {
    console.log(event.target.value)
        const options = event.target.value === 'comida' ? ['Cereal', 'Carnes'] : ['Camisas', 'Pantalones'];
        console.log(options)
        this.setState({
        options,
        value: event.target.value
        });   
  }
  
  handleChange2(event) {    
    console.log(event.target.value)
    if (event.target.value === 'Camisas' || event.target.value === 'Pantalones') {
        const options1 = event.target.value === 'Camisas' ? ['Camisa-1', 'Camisa-2', 'Camisa-3'] : ['Pantalon-1', 'Pantalon-2', 'Pantalon-3'];
        console.log(options1)
          this.setState({
            options1,
            value2: event.target.value
          });
    } else {
        const options1 = event.target.value === 'Cereal' ? ['Cereal-1', 'Cereal-2', 'Cereal-3'] : ['Cerdo', 'Res', 'Aves'];
        console.log(options1)
        this.setState({
          options1,
          value2: event.target.value
        });
    }    
  }

  handleChange3(event) {
        this.setState({value3: event.target.value.data});        
  }
  
  handleSubmit(event) {
    event.preventDefault();
  }

 

  render() {
    return (
      
      <div className='forms'>
        <form className='formulario'>
          <label className='label'>
            <div>Categoria: <select name='Categoria' value={this.state.value} onChange={this.handleChange}>
              <option value=''>Seleccionar opcion</option>
              <option value="comida">Comida</option>
              <option value="ropa">Confecciones</option>      
            </select>
            </div>
            <div>Producto:
              <select value={this.state.value2} onChange={this.handleChange2}>
              <option value=''>Seleccionar opcion 2</option>
              {
                this.state.options.map((item, index) => <option value={item} key={index}>{item}</option>)
              }
            </select>
            </div>
            <div>Marca:
            <select value={this.state.value3} onChange={this.handleChange3}>
              <option value=''>Sellecionar opcion 3</option>
              {
                this.state.options1.map((item, index) => <option value={item} key={index}>{item}</option>)    
              }            
            </select>
            </div>
          </label>
          
        </form>             
      </div>
      
    ); 
  }
  
}





export default App;
