import React from "react"
import '../IngresosDetail/IngresosDetails.css'
import eliminar from '../../img/eliminar.png'

export default function IngresosDetails(props){
    
    const formatter = new Intl.NumberFormat('es-PE', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });


        if(props.ingreso){
            //const totaldolenpes = parseFloat(item.cajaEgrePesos)+parseFloat(item.bancoEgrePesos)+parseFloat(item.chequeEgrePesos)+((parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares)+parseFloat(item.comitenteEgreDolares))*(parseFloat(props.data.tipoCambio)));
            return(
                props.ingreso.map((item, index) => (
    
                    <div className="containerPantallaIngresoIng" key={index}> 
                        <div className="detailingIng" id="detailing">{item.description}</div>
                        <div className="ingcajapeIng" id="ingcajape">{'$ ' +  formatter.format(item.cajaIngrePesos)}</div>
                        <div className="ingbacopeIng" id="ingbacope">{'$ ' + formatter.format(item.bancoIngrePesos)}</div>
                        <div className="ingcheqpeIng" id="ingcheqpe">{'$ ' + formatter.format(item.chequeIngrePesos)}</div>
                        <div className="ingcajadolIng" id="ingcajadol">{'U$S ' + formatter.format(item.cajaIngreDolares)}</div>
                        <div className="ingbacodolIng" id="ingbacodol">{'U$S ' + formatter.format(item.bancoIngreDolares)}</div>
                        <div className="ingcomitdolIng" id="ingcomitdol">{'U$S ' + formatter.format(item.comitenteIngreDolares)}</div>
                        <div className="tcingIng" id="tcing"><button onClick={()=>props.HandleOnClinck(item.id)}><img src={eliminar} alt="del"/></button></div>
                        <div className="ingbacodolIng" id="ingbacodol">{'$ ' + formatter.format((parseFloat(item.cajaIngreDolares)+parseFloat(item.bancoIngreDolares)+parseFloat(item.comitenteIngreDolares))*(parseFloat(props.data.tipoCambio)))}</div>
                        <div className="ingcomitdolIng" id="ingcomitdol">{'$ ' + formatter.format(parseFloat(item.cajaIngrePesos)+parseFloat(item.bancoIngrePesos)+parseFloat(item.chequeIngrePesos)+((parseFloat(item.cajaIngreDolares)+parseFloat(item.bancoIngreDolares)+parseFloat(item.comitenteIngreDolares))*(parseFloat(props.data.tipoCambio))))}</div>
                    </div>  
            )
                )
            )
        
    

        }else{
            return(
                <div className="containerPantallaIngresoIng" id={'nada'}> 
                        <div className="detailingIng" id="detailing">{"sin datos"}</div>
                        <div className="ingcajapeIng" id="ingcajape">{'$ ' + formatter.format(0)}</div>
                        <div className="ingbacopeIng" id="ingbacope">{'$ ' + formatter.format(0)}</div>
                        <div className="ingcheqpeIng" id="ingcheqpe">{'$ ' + formatter.format(0)}</div>
                        <div className="ingcajadolIng" id="ingcajadol">{'$ ' + formatter.format(0)}</div>
                        <div className="ingbacodolIng" id="ingbacodol">{'$ ' + formatter.format(0)}</div>
                        <div className="ingcomitdolIng" id="ingcomitdol">{'$ ' + formatter.format(0)}</div>
                        <div className="tcingIng" id="tcing">{'$ ' + formatter.format(0)}</div>
                        <div className="ingbacodolIng" id="ingbacodol">{'$ ' + formatter.format(0)}</div>
                        <div className="ingcomitdolIng" id="ingcomitdol">{'$ ' + formatter.format(0)}</div>
                    </div>  
            )
        }
        
}