import React, { Component} from 'react';
import { QrReader } from 'react-qr-reader';
import Cookie from 'universal-cookie';
import StyledButton from "./StyledButton";
import Music from './audios/Get.mp3';

const buttonProp = {
    txt: "スタンプを見る",
    refer: "/collection",
}

const cookies = new Cookie();

class CameraPage extends Component {
    se = new Audio(Music);
    constructor(props){
        super(props);
        this.handleScan = this.handleScan.bind(this);
    }
    handleSetCookie = (data) => {
        cookies.set(data, data, { path: '/' })
    };

    handleScan = (data) => {
        if(data != null){
            this.se.play();
            this.handleSetCookie(data.text);
        }
    }

    render() {                     
        return (
            <div>
                <StyledButton data={buttonProp}/>
                <QrReader
                    constraints={{facingMode: "environment"}}
                    delay={100}
                    onResult={this.handleScan}
                    videoStyle={{zIndex: 0, marginTop: "-15%", width: "100%",zIndex: 0}}
                    videoContainerStyle={{zIndex: 0, position: "fixed", top: 0,left: 0, margin: 0}}
                /> 
            </div>
        );
    }
}
export default CameraPage;