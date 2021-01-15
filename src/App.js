import React,{useState} from 'react'
import './App.css';
import { Row, Col } from 'antd';


function App() {

  const [player,setPlayer] = useState(0)
  const [marca,setMarca] = useState({
    casilla_1:"",
    casilla_2:"",
    casilla_3:"",
    casilla_4:"",
    casilla_5:"",
    casilla_6:"",
    casilla_7:"",
    casilla_8:"",
    casilla_9:"",
  })




  var turno = (pos) =>{
    

    if(player == 0){
      switch (pos) {
        case 1:
          if(marca.casilla1 == ""){
            setMarca({
              ...marca,
              casilla1:"x"
            })
            setPlayer(1)
          }else{
            alert("casilla ocupada")
          }
          break;
        case 2:
          if(marca.casilla2 == ""){
            setMarca({
              ...marca,
              casilla2:"x"
            })
            setPlayer(1)
          }else{
            alert("casilla ocupada")
          }
          break;
        case 3:
          if(marca.casilla3 == ""){
            setMarca({
              ...marca,
              casilla3:"x"
            })
            setPlayer(1)
          }else{
            alert("casilla ocupada")
          }
          break;
        case 4:
            if(marca.casilla4 == ""){
              setMarca({
                ...marca,
                casilla4:"x"
              })
              setPlayer(1)
            }else{
              alert("casilla ocupada")
            }
            break;
          case 5:
            if(marca.casilla5 == ""){
              setMarca({
                ...marca,
                casilla5:"x"
              })
              setPlayer(1)
            }else{
              alert("casilla ocupada")
            }
            break;
          case 6:
            if(marca.casilla6 == ""){
              setMarca({
                ...marca,
                casilla6:"x"
              })
              setPlayer(1)
            }else{
              alert("casilla ocupada")
            }
            break;
          case 7:
              if(marca.casilla7 == ""){
                setMarca({
                  ...marca,
                  casilla7:"x"
                })
                setPlayer(1)
              }else{
                alert("casilla ocupada")
              }
              break;
            case 8:
              if(marca.casilla8 == ""){
                setMarca({
                  ...marca,
                  casilla8:"x"
                })
                setPlayer(1)
              }else{
                alert("casilla ocupada")
              }
              break;
            case 9:
              if(marca.casilla9 == ""){
                setMarca({
                  ...marca,
                  casilla9:"x"
                })
                setPlayer(1)
              }else{
                alert("casilla ocupada")
              }
              break;
          default:
          break;
      }

    }else{
      switch (pos) {
        case 1:
          if(marca.casilla1 == ""){
            setMarca({
              ...marca,
              casilla1:"y"
            })
            setPlayer(0)
          }else{
            alert("casilla ocupada")
          }
          break;
        case 2:
          if(marca.casilla2 == ""){
            setMarca({
              ...marca,
              casilla2:"y"
            })
            setPlayer(0)
          }else{
            alert("casilla ocupada")
          }
          break;
        case 3:
          if(marca.casilla3 == ""){
            setMarca({
              ...marca,
              casilla3:"y"
            })
            setPlayer(0)
          }else{
            alert("casilla ocupada")
          }
          break;
        case 4:
            if(marca.casilla4 == ""){
              setMarca({
                ...marca,
                casilla4:"y"
              })
              setPlayer(0)
            }else{
              alert("casilla ocupada")
            }
            break;
          case 5:
            if(marca.casilla5 == ""){
              setMarca({
                ...marca,
                casilla5:"y"
              })
              setPlayer(0)
            }else{
              alert("casilla ocupada")
            }
            break;
          case 6:
            if(marca.casilla6 == ""){
              setMarca({
                ...marca,
                casilla6:"y"
              })
              setPlayer(0)
            }else{
              alert("casilla ocupada")
            }
            break;
          case 7:
              if(marca.casilla7 == ""){
                setMarca({
                  ...marca,
                  casilla7:"y"
                })
                setPlayer(0)
              }else{
                alert("casilla ocupada")
              }
              break;
            case 8:
              if(marca.casilla8 == ""){
                setMarca({
                  ...marca,
                  casilla8:"y"
                })
                setPlayer(0)
              }else{
                alert("casilla ocupada")
              }
              break;
            case 9:
              if(marca.casilla9 == ""){
                setMarca({
                  ...marca,
                  casilla9:"y"
                })
                setPlayer(0)
              }else{
                alert("casilla ocupada")
              }
              break;
          default:
          break;
      }
    }
  }

  return (
    <div className="App">
      <div>
        <h2 className="titulo">Juego del gato</h2>
      </div>
      <Row>
        <Col onClick={()=>{turno(1)}} className="casilla-izquierda" span={8}>{marca.casilla_1}</Col>
        <Col onClick={()=>{turno(2)}} className="casilla-central" span={8}>{marca.casilla_2}</Col>
        <Col onClick={()=>{turno(3)}} className="casilla-derecha" span={8}>{marca.casilla_3}</Col>
      </Row>
      <Row>
        <Col onClick={()=>{turno(4)}} className="casilla-izquierda" span={8}>{marca.casilla_4}</Col>
        <Col onClick={()=>{turno(5)}} className="casilla-central" span={8}>{marca.casilla_5}</Col>
        <Col onClick={()=>{turno(6)}} className="casilla-derecha" span={8}>{marca.casilla_6}</Col>
      </Row>
      <Row>
        <Col onClick={()=>{turno(7)}} className="casilla-izquierda" span={8}>{marca.casilla_7}</Col>
        <Col onClick={()=>{turno(8)}} className="casilla-central" span={8}>{marca.casilla_8}</Col>
        <Col onClick={()=>{turno(9)}} className="casilla-derecha" span={8}>{marca.casilla_9}</Col>
      </Row>
    </div>
  );
}

export default App;
