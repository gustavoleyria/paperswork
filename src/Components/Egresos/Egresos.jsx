import React from "react"
import '../Egresos/Egresos.css'
import eliminar from '../../img/eliminar.png'

export default function Egresos(props){
    
    


        if(props.egreso){
            
            return(
                props.egreso.map((item, index) => (
    
                    <div className="containerPantallaEgreso" key={index}> 
                        <div className="detailingEgr" id="detailing">{item.description}</div>
                        <div className="ingcajapeEgr" id="ingcajape">{'$ ' + new Intl.NumberFormat('de-DE').format(item.cajaEgrePesos)}</div>
                        <div className="ingbacopeEgr" id="ingbacope">{'$ ' + new Intl.NumberFormat('de-DE').format(item.bancoEgrePesos)}</div>
                        <div className="ingcheqpeEgr" id="ingcheqpe">{'$ ' + new Intl.NumberFormat('de-DE').format(item.chequeEgrePesos)}</div>
                        <div className="ingcajadolEgr" id="ingcajadol">{'U$S ' + new Intl.NumberFormat('de-DE').format(item.cajaEgreDolares)}</div>
                        <div className="ingbacodolEgr" id="ingbacodol">{'U$S ' + new Intl.NumberFormat('de-DE').format(item.bancoEgreDolares)}</div>
                        <div className="ingcomitdolEgr" id="ingcomitdol">{'U$S ' + new Intl.NumberFormat('de-DE').format(item.comitenteEgreDolares)}</div>
                        <div className="tcingEgr" id="tcing"><button onClick={()=>props.HandleOnClinck(item.id)}><img src={eliminar} alt="del"/> </button></div>
                        <div className="ingbacodolEgr" id="ingbacodol">{'$ ' + new Intl.NumberFormat('de-DE').format((parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares)+parseFloat(item.comitenteEgreDolares))*(parseFloat(props.data.tipoCambio)))}</div>
                        <div className="ingcomitdolEgr" id="ingcomitdol">{'$ ' + new Intl.NumberFormat('de-DE').format(parseFloat(item.cajaEgrePesos)+parseFloat(item.bancoEgrePesos)+parseFloat(item.chequeEgrePesos)+((parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares)+parseFloat(item.comitenteEgreDolares))*(parseFloat(props.data.tipoCambio))))}</div>
                    </div>  
            )
                )
            )
        
    

        }else{
            return(
                <div className="containerPantallaEgreso" id={'nada'}> 
                        <div className="detailingEgr" id="detailing">{"sin datos"}</div>
                        <div className="ingcajapeEgr" id="ingcajape">{'$ ' + 0}</div>
                        <div className="ingbacopeEgr" id="ingbacope">{'$ ' + 0}</div>
                        <div className="ingcheqpeEgr" id="ingcheqpe">{'$ ' + 0}</div>
                        <div className="ingcajadolEgr" id="ingcajadol">{'$ ' + 0}</div>
                        <div className="ingbacodolEgr" id="ingbacodol">{'$ ' + 0}</div>
                        <div className="ingcomitdolEgr" id="ingcomitdol">{'$ ' + 0}</div>
                        <div className="tcingEgr" id="tcing">{'$ ' + 0}</div>
                        <div className="ingbacodolEgr" id="ingbacodol">{'$ ' + 0}</div>
                        <div className="ingcomitdolEgr" id="ingcomitdol">{'$ ' + 0}</div>
                    </div>  
            )
        }
}

