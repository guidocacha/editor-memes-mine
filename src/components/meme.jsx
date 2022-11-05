import html2canvas from 'html2canvas';
import React, { useState } from 'react';


const Meme = () => {

    const [imgmeme, setImgmeme] = useState(1);
    const [textmeme, setTextmeme] = useState();
    const [colortexto, setColortexto] = useState("#000000");
    const [alineartextoY, setAlineartextoY] = useState("arriba");
    const [tamaño, setTamaño] = useState(2);

    const cambiarImg = e => {
        setImgmeme(e.target.value);
    }
    const cambiarTexto = e => {
        setTextmeme(e.target.value);
    }
    const cambiarColor = e => {
        setColortexto(e.target.value);
    }
    const cambiarAlin = e => {
        setAlineartextoY(e.target.value);
    }
    const cambiarTamaño = e => {
        if (e.target.value === "+") {
            setTamaño(tamaño + .3);
        } else {
            setTamaño(tamaño - .3);
        }
    }
    const descargar = () => {
        html2canvas(document.querySelector(".contenedor-meme")).then(canvas => {
            let link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'meme.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    return (
        <div className='todo'>
            <h1 className="titulo">¡CREÁ TU PROPIO MEME!</h1>
            <div className='contenedor'>
                <div className="contenedor-meme" style={{ backgroundImage: `url(./img/${imgmeme}.jpg)`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPositionY: "center" }}>
                    <div className={`contenedor-texto ${alineartextoY}`}>
                        <h1 style={{ color: colortexto, fontSize: `${tamaño}rem` }}>{textmeme}</h1>
                    </div>
                </div>
                <div className="contenedor-settings">
                    <div className='setting'>
                        <h2>Elegí la imagen del meme</h2>
                        <select name="" className='set' onChange={cambiarImg}>
                            <option value="1">Futurama</option>
                            <option value="2">Bob esponja</option>
                            <option value="3">Señora</option>
                            <option value="4">Calamardo</option>
                            <option value="5">Niña</option>
                            <option value="6">Alberto</option>
                        </select>
                    </div>
                    <div className='setting'>
                        <h2>Poné el texto del meme</h2>
                        <input type="text" className='set' placeholder='Ingrese el texto...' onChange={cambiarTexto} />
                    </div>
                    <div className='setting'>
                        <h2>Elegí el color del texto</h2>
                        <input type="color" className='set' onChange={cambiarColor} />
                    </div>
                    <div className='setting'>
                        <h2>Elegí el tamaño de la letra</h2>
                        <button className='set-size' onClick={cambiarTamaño} value="+">+</button>
                        <button className='set-size' onClick={cambiarTamaño} value="-">-</button>
                    </div>
                    <div className='setting'>
                        <h2>¿Cómo lo querés alinear?</h2>
                        <select name="" className='set' onChange={cambiarAlin}>
                            <option value="arriba">Arriba</option>
                            <option value="centro">Centrado</option>
                            <option value="abajo">Abajo</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="btn-descargar" onClick={descargar}>Descargar</button>
        </div>
    );
}

export default Meme;