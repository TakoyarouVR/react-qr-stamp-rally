import React from 'react';
import { QrReader } from 'react-qr-reader';
import StyledButton from "./StyledButton";
import {useNavigate} from 'react-router-dom';
import bgImg from './pics/BackgroundImg.png';

const buttonProp = {
    txt: "スタンプを見る",
    refer: "/collection",
}
const CameraPage = () => {
    const navigate = useNavigate();
    const handleScan = (data) => {
        if(data != null){
            localStorage.setItem(data.text, data.text);
            navigate('/collection', {state: {doPlay: 1}});
        }
    }                  
    return (
        <div>
            <StyledButton data={buttonProp}/>
            <QrReader
                constraints={{facingMode: "environment"}}
                delay={100}
                onResult={handleScan}
                videoStyle={{zIndex: 0,height: "100vh",width:"100vw"}}
                videoContainerStyle={{zIndex: 0, position: "fixed",height: "100vh",width:"100vw",top: 0,left: 0}}
            /> 
        </div>
    );
}
export default CameraPage;