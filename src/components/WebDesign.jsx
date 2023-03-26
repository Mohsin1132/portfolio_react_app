import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import Mac from "./Mac.jsx";
import styled from"styled-components";


const Desc = styled.div `
width: 170px;
  height: 70px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  padding: 15px;
  position: absolute;
  right: 100px;
  top: 80px;


  @media only screen and (max-width:768px){
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
`
const WebDesign = () => {
    return(
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Mac/>
                </Stage>
                <OrbitControls enableZoom={false}/>
            </Canvas>
            <Desc>We design products with a strong focus on both world class design and ensuring your product is a
                market success</Desc>
        </>
    )
};


export default WebDesign;