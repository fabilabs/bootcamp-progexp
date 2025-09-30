import avatar from "./assets/avatar.jpeg"

const person = {
    name: "Miguel Angel",
    image: avatar,
    size: 90,
}

export default function User () {
    return (
        <>
            <h1>{person.name}</h1>
            <img src={person.image} alt={'Foto de ' + person.name} style={{width: person.size, height: person.size}} />
        </>
    )
}