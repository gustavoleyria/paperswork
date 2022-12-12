import React from "react";
import { useState, useEffect } from "react";
import '../Form/Form.css'
import Egresos from "../Egresos/Egresos";
import Resumen from "../Resumen/Resumen";
import { v4 as uuid } from 'uuid';


export default function Form(props){
    const [preegre, setPreegre] = useState({
        description: '',
        cajaEgrePesos: 0,
        bancoEgrePesos: 0,
        chequeEgrePesos: 0,
        cajaEgreDolares: 0,
        bancoEgreDolares: 0,
        comitenteEgreDolares: 0,
        dolaresEgreenPesos: 0 ,
        totalEgrePesos: 0,
        id: uuid(),
        
    })



    const [detalleEgresos, setDetalleEgresos] = useState([]);

   useEffect(() => async ()=> {
        const detailegr = await JSON.parse(localStorage.getItem('detailegr'));
        if (detailegr) {
            setDetalleEgresos(detailegr);
        }
        }, []);
    
    /*useEffect(() => {
        localStorage.setItem('detailegr', JSON.stringify({detalleEgresos}));
      }, [detalleEgresos]);*/
    
      //console.log(detalleEgresos)
    
   

    function displayIn(){
        let buttonIn = document.getElementById('buttonFormEgresoInEgr')
        let buttonOut = document.getElementById('formEgresoOutEgr')
        let formOut = document.getElementById('buttonFormEgresoOutEgr')
        buttonIn.addEventListener("click", ()=>{
                buttonIn.style.display = "none"
                buttonOut.style.display = "block"
                formOut.style.display = "block"
            })
        }       

    function displayOut(){
        let buttonIn = document.getElementById('buttonFormEgresoInEgr')
        let buttonOut = document.getElementById('formEgresoOutEgr')
        let formOut = document.getElementById('buttonFormEgresoOutEgr')
        buttonOut.addEventListener("click", ()=>{
            buttonIn.style.display = "block"
            formOut.style.display = "none"
            buttonOut.style.display = "none"
        })
    }
   
    function handleChangeCajaPesos(e){
        e.preventDefault();
        let cajaEgrePesos = parseFloat(e.target.value)
        setPreegre({
            ...preegre,
            cajaEgrePesos
        })
    }
    function handleChangeBancoPesos(e){
        e.preventDefault();
        let bancoEgrePesos = parseFloat(e.target.value)
        setPreegre({
            ...preegre,
            bancoEgrePesos
        })
    }
    function handleChangeChequePesos(e){
        e.preventDefault();
        let chequeEgrePesos = parseFloat(e.target.value)
        setPreegre({
            ...preegre,
            chequeEgrePesos
        })
    }
    function handleChangeCajaDolares(e){
        e.preventDefault();
        let cajaEgreDolares = parseFloat(e.target.value)
        setPreegre({
            ...preegre,
            cajaEgreDolares
        })
    }
    function handleChangeBancoDolares(e){
        e.preventDefault();
        let bancoEgreDolares = parseFloat(e.target.value)
        setPreegre({
            ...preegre,
            bancoEgreDolares
        })
    }
    function handleChangeComitenteDolares(e){
        e.preventDefault();
        let comitenteEgreDolares = parseFloat(e.target.value)
        setPreegre({
            ...preegre,
            comitenteEgreDolares
        })
    }

    function handleChangeDescription(e){
        e.preventDefault();
        let description = e.target.value
        setPreegre({
            ...preegre,
            description
        })
    }

   
    async function handleSubmit(e){
        e.preventDefault();
        console.log(preegre)
        let detailegr = await JSON.parse(localStorage.getItem('detailegr'));
        console.log('detailegr')
        console.log(detailegr)
        const ids = uuid()
        setPreegre({
            ...preegre,
            id: ids
        })
        if (detailegr){
            console.log('verdadero')
            detailegr = [...detailegr, preegre]
            console.log(detailegr)

        }else{
            
            detailegr = [preegre]
            console.log(detailegr)
        }
        
        
        console.log(preegre)
        console.log('Previa')
        //console.log(detalleEgresos)
        localStorage.setItem('detailegr', JSON.stringify(detailegr));
        setDetalleEgresos(detailegr)

       

        console.log('Evento submit')
        console.log(detailegr)
       
        //console.log(detalleEgresos)
        
    }
    //console.log(detalleEgresos)
    function ResetDB(){
        localStorage.clear();
        setDetalleEgresos([])
    }

    async function HandleOnClinck(id){
        //alert(id)

        //e.preventDefault();
        console.log(preegre)
        let detailegr = await JSON.parse(localStorage.getItem('detailegr'));
        console.log('detailegr')
        console.log(detailegr)

        if (detailegr){
            let arr = detailegr.filter(item => item.id !== id)
            console.log('verdadero')
            detailegr = arr
            console.log(detailegr)

        }/*else{
            
            detailegr = [preegre]
            console.log(detailegr)
        }*/
        
        
        console.log(preegre)
        console.log('Previa')
        //console.log(detalleEgresos)
        localStorage.setItem('detailegr', JSON.stringify(detailegr));
        setDetalleEgresos(detailegr)

        console.log('Evento submit')
        console.log(detailegr)
       
        //console.log(detalleEgresos)
        

    }
    
    console.log('ingreso es en Form')
    console.log(props.ingreso)


    return(
        <React.Fragment>
         {/*Form Egresos */}
         <button className="buttonFormEgresoInEgr" id="buttonFormEgresoInEgr" onClick={displayIn}>Mostrar Formulario Egreso</button>
         <button className="buttonFormEgresoOutEgr" id="formEgresoOutEgr"   style={{display:"none"}} onClick={displayOut}>Ocultar Formulario Egreso</button>
         <div id="buttonFormEgresoOutEgr"  style={{display:"none"}}>
                

                <h2 className="titleFormEgresoEgr">Formulario de Egreso</h2>
                <button onClick={ResetDB}>Reset</button>
                <form onSubmit={handleSubmit}>
                    <div className='select7Egr'>
                        <label htmlFor="text">Detalle</label>
                        <input type="text" name="text" id="text" onChange={handleChangeDescription} placeholder="Completar"/>                    
                    </div>
                    <div className='select1Egr'>
                                    
                        <label htmlFor="monto1">Importe_Caja_Pesos</label>
                        <input type="number" name="monto1" id="monto1" defaultValue="0" onChange={handleChangeCajaPesos} />
                
                    </div>
                    <div className='select2Egr'>
                        
                        <label htmlFor="monto2">Importe_Banco_Pesos</label>
                        <input type="number" name="monto2" id="monto2" defaultValue="0"  onChange={handleChangeBancoPesos} />
                    </div>
                    <div className='select3Egr'>
                        
                        <label htmlFor="monto3">Importe_Cheques_Pesos</label>
                        <input type="number" name="monto3" id="monto3"  defaultValue="0" onChange={handleChangeChequePesos} />
                    </div>
                
                    <div className='select4Egr'>
                        
                        <label htmlFor="monto4">Importe_Caja_Dolares</label>
                        <input type="number" name="monto4" id="monto4" defaultValue="0"  onChange={handleChangeCajaDolares} />
                    </div>

                    <div className='select5Egr'>
                        
                        <label htmlFor="monto5">Importe_Banco_Dolares</label>
                        <input type="number" name="monto5" id="monto5" defaultValue="0"  onChange={handleChangeBancoDolares} />
                    </div>

                    <div className='select6Egr'>
                        
                        <label htmlFor="monto6">Importe_Comitente_Dolares</label>
                        <input type="number" name="monto6" id="monto6" defaultValue="0"  onChange={handleChangeComitenteDolares} />
                    </div>
            
                    
                    <div><button type="submit">Procesar</button></div>
            
                </form>
        </div>
        <h3>Detalle de Egresos</h3>
        <Egresos egreso={detalleEgresos} data={props.data}  HandleOnClinck={HandleOnClinck}/>
        <Resumen egreso={detalleEgresos} ingreso={props.ingreso} data={props.data}  totalDolarsenPesos={props.totalDolarsenPesos} totalPesos={props.totalPesos}/>

        
        
         
        </React.Fragment>
    )
}