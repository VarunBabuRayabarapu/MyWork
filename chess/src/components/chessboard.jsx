import React, { Component } from 'react';
import Pieces from './pieces';

class Chessboard extends Component {
    state = {} 
    render() {
        const boardSize = 8;
        const tileSize = 80;
        const chessboard = [];

        for (let row = 0; row < boardSize; row++) {
            const rowTiles = [];
            for (let col = 0; col < boardSize; col++) {
                const isWhite = (row + col) % 2 === 0;
                const tileColor = isWhite ? 'green' : '#e8ebd1';
                const tileStyle = {
                    height: `${tileSize}px`,
                    width: `${tileSize}px`,
                    backgroundColor: tileColor,
                };

                rowTiles.push(
                    <Pieces 
                        row={row+1}
                        col={col+1}
                        key={`${row}-${col}`}
                        tilestyle={tileStyle}
                        tileColor={tileColor}
                        positions={this.props.positions}
                        onPieceClick={(piece, row, col)=>this.props.handlePieceClick(piece, row, col)}
                    />
                    //<div id={`${row}*10 + ${col}`+11} key={`${row}-${col}`} style={tileStyle}>{(row+1)*10 +col+1}</div>
                );
            }
            chessboard.push(
                <div key={row} style={{ display: 'flex', flexDirection: 'row' }}>
                    {rowTiles}
                </div>
            );
        }

        return (
            <div style={{marginTop:"10px", border:"2px solid green",height: `${boardSize * tileSize}px`, width: `${boardSize * tileSize}px`, display: 'flex', flexDirection: 'column-reverse' }}>
                {chessboard}
            </div>
        );
    }
}

export default Chessboard;
