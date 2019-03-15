import React from "react";
import Piece from "./Piece";

class Pieces extends React.Component {
  popUp = piece => this.props.popUp(piece);

  render = () => (
    <map name={this.props.map.id}>
      {this.props.map.pieces.map(piece => (
        <div key={piece.title}>
          <Piece
            piece={piece}
            popUp={this.popUp}
            set={this.props.verifyProgress(piece.id)}
            // set={true}
          />
        </div>
      ))}
    </map>
  );
}

export default Pieces;
