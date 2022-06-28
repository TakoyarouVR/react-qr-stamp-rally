import React, { Component } from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import CollectionPage from './CollectionPage';
import CameraPage from "./CameraPage";

class App extends Component{
    render(){
        return(
            <Router>
                <Routes>
                    <Route exact path="/" element={<CameraPage/>} />
                    <Route exact path="/collection" element={<CollectionPage/>} />
                </Routes>
            </Router>
        );
    }
}
export default App;