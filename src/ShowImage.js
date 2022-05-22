import React from 'react';
import {Grid} from '@material-ui/core'
import Cookie from 'universal-cookie';
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
import { useWindowDimensions } from './WindowSizeGetter';

const picWidth = 224;

const cookies = new Cookie();
const ShowImage = () => {
    return (
        <Grid container>
            <div>
                <Show pic={pic1} n={"a"}/>
                <Show pic={pic4} n={"d"}/>
                <Show pic={pic7} n={"g"}/>
            </div>
            <div>
                <Show pic={pic2} n={"b"}/>
                <Show pic={pic5} n={"e"}/>
                <Show pic={pic8} n={"h"}/>
            </div>
            <div>
                <Show pic={pic3} n={"c"}/>
                <Show pic={pic6} n={"f"}/>
                <Show pic={pic9} n={"i"}/>
            </div>
        </Grid>
    );
}

function Show({pic, n}){
    const c = cookies.get(n);
    const { width, height } = useWindowDimensions();
    const imgStyle ={
        marginBottom: "-3.5%",
        marginLeft: "10%",
        marginRight: "10%",
        maxWidth: "25vw"
    }    
    if(c == n)
    {
        return(
            <Grid item>
                <div style={imgStyle}>
                    <img src={pic}/>
                </div>
            </Grid>
        );
    }
    else
    {
        return(
            <Grid item>
                <div style={imgStyle}>
                    <img src={stamp}/>
                </div>
            </Grid>
        );
    }
}

export default ShowImage;