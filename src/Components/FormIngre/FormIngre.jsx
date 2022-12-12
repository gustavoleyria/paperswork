import React from "react";
import { useState, useEffect } from "react";
import '../FormIngre/FormIngre.css'
import IngresosDetails from "../IngresosDetail/IngresosDetails";
import Form from "../Form/Form";
import { v4 as uuid } from 'uuid';


export default function FormIngre(props){
    const [preingre, setPreingre] = useState({
        description: '',
        cajaIngrePesos: 0,
        bancoIngrePesos: 0,
        chequeIngrePesos: 0,
        cajaIngreDolares: 0,
        bancoIngreDolares: 0,
        comitenteIngreDolares: 0,
        dolaresIngreenPesos: 0 ,
        totalIngrePesos: 0,
        id: uuid(),
        
    })



    const [detalleIngresos, setDetalleIngresos] = useState([]);

   useEffect(() => async ()=> {
        const detailingre = await JSON.parse(localStorage.getItem('detailingre'));
        if (detailingre) {
            setDetalleIngresos(detailingre);
        }
        }, []);
    
    /*useEffect(() => {
        localStorage.setItem('detailingre', JSON.stringify({detalleIngresos}));
      }, [detalleIngresos]);*/
    
      //console.log(detalleIngresos)
    
   

    function displayIn(){
        let buttonIn = document.getElementById('buttonFormIngresoInIng')
        let buttonOut = document.getElementById('formIngresoOutIng')
        let formOut = document.getElementById('buttonFormIngresoOutIng')
        buttonIn.addEventListener("click", ()=>{
                buttonIn.style.display = "none"
                buttonOut.style.display = "block"
                formOut.style.display = "block"
            })
        }       

    function displayOut(){
        let buttonIn = document.getElementById('buttonFormIngresoInIng')
        let buttonOut = document.getElementById('formIngresoOutIng')
        let formOut = document.getElementById('buttonFormIngresoOutIng')
        buttonOut.addEventListener("click", ()=>{
            buttonIn.style.display = "block"
            formOut.style.display = "none"
            buttonOut.style.display = "none"
        })
    }
   
    function handleChangeCajaPesos(e){
        e.preventDefault();
        let cajaIngrePesos = parseFloat(e.target.value)
        setPreingre({
            ...preingre,
            cajaIngrePesos
        })
    }
    function handleChangeBancoPesos(e){
        e.preventDefault();
        let bancoIngrePesos = parseFloat(e.target.value)
        setPreingre({
            ...preingre,
            bancoIngrePesos
        })
    }
    function handleChangeChequePesos(e){
        e.preventDefault();
        let chequeIngrePesos = parseFloat(e.target.value)
        setPreingre({
            ...preingre,
            chequeIngrePesos
        })
    }
    function handleChangeCajaDolares(e){
        e.preventDefault();
        let cajaIngreDolares = parseFloat(e.target.value)
        setPreingre({
            ...preingre,
            cajaIngreDolares
        })
    }
    function handleChangeBancoDolares(e){
        e.preventDefault();
        let bancoIngreDolares = parseFloat(e.target.value)
        setPreingre({
            ...preingre,
            bancoIngreDolares
        })
    }
    function handleChangeComitenteDolares(e){
        e.preventDefault();
        let comitenteIngreDolares = parseFloat(e.target.value)
        setPreingre({
            ...preingre,
            comitenteIngreDolares
        })
    }

    function handleChangeDescription(e){
        e.preventDefault();
        let description = e.target.value
        setPreingre({
            ...preingre,
            description
        })
    }

   
    async function handleSubmit(e){
        e.preventDefault();
        console.log(preingre)
        let detailingre = await JSON.parse(localStorage.getItem('detailingre'));
        console.log('detailingre')
        console.log(detailingre)
        const ids = uuid()
        setPreingre({
            ...preingre,
            id: ids
        })
        if (detailingre){
            console.log('verdadero')
            detailingre = [...detailingre, preingre]
            console.log(detailingre)

        }else{
            
            detailingre = [preingre]
            console.log(detailingre)
        }
        
        
        console.log(preingre)
        console.log('Previa')
        //console.log(detalleIngresos)
        localStorage.setItem('detailingre', JSON.stringify(detailingre));
        setDetalleIngresos(detailingre)

       

        console.log('Evento submit')
        console.log(detailingre)
       
        //console.log(detalleIngresos)
        
    }
    //console.log(detalleIngresos)
    function ResetDB(){
        localStorage.clear();
        setDetalleIngresos([])
    }

    async function HandleOnClinck(id){
        //alert(id)

        //e.preventDefault();
        console.log(preingre)
        let detailingre = await JSON.parse(localStorage.getItem('detailingre'));
        console.log('detailingre')
        console.log(detailingre)

        if (detailingre){
            let arr = detailingre.filter(item => item.id !== id)
            console.log('verdadero')
            detailingre = arr
            console.log(detailingre)

        }/*else{
            
            detailingre = [preingre]
            console.log(detailingre)
        }*/
        
        
        console.log(preingre)
        console.log('Previa')
        //console.log(detalleIngresos)
        localStorage.setItem('detailingre', JSON.stringify(detailingre));
        setDetalleIngresos(detailingre)

        console.log('Evento submit')
        console.log(detailingre)
       
        //console.log(detalleIngresos)
        

    }
    
    console.log('ingreso es en formingr ')
    console.log(detalleIngresos)
    return(
        <React.Fragment>
         {/*Form Ingresos */}
         <button className="buttonFormEgresoInIng" id="buttonFormIngresoInIng" onClick={displayIn}>Mostrar Formulario Ingreso</button>
         <button className="buttonFormEgresoOutIng" id="formIngresoOutIng"   style={{display:"none"}} onClick={displayOut}>Ocultar Formulario Ingreso</button>
         <div id="buttonFormIngresoOutIng"  style={{display:"none"}}>
                

                <h2 className="titleFormEgresov">Formulario de Ingreso</h2>
                <button onClick={ResetDB} style={{backgroundColor:"grey", color:"white", fontSize:"15px", fontWeight:"bold"}}>Reset</button>
                <form onSubmit={handleSubmit}>
                    <div className='select7Ing'>
                        <label htmlFor="text">Detalle</label>
                        <input type="text" name="text" id="text" onChange={handleChangeDescription}/>                    
                    </div>
                    <div className='select1Ing'>
                                    
                        <label htmlFor="monto1">Importe_Caja_Pesos</label>
                        <input type="number" name="monto1" id="monto1" defaultValue="0" onChange={handleChangeCajaPesos} />
                
                    </div>
                    <div className='select2Ing'>
                        
                        <label htmlFor="monto2">Importe_Banco_Pesos</label>
                        <input type="number" name="monto2" id="monto2" defaultValue="0"  onChange={handleChangeBancoPesos} />
                    </div>
                    <div className='select3Ing'>
                        
                        <label htmlFor="monto3">Importe_Cheques_Pesos</label>
                        <input type="number" name="monto3" id="monto3"  defaultValue="0" onChange={handleChangeChequePesos} />
                    </div>
                
                    <div className='select4Ing'>
                        
                        <label htmlFor="monto4">Importe_Caja_Dolares</label>
                        <input type="number" name="monto4" id="monto4" defaultValue="0"  onChange={handleChangeCajaDolares} />
                    </div>

                    <div className='select5Ing'>
                        
                        <label htmlFor="monto5">Importe_Banco_Dolares</label>
                        <input type="number" name="monto5" id="monto5" defaultValue="0"  onChange={handleChangeBancoDolares} />
                    </div>

                    <div className='select6Ing'>
                        
                        <label htmlFor="monto6">Importe_Comitente_Dolares</label>
                        <input type="number" name="monto6" id="monto6" defaultValue="0"  onChange={handleChangeComitenteDolares} />
                    </div>
            
                    
                    <div><button type="submit"  style={{backgroundColor:"grey", color:"white", fontSize:"15px", fontWeight:"bold"}}>Procesar</button></div>
            
                </form>
        </div>
        <h3>Detalle de Ingresos</h3>
        <IngresosDetails ingreso={detalleIngresos} data={props.data}  HandleOnClinck={HandleOnClinck}/>
        <Form data={props.data} ingreso={detalleIngresos} totalDolarsenPesos={props.totalDolarsenPesos} totalPesos={props.totalPesos}/>

        
        
         
        </React.Fragment>
    )
}