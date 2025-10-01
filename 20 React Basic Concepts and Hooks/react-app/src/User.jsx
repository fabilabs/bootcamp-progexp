import avatar from './assets/avatar.jpeg'
import Login from './Login.jsx'
import Admin from './Admin.jsx'

const profesor = {
    name: "Juan",
    image: avatar,
    dimensions: 150,
}

let isAdmin = true

export default function User () {
    return (
        <>
            <p>Mi nombre es {profesor.name}</p>
            <img 
                src={profesor.image} 
                alt={'Foto de ' + profesor.name} 
                style={{
                    width: profesor.dimensions, 
                    height:profesor.dimensions
                }} 
            />
            {isAdmin ? (
                <Admin />
            ) : (
                <Login />
            )}
        </>
    )
}