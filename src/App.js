import { useState } from 'react';
import './App.css';
import { callFunction } from 'easybase-react';

function App() {
    const [inputVal, setInputVal] = useState("");
    const [resultVal, setResultVal] = useState("");

    async function buttonCallback() {
        const result = await callFunction('YOUR-CUSTOM-ROUTE', { cryptoSymbol: inputVal });
        setResultVal(`${inputVal} currently costs $${result}`);
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>Enter Cryptocurrency symbol:</p>
                <input placeholder="BTC, ETH, etc." type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
                <button onClick={buttonCallback}>Go</button>
                <p>Result: {resultVal}</p>
            </header>
        </div>
    );
}

export default App;