import React, {useEffect, useState, useRef} from 'react';
import gsap from "gsap"
import "./apple.scss"

const Apple_svg = (props) => {

    var[active, isActive] = useState(null);
    var actors = useRef([]);

    useEffect(() =>{
        isActive(props.action);
        console.log("action");
        if(active = true){

            var tl = gsap.timeline({});
            tl.from(actors.current[0], {x: -200, r: 0, duration :1})
              .from(actors.current[1], {x: 200, r:0 , duration:1},"-=1")
              .from(actors.current[2], {rx: 0, ry:0 , duration:1},"-=0.5")
              tl.play();

        }
    },[])

    return (
        <div className="apple_svg_container">
             <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1220 120">
                 
                <circle ref={elem => {actors.current[0] = elem}} className="apple_c" cx="38%" cy="50%" r="232.48" fill="#7c428c"/>
                <circle ref={elem => {actors.current[1] = elem}} className="apple_c" cx="62%" cy="50%" r="232.48" fill="#7c428c"/>
                <ellipse ref={elem => {actors.current[2] = elem}} className="apple_o" cx="50%" cy="220%" rx="100" ry="50" stroke="yellow" fillOpacity="0" strokeWidth="8"/>
              </svg>
        </div>
    );
}

export default Apple_svg;
