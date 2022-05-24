import React from 'react';
import { QrReader } from 'react-qr-reader';
import StyledButton from "./StyledButton";
import Music from './audios/Get.mp3';
import {useNavigate} from 'react-router-dom';

const buttonProp = {
    txt: "スタンプを見る",
    refer: "/collection",
}
const CameraPage = () => {
    const navigate = useNavigate();
    const se = new Audio(Music);
    const handleScan = (data) => {
        if(data != null){
            se.play();
            localStorage.setItem(data.text, data.text);
            navigate('/collection');
        }
    }                  
    return (
        <div>
            <StyledButton data={buttonProp}/>
            <QrReader
                constraints={{facingMode: "environment"}}
                delay={100}
                onResult={handleScan}
                videoStyle={{zIndex: 0,width: "100%", marginTop: "30%"}}
                videoContainerStyle={{zIndex: 0, position: "fixed", top: 0,left: 0}}
            /> 
        </div>
    );
}
export default CameraPage;