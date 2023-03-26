import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import Atom from "./Atom.jsx";
import styled from "styled-components";

const Desc = styled.div `
width: 160px;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  position: absolute;
  right: 80px;
  bottom:100px;

  @media only screen and (max-width:768px){
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
`

const Development = () => {
    return(
        <>
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Atom />
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    <Desc>We design products with a strong focus on both world class design and ensuring your product is a
        market success</Desc>
        </>
    )
};


export default Development;