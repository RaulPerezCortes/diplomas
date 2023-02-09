import React from 'react'

const Header = () => {
  return (
    <header>
        <h1>GENERADOR DE DIPLOMAS</h1>
        <div><h3>INSTRUCCIONES</h3>
        <ul>
            <li><p>Introduce los nombres de los alumnos</p></li>
            <li><p>Para hacer varios a la vez separa los nombres por<p> '+' </p></p></li>
            <li><p>Comprueba que todos los nombres están bien escritos y no hay espacios en blanco inecesarios</p></li>
            <li><p>Dale al botón de <p>generar</p> para obtener los archivos en formato PDF</p></li>
        </ul>
        </div>
    </header>
  )
}

export default Header