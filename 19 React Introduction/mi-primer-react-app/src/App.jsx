import Boton from './Boton.jsx'

export default function App({ nombre }) {

  return (
    <>
      <h1>Mi primera App de REACT</h1>
      <h2>Mi nombre es {nombre}</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur beatae hic officia laudantium doloremque provident! Tempore dolor, deleniti optio, quo non itaque sed doloremque incidunt provident aliquam eius reprehenderit iure.</p>
      <button>Enviar!</button>
      <Boton texto="Boton desde el componente App.jsx"/>
    </>
  )
}
