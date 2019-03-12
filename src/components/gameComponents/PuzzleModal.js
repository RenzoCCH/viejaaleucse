import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");
class PuzzleModal extends React.Component {
  state = {
    response: "",
    currentQuestion: 0
  };

  handleResponse = e => {
    e.persist();
    this.setState(() => ({ response: e.target.value }));
  };

  afterOpenModal = () => {
    this.setState(() => ({
      currentQuestion: 0
    }));
  };

  accept = () => {
    if (
      this.state.response.trim() ===
      this.props.questions[this.state.currentQuestion].response
    ) {
      if (this.props.questions.length > this.state.currentQuestion + 1) {
        this.setState(prevState => ({
          currentQuestion: prevState.currentQuestion + 1,
          response: ""
        }));
        return;
      } else {
        this.props.updateProgress(this.props.id);
      }
    }
    this.props.closeModal();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.modalOpen}
        onRequestClose={this.props.closeModal}
        contentLabel="Seleccione el país"
        onAfterOpen={this.afterOpenModal}
        closeTimeoutMS={300}
        className="modal"
      >
        <p>
          {this.props.questions[this.state.currentQuestion] &&
            this.props.questions[this.state.currentQuestion].question}
        </p>
        <input
          type="text"
          value={this.state.response}
          onChange={this.handleResponse}
        />
        <div>
          <button onClick={this.props.closeModal}>Cancelar</button>
          <button onClick={this.accept}>Aceptar</button>
        </div>
      </Modal>
    );
  }
}
export default PuzzleModal;
