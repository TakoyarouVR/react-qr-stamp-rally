import React, {useState} from 'react';
import Music from './audios/Get.mp3';
import StyledButton from './StyledButton';
import ShowImage from './ShowImage';
import { useLocation } from "react-router-dom"

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
    return (
        <div>
            <StyledButton data={buttonProp} />
            <ShowImage />
        </div>
    );
}
export default CollectionPage;