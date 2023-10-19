import React, { Component } from 'react';
import Pieces from './pieces';
import Chessboard from './chessboard';

class Boardholder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positions: {
                '11': { piece: "rook-w", active_squares: "true" },
                '12': { piece: "knight-w", active_squares: "false" },
                '13': { piece: "bishop-w", active_squares: "false" },
                '14': { piece: "queen-w", active_squares: "false" },
                '15': { piece: "king-w", active_squares: "false" },
                '16': { piece: "bishop-w", active_squares: "false" },
                '17': { piece: "knight-w", active_squares: "false" },
                '18': { piece: "rook-w", active_squares: "false" },
                '21': { piece: "pawn-w", active_squares: "false" },
                '22': { piece: "pawn-w", active_squares: "false" },
                '23': { piece: "pawn-w", active_squares: "false" },
                '24': { piece: "pawn-w", active_squares: "false" },
                '25': { piece: "pawn-w", active_squares: "false" },
                '26': { piece: "pawn-w", active_squares: "false" },
                '27': { piece: "pawn-w", active_squares: "false" },
                '28': { piece: "pawn-w", active_squares: "false" },
                '31': { piece: "", active_squares: "false" },
                '32': { piece: "", active_squares: "false" },
                '33': { piece: "", active_squares: "false" },
                '34': { piece: "", active_squares: "false" },
                '35': { piece: "", active_squares: "false" },
                '36': { piece: "", active_squares: "false" },
                '37': { piece: "", active_squares: "false" },
                '38': { piece: "", active_squares: "false" },
                '41': { piece: "", active_squares: "false" },
                '42': { piece: "", active_squares: "false" },
                '43': { piece: "", active_squares: "false" },
                '44': { piece: "", active_squares: "false" },
                '45': { piece: "", active_squares: "false" },
                '46': { piece: "", active_squares: "false" },
                '47': { piece: "", active_squares: "false" },
                '48': { piece: "", active_squares: "false" },
                '51': { piece: "", active_squares: "false" },
                '52': { piece: "", active_squares: "false" },
                '53': { piece: "", active_squares: "false" },
                '54': { piece: "", active_squares: "false" },
                '55': { piece: "", active_squares: "false" },
                '56': { piece: "", active_squares: "false" },
                '57': { piece: "", active_squares: "false" },
                '58': { piece: "", active_squares: "false" },
                '61': { piece: "", active_squares: "false" },
                '62': { piece: "", active_squares: "false" },
                '63': { piece: "", active_squares: "false" },
                '64': { piece: "", active_squares: "false" },
                '65': { piece: "", active_squares: "false" },
                '66': { piece: "", active_squares: "false" },
                '67': { piece: "", active_squares: "false" },
                '68': { piece: "", active_squares: "false" },
                '71': { piece: "pawn-b", active_squares: "false" },
                '72': { piece: "pawn-b", active_squares: "false" },
                '73': { piece: "pawn-b", active_squares: "false" },
                '74': { piece: "pawn-b", active_squares: "false" },
                '75': { piece: "pawn-b", active_squares: "false" },
                '76': { piece: "pawn-b", active_squares: "false" },
                '77': { piece: "pawn-b", active_squares: "false" },
                '78': { piece: "pawn-b", active_squares: "false" },
                '81': { piece: "rook-b", active_squares: "false" },
                '82': { piece: "knight-b", active_squares: "false" },
                '83': { piece: "bishop-b", active_squares: "false" },
                '84': { piece: "queen-b", active_squares: "false" },
                '85': { piece: "king-b", active_squares: "false" },
                '86': { piece: "bishop-b", active_squares: "false" },
                '87': { piece: "knight-b", active_squares: "false" },
                '88': { piece: "rook-b", active_squares: "false" }
            }
            
        };
        };

    /*handlePieceClick = (piece, row, col) => {
        // Update the state in this component
        // You can modify the 'positions' state here based on the piece, row, and col
        // Example: 
        // const updatedPositions = { ...this.state.positions };
        // updatedPositions[`${row}${col}`].active_squares = "true";
        // this.setState({ positions: updatedPositions });
    }*/
    handlePieceClick(piece, row, col) {
        let squares = { ...this.state.positions }; // Change "Positions" to "positions"
        for (let i = 1; i <= 8; i++) {
            for (let j = 1; j <= 8; j++) {
                squares[`${i}${j}`].active_squares = "false";
            }
        }
    
        if (piece.includes("rook")) {
            for (let i = 1; i <= 8; i++) {
                for (let j = 1; j <= 8; j++) {
                    if (i !== row && j !== col) {
                        squares[`${i}${j}`].active_squares = "false";
                    } else {
                        squares[`${i}${j}`].active_squares = "true";
                    }
                }
            }
        }
        console.log(squares);
        this.setState({ positions: squares }); // Change "Positions" to "positions"
    }
    
    render() {
        return (
            <div>
                <Pieces
                    positions={this.state.positions}
                    onPieceClick={(piece, row, col) => this.handlePieceClick(piece, row, col)}
                />
                <Chessboard
                    positions={this.state.positions}
                    handlePieceClick={(piece, row, col) => this.handlePieceClick(piece, row, col)}
                />
            </div>
        );
    }
}

export default Boardholder;
