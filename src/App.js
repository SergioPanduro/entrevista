import React,{useState,useEffect} from 'react'
import './App.css';
import { Row, Col } from 'antd';
import window from 'global'

function App() {

  const [player,setPlayer] = useState(0)
  const [marca,setMarca] = useState({
      "value_1":{
        marcas:"",
        validator:"casilla_1"
      },
      "value_2":{
        marcas:"",
        validator:"casilla_2"
      },
      "value_3":{
        marcas:"",
        validator:"casilla_3"
      },
      "value_4":{
        marcas:"",
        validator:"casilla_4"
      },
      "value_5":{
        marcas:"",
        validator:"casilla_5"
      },
      "value_6":{
        marcas:"",
        validator:"casilla_6"
      },
      "value_7":{
        marcas:"",
        validator:"casilla_7"
      },
      "value_8":{
        marcas:"",
        validator:"casilla_8"
      },
      "value_9":{
        marcas:"",
        validator:"casilla_9"
      },
  })

  useEffect(() => {
    
    ganador()

  });


  var ganador = () =>{
    if(marca.value_1.marcas == "x" && marca.value_2.marcas == "x" && marca.value_3.marcas == "x"){
      alert("player 1 wins")
      window.location.reload()
    }else if(marca.value_4.marcas == "x" && marca.value_5.marcas == "x" && marca.value_6.marcas == "x"){
      alert("player 1 wins")
      window.location.reload()
    }else if(marca.value_7.marcas == "x" && marca.value_8.marcas == "x" && marca.value_9.marcas == "x"){
      alert("player 1 wins")
      window.location.reload()
    }else if(marca.value_1.marcas == "x" && marca.value_4.marcas == "x" && marca.value_7.marcas == "x"){
      alert("player 1 wins")
      window.location.reload()
    }else if(marca.value_2.marcas == "x" && marca.value_5.marcas == "x" && marca.value_8.marcas == "x"){
      alert("player 1 wins")
      window.location.reload()
    }else if(marca.value_3.marcas == "x" && marca.value_6.marcas == "x" && marca.value_9.marcas == "x"){
      alert("player 1 wins")
      window.location.reload()
    }else if(marca.value_3.marcas == "x" && marca.value_5.marcas == "x" && marca.value_7.marcas == "x"){
      alert("player 1 wins")
      window.location.reload()
    }else if(marca.value_1.marcas == "x" && marca.value_5.marcas == "x" && marca.value_9.marcas == "x"){
      alert("player 1 wins")
      window.location.reload()
    }

    if(marca.value_1.marcas == "y" && marca.value_2.marcas == "y" && marca.value_3.marcas == "y"){
      alert("player 2 wins")
      window.location.reload()
    }else if(marca.value_4.marcas == "y" && marca.value_5.marcas == "y" && marca.value_6.marcas == "y"){
      alert("player 2 wins")
      window.location.reload()
    }else if(marca.value_7.marcas == "y" && marca.value_8.marcas == "y" && marca.value_9.marcas == "y"){
      alert("player 2 wins")
      window.location.reload()
    }else if(marca.value_1.marcas == "y" && marca.value_4.marcas == "y" && marca.value_7.marcas == "y"){
      alert("player 2 wins")
      window.location.reload()
    }else if(marca.value_2.marcas == "y" && marca.value_5.marcas == "y" && marca.value_8.marcas == "y"){
      alert("player 2 wins")
      window.location.reload()
    }else if(marca.value_3.marcas == "y" && marca.value_6.marcas == "y" && marca.value_9.marcas == "xy"){
      alert("player 2 wins")
      window.location.reload()
    }else if(marca.value_3.marcas == "y" && marca.value_5.marcas == "y" && marca.value_7.marcas == "y"){
      alert("player 2 wins")
      window.location.reload()
    }else if(marca.value_1.marcas == "y" && marca.value_5.marcas == "y" && marca.value_9.marcas == "y"){
      alert("player 2 wins")
      window.location.reload()
    }
    
  }


  var turno = (pos,id) =>{
    
    var contador = [1,2,3,4,5,6,7,8,9]
    if(player == 0){
      contador.forEach(element => {
        switch (pos) {
          case element:
            if(id == `casilla_${element}`){
              var valor = "value_"+element
              if(marca[valor].marcas == ""){
                console.log("entro")
                setMarca({
                  ...marca,
                    [valor]:{
                      marcas:"x"
                    }
                })
                setPlayer(1)
              }else{
                alert("Square occupied")
              }
            }else{
              alert("Square occupied")
            }
            break;
          default:
            break;
        }
      });
    }else{
      contador.forEach(element => {
        switch (pos) {
          case element:
            if(id == `casilla_${element}`){
              var valor = "value_"+element
              if(marca[valor].marcas == ""){
                setMarca({
                  ...marca,
                    [valor]:{
                      marcas:"y"
                    }
                })
                setPlayer(0)
              }else{
                alert("Square occupied")
              }
            }else{
              alert("Square occupied.")
            }
            break;
          default:
            break;
        }
      });
    }
 
  }

  return (
    <div className="App">
      <div>
        <h2 className="titulo">Tic Tac Toe</h2>
      </div>
      <div>
        <h2 className="titulo">Player 1: x / Player 2: y</h2>
      </div>
      <Row>
        <Col onClick={()=>{turno(1,"casilla_1")}} className="casilla-izquierda" span={8}>{marca.value_1.marcas}</Col>
        <Col onClick={()=>{turno(2,"casilla_2")}} className="casilla-central" span={8}>{marca.value_2.marcas}</Col>
        <Col onClick={()=>{turno(3,"casilla_3")}} className="casilla-derecha" span={8}>{marca.value_3.marcas}</Col>
      </Row>
      <Row>
        <Col onClick={()=>{turno(4,"casilla_4")}} className="casilla-izquierda" span={8}>{marca.value_4.marcas}</Col>
        <Col onClick={()=>{turno(5,"casilla_5")}} className="casilla-central" span={8}>{marca.value_5.marcas}</Col>
        <Col onClick={()=>{turno(6,"casilla_6")}} className="casilla-derecha" span={8}>{marca.value_6.marcas}</Col>
      </Row>
      <Row>
        <Col onClick={()=>{turno(7,"casilla_7")}} className="casilla-izquierda" span={8}>{marca.value_7.marcas}</Col>
        <Col onClick={()=>{turno(8,"casilla_8")}} className="casilla-central" span={8}>{marca.value_8.marcas}</Col>
        <Col onClick={()=>{turno(9,"casilla_9")}} className="casilla-derecha" span={8}>{marca.value_9.marcas}</Col>
      </Row>
    </div>
  );
}

export default App;
