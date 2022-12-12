import React from 'react'
import { useState } from 'react'
import '../Resumen/Resumen.css'


export default function Resumen(props){

   const [obtenido, setObtenido]   = useState({
        cajaPesos: 0,
        bancoPesos: 0,
        chequePesos: 0,
        cajaDolares: 0,
        bancoDolares: 0,
        comitenteDolares: 0
   })
        
   const egreso = props.egreso  
   const ingreso = props.ingreso

   console.log('egreso es ')
   console.log(egreso)
   console.log('ingreso es en Resumen ')
   console.log(ingreso)


   function sumIng(ingreso, tipo){
        if(tipo === 1){
                let suma = 0
                ingreso.map(item=>(suma += parseFloat(item.cajaIngrePesos)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 2){
                let suma = 0
                ingreso.map(item=>(suma += parseFloat(item.bancoIngrePesos)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 3){
                let suma = 0
                ingreso.map(item=>(suma += parseFloat(item.chequeIngrePesos)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 4){
                let suma = 0
                ingreso.map(item=>(suma += parseFloat(item.cajaIngreDolares)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 5){
                let suma = 0
                ingreso.map(item=>(suma += parseFloat(item.bancoIngreDolares)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 6){
                let suma = 0
                ingreso.map(item=>(suma += parseFloat(item.comitenteIngreDolares)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 7){
                let total = new Intl.NumberFormat('de-DE').format(props.data.tipoCambio) 
                return total
        }
        if(tipo === 8){
                let suma = 0
                ingreso.map(item=>(suma += ((parseFloat(item.comitenteIngreDolares)+parseFloat(item.cajaIngreDolares)+parseFloat(item.bancoIngreDolares))*(props.data.tipoCambio))))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 9){
                let sumaPe = 0;
                let sumDol = 0;
                ingreso.map(item=>(sumaPe += ((parseFloat(item.cajaIngrePesos)+parseFloat(item.bancoIngrePesos)+parseFloat(item.chequeIngrePesos)))))
                ingreso.map(item=>(sumDol += ((parseFloat(item.comitenteIngreDolares)+parseFloat(item.cajaIngreDolares)+parseFloat(item.bancoIngreDolares))*(props.data.tipoCambio))))
                let sumTotal = parseFloat(sumaPe) + parseFloat(sumDol)
                let total = new Intl.NumberFormat('de-DE').format(sumTotal) 
                return total
        }
   }

   function sum(egreso, tipo){
        if(tipo === 1){
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.cajaEgrePesos)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 2){
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.bancoEgrePesos)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 3){
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.chequeEgrePesos)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 4){
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.cajaEgreDolares)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 5){
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.bancoEgreDolares)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 6){
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.comitenteEgreDolares)))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 7){
                let total = new Intl.NumberFormat('de-DE').format(props.data.tipoCambio) 
                return total
        }
        if(tipo === 8){
                let suma = 0
                egreso.map(item=>(suma += ((parseFloat(item.comitenteEgreDolares)+parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares))*(props.data.tipoCambio))))
                let total = new Intl.NumberFormat('de-DE').format(suma) 
                return total
        }
        if(tipo === 9){
                let sumaPe = 0;
                let sumDol = 0;
                egreso.map(item=>(sumaPe += ((parseFloat(item.cajaEgrePesos)+parseFloat(item.bancoEgrePesos)+parseFloat(item.chequeEgrePesos)))))
                egreso.map(item=>(sumDol += ((parseFloat(item.comitenteEgreDolares)+parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares))*(props.data.tipoCambio))))
                let sumTotal = parseFloat(sumaPe) + parseFloat(sumDol)
                let total = new Intl.NumberFormat('de-DE').format(sumTotal) 
                return total
        }
   }

   function diferencia(tipo){
        if(tipo === 1){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.cajaIngrePesos)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.cajaEgrePesos)))
                let neto = sumaIni-suma
                let total = new Intl.NumberFormat('de-DE').format(neto) 
                return total
        }
        if(tipo === 2){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.bancoIngrePesos)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.bancoEgrePesos)))
                let neto = sumaIni-suma
                let total = new Intl.NumberFormat('de-DE').format(neto) 
                return total
        }
        if(tipo === 3){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.chequeIngrePesos)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.chequeEgrePesos)))
                let neto = sumaIni-suma
                let total = new Intl.NumberFormat('de-DE').format(neto) 
                return total
        }
        if(tipo === 4){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.cajaIngreDolares)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.cajaEgreDolares)))
                let neto = sumaIni-suma
                let total = new Intl.NumberFormat('de-DE').format(neto) 
                return total
        }
        if(tipo === 5){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.bancoIngreDolares)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.bancoEgreDolares)))
                let neto = sumaIni-suma
                let total = new Intl.NumberFormat('de-DE').format(neto) 
                return total
        }
        if(tipo === 6){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.comitenteIngreDolares)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.comitenteEgreDolares)))
                let neto = sumaIni-suma
                let total = new Intl.NumberFormat('de-DE').format(neto) 
                return total
        }
        if(tipo === 7){
                let total = new Intl.NumberFormat('de-DE').format(props.data.tipoCambio) 
                console.log('el dolar de total neto es ' + total)
                return total
        }
        if(tipo === 8){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += (parseFloat(item.cajaIngreDolares)+parseFloat(item.bancoIngreDolares)+parseFloat(item.comitenteIngreDolares))))
                let suma = 0
                egreso.map(item=>(suma += (parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares)+parseFloat(item.comitenteEgreDolares))))
                let neto = sumaIni-suma
                neto = parseFloat(neto) * parseFloat(props.data.tipoCambio) 
                let total = new Intl.NumberFormat('de-DE').format(neto) 
                return total
        }
        if(tipo === 9){
                let inicioDol = 0
                ingreso.map(item=>(inicioDol += (parseFloat(item.cajaIngreDolares)+parseFloat(item.bancoIngreDolares)+parseFloat(item.comitenteIngreDolares))))
                let inicioPes = 0
                ingreso.map(item=>(inicioPes += (parseFloat(item.cajaIngrePesos)+parseFloat(item.bancoIngrePesos)+parseFloat(item.chequeIngrePesos))))
                let sumaDol = 0
                let sumaPes = 0
                egreso.map(item=>(sumaDol += (parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares)+parseFloat(item.comitenteEgreDolares))))
                egreso.map(item=>(sumaPes += (parseFloat(item.cajaEgrePesos)+parseFloat(item.bancoEgrePesos)+parseFloat(item.chequeEgrePesos))))
                let netoDol = inicioDol-sumaDol
                let netoPes = inicioPes-sumaPes
                netoDol = parseFloat(netoDol) * parseFloat(props.data.tipoCambio) 
                let neto = parseFloat(netoDol) + parseFloat(netoPes)
                let total = new Intl.NumberFormat('de-DE').format(neto) 
                return total
        }
   }
   

   
   
   console.log(props.data)
   console.log(egreso)

   function cajaPesos(e){
        e.preventDefault();
        
        setObtenido({
            ...obtenido,
            cajaPesos: e.target.value
        }) 
        console.log(obtenido)
    }
    function bancoPesos(e){
        e.preventDefault();
        
        setObtenido({
            ...obtenido,
            bancoPesos: e.target.value
                }) 
        console.log(obtenido)
    }
    function chequePesos(e){
        e.preventDefault();
        
        setObtenido({
            ...obtenido,
            chequePesos: e.target.value
             }) 
        console.log(obtenido)
    }
       
    function cajaDolares(e){
        e.preventDefault();
        
        setObtenido({
            ...obtenido,
            cajaDolares: e.target.value
             }) 
        console.log(obtenido)
    }
    function bancoDolares(e){
        e.preventDefault();
        
        setObtenido({
            ...obtenido,
            bancoDolares: e.target.value
             }) 
        console.log(obtenido)
    }
    function comitenteDolares(e){
        e.preventDefault();
        
        setObtenido({
            ...obtenido,
            comitenteDolares: e.target.value
            }) 
        console.log(obtenido)
    }

    function difTotal(tipo){
        if(tipo === 1){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.cajaIngrePesos)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.cajaEgrePesos)))
                let neto = sumaIni-suma
                let input = parseFloat(obtenido.cajaPesos) || 0
                let dif = parseFloat(neto) + parseFloat(input)
                let total = new Intl.NumberFormat('de-DE').format(dif) 
                return total
        }
        if(tipo === 2){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.bancoIngrePesos)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.bancoEgrePesos)))
                let neto = sumaIni-suma
                let input = parseFloat(obtenido.bancoPesos) || 0
                let dif = parseFloat(neto) + parseFloat(input)
                let total = new Intl.NumberFormat('de-DE').format(dif) 
                return total
        }
        if(tipo === 3){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.chequeIngrePesos)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.chequeEgrePesos)))
                let neto = sumaIni-suma
                let input = parseFloat(obtenido.chequePesos) || 0
                let dif = parseFloat(neto) + parseFloat(input)
                let total = new Intl.NumberFormat('de-DE').format(dif) 
                return total
        }
        if(tipo === 4){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.cajaIngreDolares)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.cajaEgreDolares)))
                let neto = sumaIni-suma
                let input = parseFloat(obtenido.cajaDolares) || 0
                let dif = parseFloat(neto) + parseFloat(input)
                let total = new Intl.NumberFormat('de-DE').format(dif) 
                return total
        }
        if(tipo === 5){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.bancoIngreDolares)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.bancoEgreDolares)))
                let neto = sumaIni-suma
                let input = parseFloat(obtenido.bancoDolares) || 0
                let dif = parseFloat(neto) + parseFloat(input)
                let total = new Intl.NumberFormat('de-DE').format(dif) 
                return total
        }
        if(tipo === 6){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += parseFloat(item.comitenteIngreDolares)))
                let suma = 0
                egreso.map(item=>(suma += parseFloat(item.comitenteEgreDolares)))
                let neto = sumaIni-suma
                let input = parseFloat(obtenido.comitenteDolares) || 0
                let dif = parseFloat(neto) + parseFloat(input)
                let total = new Intl.NumberFormat('de-DE').format(dif) 
                return total
        }
        if(tipo === 7){
                let total = new Intl.NumberFormat('de-DE').format(props.data.tipoCambio) 
                console.log('el dolar de total neto es ' + total)
                return total
        }
        if(tipo === 8){
                let sumaIni = 0
                ingreso.map(item=>(sumaIni += (parseFloat(item.cajaIngreDolares)+parseFloat(item.bancoIngreDolares)+parseFloat(item.comitenteIngreDolares))))
                let suma = 0
                egreso.map(item=>(suma += (parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares)+parseFloat(item.comitenteEgreDolares))))
                let neto = sumaIni-suma
                let input = (parseFloat(obtenido.cajaDolares)+parseFloat(obtenido.bancoDolares)+parseFloat(obtenido.comitenteDolares) )|| 0
                let dif = parseFloat(neto) + parseFloat(input)
                dif = parseFloat(dif) * parseFloat(props.data.tipoCambio)
                let total = new Intl.NumberFormat('de-DE').format(dif) 
                return total
        }
        if(tipo === 9){
                let inicioDol = 0
                ingreso.map(item=>(inicioDol += (parseFloat(item.cajaIngreDolares)+parseFloat(item.bancoIngreDolares)+parseFloat(item.comitenteIngreDolares))))
                let inicioPes = 0
                ingreso.map(item=>(inicioPes += (parseFloat(item.cajaIngrePesos)+parseFloat(item.bancoIngrePesos)+parseFloat(item.chequeIngrePesos))))
                let sumaDol = 0
                let sumaPes = 0
                egreso.map(item=>(sumaDol += (parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares)+parseFloat(item.comitenteEgreDolares))))
                egreso.map(item=>(sumaPes += (parseFloat(item.cajaEgrePesos)+parseFloat(item.bancoEgrePesos)+parseFloat(item.chequeEgrePesos))))
                let netoDol = inicioDol-sumaDol
                let netoPes = inicioPes-sumaPes
                let inputDol = (parseFloat(obtenido.cajaDolares)+parseFloat(obtenido.bancoDolares)+parseFloat(obtenido.comitenteDolares) )|| 0
                let inputPes = (parseFloat(obtenido.cajaPesos)+parseFloat(obtenido.bancoPesos)+parseFloat(obtenido.chequePesos) )|| 0
                let difDol = parseFloat(netoDol) + parseFloat(inputDol)
                let difPes = parseFloat(netoPes) + parseFloat(inputPes)
                difDol = parseFloat(difDol) * parseFloat(props.data.tipoCambio)
                let dif = parseFloat(difDol)+parseFloat(difPes)
                let total = new Intl.NumberFormat('de-DE').format(dif) 
                return total
        }
    } 


    return(
        <React.Fragment>
            {/*Pantalla Ingresos */}
            <h3>Resumen Total</h3>
            <div className="containerPantallaResumenIngreso"> 
                    <div className="detailing" id="detailing">Total Ingresos</div>
                    <div className="ingcajape" id="ingcajape">{'$ ' + sumIng(ingreso,1)}</div>
                    <div className="ingbacope" id="ingbacope">{'$ ' + sumIng(ingreso,2)}</div>
                    <div className="ingcheqpe" id="ingcheqpe">{'$ ' + sumIng(ingreso,3)}</div>
                    <div className="ingcajadol" id="ingcajadol">{'U$S ' + sumIng(ingreso,4)}</div>
                    <div className="ingbacodol" id="ingbacodol">{'U$S ' + sumIng(ingreso,5)}</div>
                    <div className="ingcomitdol" id="ingcomitdol">{'U$S ' + sumIng(ingreso,6)}</div>
                    <div className="tcing" id="tcing">{'$ ' + sum(egreso,7)}</div>
                    <div className="ingtotaldol" id="ingtotaldol">{'$ ' + sumIng(ingreso,8)}</div>
                    <div className="ingtotalpe">{'$ ' + sumIng(ingreso,9)}</div>              
            </div>
            <div className="containerPantallaResumenIngreso"> 
                    <div className="detailing" id="detailing">Total Egresos</div>
                    <div className="ingcajape" id="ingcajape">{'$ ' + sum(egreso,1)}</div>
                    <div className="ingbacope" id="ingbacope">{'$ ' + sum(egreso,2)}</div>
                    <div className="ingcheqpe" id="ingcheqpe">{'$ ' + sum(egreso,3)}</div>
                    <div className="ingcajadol" id="ingcajadol">{'U$S ' + sum(egreso,4)}</div>
                    <div className="ingbacodol" id="ingbacodol">{'U$S ' + sum(egreso,5)}</div>
                    <div className="ingcomitdol" id="ingcomitdol">{'U$S ' + sum(egreso,6)}</div>
                    <div className="tcing" id="tcing">{'$ ' + sum(egreso,7)}</div>
                    <div className="ingtotaldol" id="ingtotaldol">{'$ ' + sum(egreso,8)}</div>
                    <div className="ingtotalpe">{'$ ' + sum(egreso,9)}</div>              
            </div>
            <div className="containerPantallaResumenIngreso"> 
                    <div className="detailing" id="detailing">Flujo Neto</div>
                    <div className="ingcajape" id="ingcajape">{'$ ' + diferencia(1)}</div>
                    <div className="ingbacope" id="ingbacope">{'$ ' + diferencia(2)}</div>
                    <div className="ingcheqpe" id="ingcheqpe">{'$ ' + diferencia(3)}</div>
                    <div className="ingcajadol" id="ingcajadol">{'U$S ' + diferencia(4)}</div>
                    <div className="ingbacodol" id="ingbacodol">{'U$S ' + diferencia(5)}</div>
                    <div className="ingcomitdol" id="ingcomitdol">{'U$S ' + diferencia(6)}</div>
                    <div className="tcing" id="tcing">{'$ ' + diferencia(7)}</div>
                    <div className="ingtotaldol" id="ingtotaldol">{'$ ' + diferencia(8)}</div>
                    <div className="ingtotalpe">{'$ ' + diferencia(9)}</div>              
            </div>
            <div className="containerPantallaResumenIngreso"> 
                    <div className="detailing" id="detailing">Fondos Obtenidos</div>
                    <input type="number" name="nececajape" className='nececajape' id="nececajape" onChange={cajaPesos} placeholder="Completar"/>
                    <input type="number" name="necebcope"  className="necebcope" id="necebcope" onChange={bancoPesos} placeholder="Completar"/>
                    <input type="number" name="nececheqpe" className="nececheqpe" id="nececheqpe" onChange={chequePesos} placeholder="Completar"/>
                    <input type="number" name="nececajadol" className="nececajadol" id="nececajadol" onChange={cajaDolares} placeholder="Completar"/>
                    <input type="number" name="necebcope" className="necebcodol" id="necebcodol" onChange={bancoDolares} placeholder="Completar"/>
                    <input type="number" name="nececomitpe" className="nececomitdol" id="nececomitdol" onChange={comitenteDolares} placeholder="Completar"/>
                    {/* <div className="tcing" id="tcing">{diferencia(7)}</div>
                    <div className="ingtotaldol" id="ingtotaldol">0</div>
                    <div className="ingtotalpe">0</div>               */}
            </div>
            <div className="containerPantallaResumenIngreso"> 
                    <div className="detailing" id="detailing">Pendiente</div>
                    <div className="ingcajape" id="ingcajape">{'$ ' + difTotal(1)}</div>
                    <div className="ingbacope" id="ingbacope">{'$ ' + difTotal(2)}</div>
                    <div className="ingcheqpe" id="ingcheqpe">{'$ ' + difTotal(3)}</div>
                    <div className="ingcajadol" id="ingcajadol">{'U$S ' + difTotal(4)}</div>
                    <div className="ingbacodol" id="ingbacodol">{'U$S ' + difTotal(5)}</div>
                    <div className="ingcomitdol" id="ingcomitdol">{'U$S ' + difTotal(6)}</div>
                    <div className="tcing" id="tcing">{'$ ' + difTotal(7)}</div>
                    <div className="ingtotaldol" id="ingtotaldol">{'$ ' + difTotal(8)}</div>     
                    <div className="ingtotalpe">{'$ ' + difTotal(9)}</div>          
            </div>

            
        </React.Fragment>
    )
}