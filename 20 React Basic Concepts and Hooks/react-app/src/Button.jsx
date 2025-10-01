export default function Button ({ digit }) {
    function handleClick () {
        //alert('Hiciste click en el boton')
    }

    return (
        <button onClick={handleClick}>{digit}</button>
    )
}