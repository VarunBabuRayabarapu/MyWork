import React, { Component } from 'react';
class Pieces extends Component {
    state = {
    }
    handlePieceClick = (piece, row, col) => {
        this.props.onPieceClick(piece, row, col);
    }
    handlePieces = (tileColor, n) => {
        let imagelink = "/chesspieces";
        if (this.props.positions[n].piece !== "") {
            if (tileColor === "green") {
                imagelink += "/dark/" + this.props.positions[n].piece + ".png";
            } else {
                imagelink += "/light/" + this.props.positions[n].piece + ".png";
            }
        }
        console.log(n);
        return imagelink;
    }
    /*handleSquares(piece, row, col) {
        let squares = { ...this.props.positions };
        for (let i = 1; i <= 8; i++) {
            for(let j=1; j<=8; j++){
                squares[(i*10)+j].active_squares = "false";
            }
        }
      
        if ( piece.includes("rook")) {
            for (let i = 1; i <= 8; i++) {
                for(let j=1; j<=8; j++){
                    if(i!=row && j!=col){
                        squares[(i*10)+j].active_squares = "false";
                        //console.log(i,j,row,col);
                    }
                    else{
                        squares[(i*10)+j].active_squares = "true";
                    }
                }
            }
        }
        console.log(squares);
        this.setState({ positions: squares });
    }*/
      
    render() {
        const { row, col, tilestyle, tileColor } = this.props;
        {console.log(this.props.positions[`${row}${col}`],row,col)};
        return (
            <div
                id={`${row * 10 + col}11`}
                key={`${row}-${col}`}
                style={tilestyle}
            >
                <button 
                    style={{padding:"0",margin:"0",border:"none"}}
                    onClick={()=>this.handlePieceClick(this.props.positions[`${row}${col}`].piece, row, col)}
                >
                    {this.props.positions[`${row}${col}`].piece && (
                            <img
                                src={this.handlePieces(tileColor, `${row}${col}`)}
                                style={{ height: "80px", width: "80px", border: this.props.positions[`${row}${col}`].active_squares=="true" ? "5px dotted red" : "none" }}
                                alt={`Chess Piece `}
                            />
                    )}
                </button>
            </div>
        );
    }
}
export default Pieces;
