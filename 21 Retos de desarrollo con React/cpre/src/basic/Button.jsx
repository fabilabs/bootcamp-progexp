import './Button.css';

export default function Button({ character, onClick }) {
    return (
        <button
            className="circle-btn text-center neuromorph-btn"
            onClick={() => onClick && onClick(character)}
        >
            {character}
        </button>
    );
}