import React, {useState, useEffect} from 'react';
import "./preguntas.scss"

const Preguntas = (props) => {

    var [cCaption, setcCaption] = useState([]);
    var bgColor = props.bgColor;
    var txColor = props.txColor;
    var fSize = props.fSize;
    var dur = props.dur;

    function fill(){
        for(var i = 0 ; i < 20; i ++){
            setcCaption(prev=>[props.cCaption+"  ", ...prev])
        }
        
    }

    useEffect(()=>{
        
        fill();

        
    },[])

    
    return (
        <div className="caption" style={{backgroundColor:bgColor, letterSpacing:"-1"}}>
          
          <svg className="svg_caption">
            <text
            y="-40"
            style={{fill : txColor, fontSize: fSize }}
            >
                {cCaption.map((elem,index) => elem)}
                <animateMotion 
                dur={dur}
                repeatCount="indefinite" 
                path="M 800 80 H-3800 " />
            </text>
           
           </svg>
 
                    
        </div>
    );
}

export default Preguntas;
