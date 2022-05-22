import React from 'react';
import {Grid} from '@material-ui/core'
import pic1 from "./pics/1.jpg";
import pic2 from "./pics/2.jpg";
import pic3 from "./pics/3.jpg";
import pic4 from "./pics/4.jpg";
import pic5 from "./pics/5.jpg";
import pic6 from "./pics/6.jpg";
import pic7 from "./pics/7.jpg";
import pic8 from "./pics/8.jpg";
import pic9 from "./pics/9.jpg";
import stamp from "./pics/Stamp.png";

const ids = ["a", "e", "c", "d", "b", "f", "g", "i", "h"]
const pics =[pic1, pic4, pic7, pic2, pic5, pic8, pic3, pic6, pic9]

const ShowImage = () => {
    return (
        <Grid container>
            {Show()}
        </Grid>
    );
}

function Show(){
    var imgs = [];
    const imgStyle ={
        marginBottom: "-1vw",
        maxWidth: "30vw"
    }    
    for(i=0;i<3;i++){
        for(j = 0;j<2;j++){
            const c = localStorage.getItem(ids[i * 3 + j]);
            
            if(c == ids[i * 3 + j]){
                imgs.push(            
                    <Grid item>
                        <div style={imgStyle}>
                            <img src={pics[i * 3 + j]} style={{maxWidth: "100%"}}/>
                        </div>
                    </Grid>
                );
            }
            else{
                imgs.push(
                    <Grid item>
                        <div style={imgStyle}>
                            <img src={stamp} style={{maxWidth: "100%"}}/>
                        </div>
                    </Grid>
                );
            }
        }
    }
    return imgs;
}

export default ShowImage;