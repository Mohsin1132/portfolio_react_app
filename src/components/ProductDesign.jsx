import React from "react";
import {OrbitControls, Stage} from "@react-three/drei";
import Shoe from "./Shoe.jsx";
import {Canvas} from "@react-three/fiber";
import styled from "styled-components";

const Desc = styled.div `
width: 170px;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  position: absolute;
  right: 200px;
  bottom: 50px;

  @media only screen and (max-width:768px){
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
`

const ProductDesign = () => {
    return(
        <>
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Shoe />
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
            <Desc>We design products with a strong focus on both world class design and ensuring your product is a
                market success</Desc>
            </>
    )
};


export default ProductDesign;