import React from 'react';
import {Grid} from '@material-ui/core'
import pic1 from "./pics/0.png";
import pic2 from "./pics/1.png";
import pic3 from "./pics/2.png";
import pic4 from "./pics/3.png";
import pic5 from "./pics/4.png";
import pic6 from "./pics/5.png";
import pic7 from "./pics/6.png";
import pic8 from "./pics/7.png";
import pic9 from "./pics/8.png";
import stamp from "./pics/Stamp.png";

const ids = ["a", "d" ,"g", "b" , "e", "h", "c", "f", "i"]
const pics =[pic1, pic4, pic7, pic2, pic5, pic8, pic3, pic6, pic9]
const ShowImage = () => {
    return (
        <Grid container style={{backgroundImage: "url(./pics/BackgroundImg.png)"}}>
            {Show()}
        </Grid>
    );
}

function Show(){
    var imgs = [];
    var arr = [];
    const imgStyle ={
        marginBottom: "-1vw",
        maxWidth: "30vw"
    }    
    for(let i=0;i<3;i++){
        for(let j = 0;j<3;j++){
            const c = localStorage.getItem(ids[i * 3 + j]);
            
            if(c == ids[i * 3 + j]){
                arr.push(            
                    <Grid item>
                        <div style={imgStyle}>
                            <img src={pics[i * 3 + j]} style={{maxWidth: "100%"}}/>
                        </div>
                    </Grid>
                );
            }
            else{
                arr.push(
                    <Grid item>
                        <div style={imgStyle}>
                            <img src={stamp} style={{maxWidth: "100%"}}/>
                        </div>
                    </Grid>
                );
            }
        }
        imgs.push(<div>{arr}</div>); 
        arr = [];
    }
    return imgs;
}

export default ShowImage;
