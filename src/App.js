import React, { Component } from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import CollectionPage from './CollectionPage';
import CameraPage from "./CameraPage";

class App extends Component{
    render(){
        return(
            <Router>
                <Routes>
                    <Route path="/" element={<CameraPage/>} />
                    <Route path="/collection" element={<CollectionPage/>} />
                </Routes>
            </Router>
        );
    }
}
export default App;