import './Button.css';

// Neuromorphism press effect
const style = document.createElement('style');
style.innerHTML = `
    .neuromorph-btn:active {
        box-shadow: inset 2px 2px 6px #bebebe, inset -2px -2px 6px #ffffff;
    }
`;
if (typeof document !== 'undefined' && !document.getElementById('neuromorph-btn-style')) {
    style.id = 'neuromorph-btn-style';
    document.head.appendChild(style);
}

export default function Button({ character, onClick }) {
    return (
        <button
            className="circle-btn text-center neuromorph-btn"
            style={{
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                margin: "0 8px 8px 8px",
                aspectRatio: "1/1",
                background: "#f0f0f3",
                border: "none",
                color: "#555",
                textShadow: "1px 1px 0 #fff, -1px -1px 0 #bebebe"
            }}
            onClick={() => onClick && onClick(character)}
        >
            {character}
        </button>
    );
}
