import { useState } from 'react'

export default function Counter ({ texto }) {
    //    [variable, funcion setXX] = useState(valor de inicializacion)
    const [count, setCount] = useState(0)

    function handleClick () {
        setCount(count + 1)
    }

    return (
        <button onClick={handleClick}>
            {texto}: {count}
        </button>
    )
}

