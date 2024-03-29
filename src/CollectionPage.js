import React, {useState} from 'react';
import Music from './audios/Get.mp3';
import StyledButton from './StyledButton';
import ShowImage from './ShowImage';
import { useLocation } from "react-router-dom";
import bgImg from './pics/BackgroundImg.png';

const buttonProp = {
    txt: "戻る",
    refer: "/", 
}

const CollectionPage = () => {  
    const location = useLocation();
    const [stat, setter] = useState(location.state);
    if(stat != null){
        const se = new Audio(Music);
        se.play();
    }
    const _style = {
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(' + bgImg + ')',
    }
    return (
        <div style={_style}>
            <StyledButton data={buttonProp} />
            <ShowImage />
        </div>
    );
}
export default CollectionPage;