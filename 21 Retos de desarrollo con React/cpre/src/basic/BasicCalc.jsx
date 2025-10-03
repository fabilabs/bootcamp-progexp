import Screen from './Screen.jsx';
import Button from './Button.jsx';
import { useState } from 'react';
import './BasicCalc.css';

export default function BasicCalc () {
    const [inputValue, setInputValue] = useState("");
    const [memory, setMemory] = useState(0);

    const handleButtonClick = (character) => {
        const specials = ["MRC", "M-", "M+", "√", "%", "→", "CE", "AC", "="];
        if (inputValue === "Error" && character !== "AC") {
            return;
        }
        if (character === "=") {
            let expr = inputValue.replace(/x/g, '*');
            try {
                if (expr.trim() !== "") {
                    // eslint-disable-next-line no-eval
                    const result = eval(expr);
                    setInputValue(result.toString());
                }
            } catch {
                setInputValue("Error");
            }
        } else if (character === "√") {
            try {
                if (inputValue.trim() !== "") {
                    const num = parseFloat(inputValue);
                    if (!isNaN(num)) {
                        setInputValue(Math.sqrt(num).toString());
                    } else {
                        setInputValue("Error");
                    }
                }
            } catch {
                setInputValue("Error");
            }
        } else if (character === "%") {
            if (/^\d+(\.\d+)?$/.test(inputValue)) {
                setInputValue((parseFloat(inputValue) / 100).toString());
                return;
            }
            const matchMul = inputValue.match(/^(\d+(?:\.\d+)?)\s*\*\s*(\d+(?:\.\d+)?)\s*%$/);
            if (matchMul) {
                const base = parseFloat(matchMul[1]);
                const percent = parseFloat(matchMul[2]);
                if (!isNaN(base) && !isNaN(percent)) {
                    setInputValue(((base * percent) / 100).toString());
                    return;
                }
            }
            setInputValue("Error");
        } else if (character === "M+") {
            const num = parseFloat(inputValue);
            if (!isNaN(num)) {
                setMemory(m => m + num);
                setInputValue("");
            }
        } else if (character === "M-") {
            const num = parseFloat(inputValue);
            if (!isNaN(num)) {
                setMemory(m => m - num);
                setInputValue("");
            }
        } else if (character === "MRC") {
            setInputValue(memory.toString());
        } else if (character === "CE") {
            setInputValue("");
        } else if (character === "→") {
            setInputValue(prev => prev.slice(0, -1));
        } else if (character === "AC") {
            setInputValue("");
            setMemory(0);
        } else if (!specials.includes(character)) {
            setInputValue(prev => prev + character);
        }
    };

    return (
        <div className="basiccalc-container">
            <div className="basiccalc-box">
                <p className="lead text-center">Basic Calculator</p>
                <Screen value={inputValue} />
                <div>
                    <div className="row mb-3 justify-content-center basiccalc-row">
                        <Button character="MRC" onClick={handleButtonClick} />
                        <Button character="M-" onClick={handleButtonClick} />
                        <Button character="M+" onClick={handleButtonClick} />
                        <Button character="√" onClick={handleButtonClick} />
                        <Button character="%" onClick={handleButtonClick} />
                    </div>
                    <div className="row mb-3 justify-content-center basiccalc-row">
                        <Button character="→" onClick={handleButtonClick} />
                        <Button character="7" onClick={handleButtonClick} />
                        <Button character="8" onClick={handleButtonClick} />
                        <Button character="9" onClick={handleButtonClick} />
                        <Button character="/" onClick={handleButtonClick} />
                    </div>
                    <div className="row mb-3 justify-content-center basiccalc-row">
                        <Button character="CE" onClick={handleButtonClick} />
                        <Button character="4" onClick={handleButtonClick} />
                        <Button character="5" onClick={handleButtonClick} />
                        <Button character="6" onClick={handleButtonClick} />
                        <Button character="x" onClick={handleButtonClick} />
                    </div>
                    <div className="row mb-3 justify-content-center basiccalc-row">
                        <Button character="AC" onClick={handleButtonClick} />
                        <Button character="1" onClick={handleButtonClick} />
                        <Button character="2" onClick={handleButtonClick} />
                        <Button character="3" onClick={handleButtonClick} />
                        <Button character="-" onClick={handleButtonClick} />
                    </div>
                    <div className="row mb-3 justify-content-center basiccalc-row">
                        <Button character="0" onClick={handleButtonClick} />
                        <Button character="00" onClick={handleButtonClick} />
                        <Button character="." onClick={handleButtonClick} />
                        <Button character="=" onClick={handleButtonClick} />
                        <Button character="+" onClick={handleButtonClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}