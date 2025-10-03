import './Screen.css';

export default function Screen({ value }) {
    return (
        <div className="screen-container">
            <input
                type="text"
                value={value}
                readOnly
                className="screen-input"
            />
        </div>
    );
}
