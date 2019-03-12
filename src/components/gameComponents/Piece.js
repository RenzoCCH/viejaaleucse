import React from "react";

class Piece extends React.Component {
  state = { visible: this.props.visible };

  hover = () => this.setState(prevState => ({ visible: !prevState.visible }));

  popUp = () => this.props.popUp(this.props.piece);

  render = () => (
    <figure>
      {(this.props.set || this.state.visible) && (
        <img src={this.props.piece.src} alt="País" className="puzzle__piece" />
      )}

      <area
        coords={this.props.piece.coords}
        shape={this.props.piece.shape}
        onMouseOver={this.hover}
        onMouseOut={this.hover}
        onClick={this.popUp}
      />
    </figure>
  );
}

Piece.defaultProps = {
  visible: false
};

export default Piece;
