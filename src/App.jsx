import { useState, useEffect } from 'react'
import ComboBox from "./components/ComboBox.jsx";
import Line from "./components/Line.jsx";
import './App.css'
import Input from "./components/Input.jsx";

function App() {
    const [type, setType] = useState(0)
    const [initialUnits, setInitialUnits] = useState('')
    const [resultUnits, setResultUnits] = useState()

    const typeUnits = {
        0 : 'Longitud',
        1 : 'Masa',
        2 : 'Peso'
    }

    const units = {
        0: ['Kilometros', 'Metros'],
        1: ['Kilogramos', 'Gramos'],
        2: ['Toneladas', 'Libras']
    }

    async function handleFunction(e){
        const value = e.target.value
        setInitialUnits(e.target.value)
        const url = `http://localhost:5000/api/convertkm?value=${value}&type=${type+1}`
        let valor = 0
        const result = await fetch(url).then(response => response.json()).then(data => valor = data);
        setResultUnits(valor)
    }

    return (
        <>
            <div className="title">
                <h1>Conversor de unidades</h1>
            </div>

            <div className="unitsContainer">
                <div className="typeSelector">
                    <h2>Tipo de unidades</h2>
                    <select className='comboBox' onChange={ (e) => setType(parseInt(e.target.value)) }>
                        {Object.keys(typeUnits).map( (key) =>
                            <option value={key} key={key}>
                                {typeUnits[key]}
                            </option>)
                        }
                    </select>
                </div>

                <div className="parameter">
                    <h3>Unidades de entrada</h3>
                    <select className="comboBox" disabled>
                        <option value='1'>{ units[type][0] }</option>
                    </select>
                    <Input value={initialUnits} handleFunction={(e) => {handleFunction(e)}} isDisable={false}/>
                </div>

                <div className="parameter">
                    <h3>Unidades de salida</h3>
                    <select className="comboBox" disabled>
                        <option value='1'>{ units[type][1] }</option>
                    </select>
                    <input className="field"
                        type="text"
                        placeholder="0.00"
                        value={resultUnits}
                        disabled
                    />
                    <Line/>
                </div>
            </div>
        </>
    )
}

export default App
