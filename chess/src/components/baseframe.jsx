import React, { Component } from 'react';
import Navbar from './navbar';
import Chessboard from './chessboard';
import Players from './players';
import Boardholder from './boardholder';
class Mainframe extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                    <Boardholder/>
                </div>
            </div>
        );
    }
}
 
export default Mainframe;