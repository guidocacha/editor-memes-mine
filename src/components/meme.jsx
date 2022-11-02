// import html2canvas from 'html2canvas';
import React, { useState } from 'react';


const Meme = () => {

    const [imgmeme, setImgmeme] = useState(1);
    const [textmeme, setTextmeme] = useState();
    const [colortexto, setColortexto] = useState();
    const [alineartextoY, setAlineartextoY] = useState("arriba");

    const cambiarImg = e =>{
        setImgmeme(e.target.value);
    }
    const cambiarTexto = e =>{
        setTextmeme(e.target.value);
    }
    const cambiarColor = e =>{
        setColortexto(e.target.value);
    }
    const cambiarAlin = e =>{
        setAlineartextoY(e.target.value);
    }

    return (
        <div className='todo'>
            <h1 className="titulo">Creá tu propio meme y descargalo!!</h1>
            <div className='contenedor'>
                <div className="contenedor-meme" style={{backgroundImage: `url(./img/${imgmeme}.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <div className={`contenedor-texto ${alineartextoY}`}>
                        <h2 style={{color: colortexto}}>{textmeme}</h2>
                    </div>
                    {/* <img src= {`./img/${imgmeme}.jpg`} alt="" /> */}
                </div>
                <div className="contenedor-settings">
                    <div>
                        <h2>Elegí la imagen del meme</h2>
                        <select name="" id="" onChange={cambiarImg}>
                            <option value="1">Futurama</option>
                            <option value="2">Bob esponja</option>
                            <option value="3">Señora</option>
                            <option value="4">Calamardo</option>
                            <option value="5">Niña</option>
                        </select>
                    </div>
                    <div>
                        <h2>Poné el texto del meme</h2>
                        <input type="text" placeholder='Ingrese el texto...' onChange={cambiarTexto} />
                    </div>
                    <div>
                        <h2>Elegí el color del texto</h2>
                        <input type="color" onChange={cambiarColor} />
                    </div>
                    <div>
                        <h2>¿Cómo lo querés alinear?</h2>
                        <select name="" id="" onChange={cambiarAlin}>
                            <option value="arriba">Arriba</option>
                            <option value="centro">Centrado</option>
                            <option value="abajo">Abajo</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="btn-descargar">Descargar</button>
        </div>
    );
}

export default Meme;