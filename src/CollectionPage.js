import React, {Component} from 'react';
import StyledButton from './StyledButton';
import ShowImage from './ShowImage';
const buttonProp = {
    txt: "戻る",
    refer: "/", 
}

class CollectionPage extends Component {
    render() {                     
        return (
            <div>
                <StyledButton data={buttonProp} />
                <ShowImage />
            </div>
        );
    }
}
export default CollectionPage;