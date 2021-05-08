import React, { Component } from 'react';
import AppNav from './AppNav';
import Img from './SpaceDoggo.png'

class Home extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#8AC7DB'}}>
                <AppNav />

                <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '70px'}}>
                    <center>
                        <img src= {Img} alt="pic"/>
                    </center>
                    Welcome to Spacepup!
                </h2>
            </div>
        );
    }
}

export default Home;