import React from "react"
import '../IngresosDetail/IngresosDetails.css'
import eliminar from '../../img/eliminar.png'

export default function IngresosDetails(props){
    
    


        if(props.ingreso){
            //const totaldolenpes = parseFloat(item.cajaEgrePesos)+parseFloat(item.bancoEgrePesos)+parseFloat(item.chequeEgrePesos)+((parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares)+parseFloat(item.comitenteEgreDolares))*(parseFloat(props.data.tipoCambio)));
            return(
                props.ingreso.map((item, index) => (
    
                    <div className="containerPantallaIngresoIng" key={index}> 
                        <div className="detailingIng" id="detailing">{item.description}</div>
                        <div className="ingcajapeIng" id="ingcajape">{'$ ' + new Intl.NumberFormat('de-DE').format(item.cajaIngrePesos)}</div>
                        <div className="ingbacopeIng" id="ingbacope">{'$ ' + new Intl.NumberFormat('de-DE').format(item.bancoIngrePesos)}</div>
                        <div className="ingcheqpeIng" id="ingcheqpe">{'$ ' + new Intl.NumberFormat('de-DE').format(item.chequeIngrePesos)}</div>
                        <div className="ingcajadolIng" id="ingcajadol">{'U$S ' + new Intl.NumberFormat('de-DE').format(item.cajaIngreDolares)}</div>
                        <div className="ingbacodolIng" id="ingbacodol">{'U$S ' + new Intl.NumberFormat('de-DE').format(item.bancoIngreDolares)}</div>
                        <div className="ingcomitdolIng" id="ingcomitdol">{'U$S ' + new Intl.NumberFormat('de-DE').format(item.comitenteIngreDolares)}</div>
                        <div className="tcingIng" id="tcing"><button onClick={()=>props.HandleOnClinck(item.id)}><img src={eliminar} alt="del"/></button></div>
                        <div className="ingbacodolIng" id="ingbacodol">{'$ ' + new Intl.NumberFormat('de-DE').format((parseFloat(item.cajaIngreDolares)+parseFloat(item.bancoIngreDolares)+parseFloat(item.comitenteIngreDolares))*(parseFloat(props.data.tipoCambio)))}</div>
                        <div className="ingcomitdolIng" id="ingcomitdol">{'$ ' + new Intl.NumberFormat('de-DE').format(parseFloat(item.cajaIngrePesos)+parseFloat(item.bancoIngrePesos)+parseFloat(item.chequeIngrePesos)+((parseFloat(item.cajaIngreDolares)+parseFloat(item.bancoIngreDolares)+parseFloat(item.comitenteIngreDolares))*(parseFloat(props.data.tipoCambio))))}</div>
                    </div>  
            )
                )
            )
        
    

        }else{
            return(
                <div className="containerPantallaIngresoIng" id={'nada'}> 
                        <div className="detailingIng" id="detailing">{"sin datos"}</div>
                        <div className="ingcajapeIng" id="ingcajape">{'$ ' + 0}</div>
                        <div className="ingbacopeIng" id="ingbacope">{'$ ' + 0}</div>
                        <div className="ingcheqpeIng" id="ingcheqpe">{'$ ' + 0}</div>
                        <div className="ingcajadolIng" id="ingcajadol">{'$ ' + 0}</div>
                        <div className="ingbacodolIng" id="ingbacodol">{'$ ' + 0}</div>
                        <div className="ingcomitdolIng" id="ingcomitdol">{'$ ' + 0}</div>
                        <div className="tcingIng" id="tcing">{'$ ' + 0}</div>
                        <div className="ingbacodolIng" id="ingbacodol">{'$ ' + 0}</div>
                        <div className="ingcomitdolIng" id="ingcomitdol">{'$ ' + 0}</div>
                    </div>  
            )
        }
        
}