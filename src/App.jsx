import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import { Footer } from "./Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const [nombres, setNombres] = useState("");
  const [nombres_separados, setNombres_separados] = useState([]);
  const [fecha, setFecha] = useState('')
  const [curso, setCurso] = useState('')
  const [director, setDirector] = useState('')

  useEffect(() => {
    let name = nombres.split("+");
    setNombres_separados(name);
    console.log(nombres_separados);
  }, [nombres]);
  

  return (
    <>
      <Header />

      <form action="">
        <input type="text" placeholder="introduce la fecha" onChange={(e)=>setFecha(e.target.value)}/>
        <input type="text" placeholder="introduce el curso" onChange={(e)=>setCurso(e.target.value)}/>
        <input type="text" placeholder="introduce el nombre del director" onChange={(e)=>setDirector(e.target.value)}/>
        <textarea
          id=""
          cols="60"
          rows="3"
          placeholder="introduce los nombres"
          value={nombres}
          onChange={(e) => {
            setNombres(e.target.value);
          }}
        ></textarea>

        <button
          onClick={(e)=>{
            e.preventDefault()
            nombres_separados.map((contenido, indice)=>{
              const input = document.getElementById(contenido);
            html2canvas(input, { logging: true, letterREndering: 1, useCORS: true }).then(
              (canvas) => {
                const imgWidth = 297;
                const imgHeight = 210
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF("l", "mm", [210, 297])
                pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
                pdf.save(`${contenido}.pdf`);
              }
            )
            })
            setNombres('')
            }
          }
            
          
        >
          GENERAR PDFs
        </button>
      </form>

      <h1 className="vista">VISTA PREVIA</h1>
      {nombres_separados.map((contenido, indice) => {
        return (
          <section id={contenido} className='App'>
            <div className="diploma">
              <h1>I.E.S CIUDAD DE HARO</h1>
              <h3>Diploma Otorgado A: </h3>
              <i>{contenido ? contenido: 'Nombre del alumno'}</i>
              <h4>{curso ? curso: 'Curso'}</h4>
              <div>
                <p>
                  <p>{fecha ? fecha: 'Fecha'}</p>
                  <br /> {director ? director: 'Nombre del director'}
                </p>
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </>
  );
}

export default App;
