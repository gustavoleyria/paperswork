import React from "react"
import '../Egresos/Egresos.css'
import eliminar from '../../img/eliminar.png'

export default function Egresos(props){
    
    const formatter = new Intl.NumberFormat('es-PE', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });


        if(props.egreso){
            
            return(
                props.egreso.map((item, index) => (
    
                    <div className="containerPantallaEgreso" key={index}> 
                        <div className="detailingEgr" id="detailing">{item.description}</div>
                        <div className="ingcajapeEgr" id="ingcajape">{'$ ' + formatter.format(item.cajaEgrePesos)}</div>
                        <div className="ingbacopeEgr" id="ingbacope">{'$ ' + formatter.format(item.bancoEgrePesos)}</div>
                        <div className="ingcheqpeEgr" id="ingcheqpe">{'$ ' + formatter.format(item.chequeEgrePesos)}</div>
                        <div className="ingcajadolEgr" id="ingcajadol">{'U$S ' + formatter.format(item.cajaEgreDolares)}</div>
                        <div className="ingbacodolEgr" id="ingbacodol">{'U$S ' + formatter.format(item.bancoEgreDolares)}</div>
                        <div className="ingcomitdolEgr" id="ingcomitdol">{'U$S ' + formatter.format(item.comitenteEgreDolares)}</div>
                        <div className="tcingEgr" id="tcing"><button onClick={()=>props.HandleOnClinck(item.id)}><img src={eliminar} alt="del"/> </button></div>
                        <div className="ingbacodolEgr" id="ingbacodol">{'$ ' + formatter.format((parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares)+parseFloat(item.comitenteEgreDolares))*(parseFloat(props.data.tipoCambio)))}</div>
                        <div className="ingcomitdolEgr" id="ingcomitdol">{'$ ' + formatter.format(parseFloat(item.cajaEgrePesos)+parseFloat(item.bancoEgrePesos)+parseFloat(item.chequeEgrePesos)+((parseFloat(item.cajaEgreDolares)+parseFloat(item.bancoEgreDolares)+parseFloat(item.comitenteEgreDolares))*(parseFloat(props.data.tipoCambio))))}</div>
                    </div>  
            )
                )
            )
        
    

        }else{
            return(
                <div className="containerPantallaEgreso" id={'nada'}> 
                        <div className="detailingEgr" id="detailing">{"sin datos"}</div>
                        <div className="ingcajapeEgr" id="ingcajape">{'$ ' + formatter.format(0)}</div>
                        <div className="ingbacopeEgr" id="ingbacope">{'$ ' + formatter.format(0)}</div>
                        <div className="ingcheqpeEgr" id="ingcheqpe">{'$ ' + formatter.format(0)}</div>
                        <div className="ingcajadolEgr" id="ingcajadol">{'$ ' + formatter.format(0)}</div>
                        <div className="ingbacodolEgr" id="ingbacodol">{'$ ' + formatter.format(0)}</div>
                        <div className="ingcomitdolEgr" id="ingcomitdol">{'$ ' + formatter.format(0)}</div>
                        <div className="tcingEgr" id="tcing">{'$ ' + formatter.format(0)}</div>
                        <div className="ingbacodolEgr" id="ingbacodol">{'$ ' + formatter.format(0)}</div>
                        <div className="ingcomitdolEgr" id="ingcomitdol">{'$ ' + formatter.format(0)}</div>
                    </div>  
            )
        }
}

