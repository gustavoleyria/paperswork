import React from "react"
import '../Ingresos/Ingresos.css'
import { useState } from "react"


import FormIngre from "../FormIngre/FormIngre"



export default function Ingresos(){
    const [data, setData] = useState({
        date: '24/11/2022',
        cajaPesos: 0,
        bancoPesos: 0,
        chequePesos: 0,
        cajaDolares: 0,
        bancoDolares: 0,
        comitenteDolares: 0,
        tipoCambio: 1,
        dolaresenPesos: 0 ,
        totalPesos: 0

    })
   
    console.log(data)
   
    function date(e){
        e.preventDefault();
        let date = document.getElementsByClassName('detailing')
        date[0].innerHTML = e.target.value
        setData({
            ...data,
            date: e.target.value,
            dolaresenPesos: ((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio)),
            totalPesos: (((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio))+(parseFloat(data.cajaPesos)+parseFloat(data.bancoPesos)+parseFloat(data.chequePesos)))
        }) 
        console.log(date)
    }

    function cajaPesos(e){
        e.preventDefault();
        let cajaPesos = document.getElementsByClassName('ingcajape')
        cajaPesos[0].innerHTML = new Intl.NumberFormat('de-DE').format(e.target.value)
        setData({
            ...data,
            cajaPesos: e.target.value,
            dolaresenPesos: ((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio)),
            totalPesos: (((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio))+(parseFloat(data.cajaPesos)+parseFloat(data.bancoPesos)+parseFloat(data.chequePesos)))
        }) 
        console.log(cajaPesos)
    }

    function bancoPesos(e){
        e.preventDefault();
        let bancoPesos = document.getElementsByClassName('ingbacope')
        bancoPesos[0].innerHTML = new Intl.NumberFormat('de-DE').format(e.target.value)
        setData({
            ...data,
            bancoPesos: e.target.value,
            dolaresenPesos: ((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio)),
            totalPesos: (((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio))+(parseFloat(data.cajaPesos)+parseFloat(data.bancoPesos)+parseFloat(data.chequePesos)))
        }) 
        console.log(bancoPesos)
    }

    function chequePesos(e){
        e.preventDefault();
        let chequePesos = document.getElementsByClassName('ingcheqpe')
        chequePesos[0].innerHTML = new Intl.NumberFormat('de-DE').format(e.target.value)
        setData({
            ...data,
            chequePesos: e.target.value,
            dolaresenPesos: ((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio)),
            totalPesos: (((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio))+(parseFloat(data.cajaPesos)+parseFloat(data.bancoPesos)+parseFloat(data.chequePesos)))
        }) 
        console.log(chequePesos)
    }

    function cajaDolares(e){
        e.preventDefault();
        let cajaDolares = document.getElementsByClassName('ingcajadol')
        cajaDolares[0].innerHTML = new Intl.NumberFormat('de-DE').format(e.target.value)
        setData({
            ...data,
            cajaDolares: e.target.value,
            dolaresenPesos: ((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio)),
            totalPesos: (((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio))+(parseFloat(data.cajaPesos)+parseFloat(data.bancoPesos)+parseFloat(data.chequePesos)))
        }) 
        console.log(cajaDolares)
    }

    function bancoDolares(e){
        e.preventDefault();
        let bancoDolares = document.getElementsByClassName('ingbacodol')
        bancoDolares[0].innerHTML = new Intl.NumberFormat('de-DE').format(e.target.value)
        setData({
            ...data,
            bancoDolares: e.target.value,
            dolaresenPesos: ((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio)),
            totalPesos: (((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio))+(parseFloat(data.cajaPesos)+parseFloat(data.bancoPesos)+parseFloat(data.chequePesos)))
        }) 
        console.log(bancoDolares)
    }

    function comitenteDolares(e){
        e.preventDefault();
        let comitenteDolares = document.getElementsByClassName('ingcomitdol')
        comitenteDolares[0].innerHTML = new Intl.NumberFormat('de-DE').format(e.target.value)
        setData({
            ...data,
            comitenteDolares: e.target.value,
            dolaresenPesos: ((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio)),
            totalPesos: (((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio))+(parseFloat(data.cajaPesos)+parseFloat(data.bancoPesos)+parseFloat(data.chequePesos)))
        }) 
        console.log(comitenteDolares)
    }

    function tcDolares(e){
        e.preventDefault();
        let tcDolares = document.getElementsByClassName('tcing')
        tcDolares[0].innerHTML = new Intl.NumberFormat('de-DE').format(e.target.value)
        setData({
            ...data,
            tipoCambio: e.target.value,
            dolaresenPesos: ((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio)),
            totalPesos: (((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio))+(parseFloat(data.cajaPesos)+parseFloat(data.bancoPesos)+parseFloat(data.chequePesos)))
        }) 
        console.log(tcDolares)
    }

    const totalDolarsenPesos = new Intl.NumberFormat('de-DE').format((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio))
    
    const totalPesos = new Intl.NumberFormat('de-DE').format(((parseFloat(data.cajaDolares)+parseFloat(data.bancoDolares)+parseFloat(data.comitenteDolares))*(data.tipoCambio))+(parseFloat(data.cajaPesos)+parseFloat(data.bancoPesos)+parseFloat(data.chequePesos)))


    
    return(
        <React.Fragment>

        {/*Form Ingresos */}
            <div className="container" style={{position: "sticky", top: "0", marginTop: "10px"}}> 
                <div>
                    {/* <div>Vencimiento</div> */}
                    <input type="date" name="detailIng" id="detailIng" onChange={date} style={{backgroundColor:"grey", color:"white"}} />
                </div>
                <div>
                    {/* <div>Caja Pesos</div> */}
                    <input type="text" name="cajaIng" id="cajaIng"   className="cajaIng"
                      onChange={cajaPesos}  defaultValue="Caja Pesos" />
                </div>
                <div>
                    {/* <div>Bancos Pesos</div> */}
                    <input type="text" name="bancoIng" id="bancoIng"  onChange={bancoPesos} defaultValue="Bancos Pesos"/>
                </div>
                <div>
                    {/* <div>Cheques Pesos</div> */}
                    <input type="text" name="chequeIng" id="chequeIng"  onChange={chequePesos}  defaultValue="Cheques Pesos"/>
                </div>
                <div>
                    {/* <div>Caja U$S</div> */}
                    <input type="text" name="cajaDolIng" id="cajaDolIng"  onChange={cajaDolares} defaultValue="Caja U$S"/>
                </div>
                <div>
                    {/* <div>Bancos U$S</div> */}
                    <input type="text" name="bancoDolIng" id="bancoDolIng"   onChange={bancoDolares}  defaultValue="Bancos U$S"/>
                </div>
                <div>
                    {/* <div>Comitentes U$S</div> */}
                    <input type="text" name="comitenteIng" id="comitenteIng"  onChange={comitenteDolares}  defaultValue="Comitentes U$S"/>
                </div>
                <div>
                    {/* <div>TC</div> */}
                    <input type="number" name="tcIng" id="tcIng"  defaultValue="1" onChange={tcDolares} style={{backgroundColor:"grey", color:"white"}}/>
                </div>
                <div>
                    {/* <div>Dolares en $</div> */}
                    <div className="numberDetail">Dolares en $</div>
                </div>
                <div>
                    {/* <div>Total Pesos</div> */}
                    <div className="numberDetail" id="resultado">Total Pesos</div> 
                </div>                
            </div>


            {/*Pantalla Ingresos */}
            <div style={{display:'none'}}>
                <h3>Detalle de Ingresos</h3>
                <div className="containerPantallaIngreso"> 
                        <div className="detailing" id="detailing">24-11-2022</div>
                        <div className="ingcajape" id="ingcajape">0</div>
                        <div className="ingbacope" id="ingbacope">0</div>
                        <div className="ingcheqpe" id="ingcheqpe">0</div>
                        <div className="ingcajadol" id="ingcajadol">0</div>
                        <div className="ingbacodol" id="ingbacodol">0</div>
                        <div className="ingcomitdol" id="ingcomitdol">0</div>
                        <div className="tcing" id="tcing">0</div>
                        <div className="ingtotaldol" id="ingtotaldol">{'$ ' + totalDolarsenPesos}</div>
                        <div className="ingtotalpe">{'$ ' + totalPesos}</div>              
                </div>
            </div>
            
            <FormIngre data={data} totalDolarsenPesos={totalDolarsenPesos} totalPesos={totalPesos}/>
            



            
        


        </React.Fragment>
    )
}