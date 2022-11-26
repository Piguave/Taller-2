import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import "../css/Imc.css";
const Imc = () => {

  const [style, setStyle] = useState("cont")
  const [mensagem, setMensagem] = useState("");
  const [imcMessage, setImcMessage] = useState("");
  const [altur, setaltur] = useState(0);
  const [pes, setpes] = useState(0);
  const [tipo,setTipo] = useState()
  const changeStyle = () => {
    console.log("you just clicked");

    setStyle("cont2");
  };

  const cambioAltura = (e) => {
    setaltur(parseInt(e.target.value))
    calcularIMC()
  }
  const cambioPeso = (e) => {
    setpes(parseInt(e.target.value))
    calcularIMC()
  }
  function calcularIMC() {

    const alt = altur / 100;
    const imc = pes / (alt * alt);



    if (imc < 16.9) {
      setMensagem(`estas muy bajo de peso !`);
      setImcMessage(`Su IMC es de: ${imc.toFixed(2)}`);
      setTipo('normal');
    } else if (imc >= 17 && imc < 18.4) {
      setMensagem(`estas muy bajo de peso!`);
      setImcMessage(`Su IMC es de: ${imc.toFixed(2)}`);
      setTipo('normal');
    } else if (imc >= 18.5 && imc < 24.9) {
      setMensagem(`Tu peso es normal!`);
      setImcMessage(`Su IMC es de: ${imc.toFixed(2)}`);
      setTipo('normal');
    } else if (imc >= 25 && imc < 29.9) {
      setMensagem(`Tienes sobrepeso!`);
      setImcMessage(`Su IMC es de: ${imc.toFixed(2)}`);
      setTipo('sobrepeso');
    } else if (imc >= 30 && imc < 34.9) {
      setMensagem(`Tienes obesidad grado I !`);
      setImcMessage(`Su IMC es de: ${imc.toFixed(2)}`);
      setTipo('obesidadI');
    } else if (imc >= 35 && imc < 40) {
      setMensagem(`Tienes obesidad grado II !`);
      setImcMessage(`Su IMC es de: ${imc.toFixed(2)}`);
      setTipo('obesidadII');
    } else if (imc >= 40) {
      setMensagem(`Tienes obesidad grado III !`);
      setImcMessage(`Su IMC es de: ${imc.toFixed(2)}`);
      setTipo('obesidadIII');
    }
  }
  return (
    <div className="app">
      <div className=" ">
        <div className="card">
          <div className="imc-progress">
            <Form.Range
              onChange={cambioPeso}
              min={20}
              max={200}
              step={1}
              value={pes}
            ></Form.Range>
            <p className="">{pes}kg</p>
          </div>
          <div className="imc-progress">
                <Form.Range
                    onChange={cambioAltura}
                    min={100}
                    max={200}
                    step={1}
                    value={altur}
                ></Form.Range>
                <p className="">{altur}cm</p>
          </div>
          <div> {mensagem} <br /></div>
          <div id="capa" className={tipo}>
            {imcMessage}
          </div>
        </div>


      </div>
    </div>


  );
}

export default Imc;