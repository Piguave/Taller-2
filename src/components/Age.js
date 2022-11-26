import React, { useState } from 'react';
import '../css/Age.css';

const Age = () => {

    const [date, setDate] = useState('');
    const [años, setAños] = useState('');
    const [mes, setMes] = useState('');
    const [dia, setDay] = useState('');
    const calcularedad = () => {

        var fechaNacimiento = new Date(date);
        var feachaActual = new Date();

        //obtener año 
        var totalAge = Date.now() - fechaNacimiento.getTime();
        var ageYear = new Date(totalAge);
        setAños(Math.abs(ageYear.getUTCFullYear() - 1970));

        //obtener mes
            if (feachaActual.getMonth() >= fechaNacimiento.getMonth()) {
                if (feachaActual.getDate() >= fechaNacimiento.getDate()) {
                    setMes(feachaActual.getMonth() - fechaNacimiento.getMonth());
                }
                else {
                    if ((feachaActual.getMonth() - 1) >= fechaNacimiento.getMonth()) {
                        setMes((feachaActual.getMonth() - 1) - fechaNacimiento.getMonth());
                    }
                    else {
                        setMes(((feachaActual.getMonth() - 1) + 12) - fechaNacimiento.getMonth());
                    }
                }
            }
        //obetener día 
        if (feachaActual.getDate() > fechaNacimiento.getDate()) {
            setDay(feachaActual.getDate() - fechaNacimiento.getDate());
        }
        else if (feachaActual.getDate() == fechaNacimiento.getDate()) {
            setDay(feachaActual.getDate() - fechaNacimiento.getDate());
        }
        else {
            let calDate = new Date(fechaNacimiento.getFullYear(), fechaNacimiento.getMonth(), 0);
            setDay((feachaActual.getDate() + calDate.getDate()) - fechaNacimiento.getDate());
        }

    };

    const actualizar = (ev) => {
        const data = document.getElementById('fecha_N');
        setDate(data.value);
    }


    return (
        <div>
            <div className="container">
                <div >
                    <input type="date" id="fecha_N" onChange={actualizar} className="inputdata" />
                    <button className="boton" onClick={calcularedad}>Calculate</button>
                </div>

            </div>
            <div className="container2">
                <div className="cuadrado">
                    <p>{años}</p>
                    <p>Years</p>
                </div>
                <div className="cuadrado">
                    <p>{mes}</p>
                    <p>Months</p>
                </div>
                <div className="cuadrado">
                    <p>{dia}</p>
                    <p>Days</p>
                </div>
            </div>
        </div>

    );
}

export default Age;