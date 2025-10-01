import './App.css'
import Button from './Button.jsx'
import Paragraph from './Paragraph.jsx'
import User from './User.jsx'
import Admin from './Admin.jsx'
import Login from './Login.jsx'
import Counter from './Counter.jsx'
import Screen from './Screen.jsx'

let isAdmin = false

const items = [
  {id: 1, nombre: "Laptop", precio: 2000},
  {id: 2, nombre: "Mobile phone", precio: 1500},
  {id: 3, nombre: "Camera", precio: 500},
  {id: 4, nombre: "Server", precio: 4000},
]

export default function App() {
  // let adminSection
  
  // if(isAdmin) {
  //   adminSection = <Admin />
  // } else {
  //   adminSection = <Login />
  // }
  const lista = items.map(item => 
    <li key={item.id}>{item.nombre}</li>
  )
  
  return (
    <>
      {/* <h1 className="text-danger miTitulo">Mi aplicación de React</h1>
      <Paragraph />
      <Button />
      <hr />
      <h2>Grupo de clase del Bootcamp</h2>
      <User />
      <hr />
      <h2>Interfaz de administración</h2>
      {isAdmin ? (
        <Admin />
      ) : (
        <Login />
      )}
      <hr />
      <h2>Uso de bucles</h2>
      <p>Listado de productos electronicos</p>
      <ul>{lista}</ul>
      <Counter texto="Score"/>
      <hr />
      <h2>Uso de Hooks useState</h2>
      <Counter texto="Otro contador"/> */}
      <h2>Mi calculadora básica</h2>
      <Screen />
      <br />
      <Button digit="0" />
      <Button digit="1" />
      <Button digit="2" />
      <Button digit="3" />
      <br />
      <Button digit="4" />
      <Button digit="5" />
      <Button digit="6" />
      <Button digit="7" />
      <br />
      <Button digit="8" />
      <Button digit="9" />
      <Button digit="+" />
      <Button digit="-" />
      <br />
      <Button digit="*" />
      <Button digit="/" />
      <Button digit="=" />
    </>
  )
}

