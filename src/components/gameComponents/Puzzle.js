import React from "react";
import Pieces from "./Pieces";
import PuzzleModal from "./PuzzleModal";
import Countries, { countriesGame } from "./Countries";

class Puzzle extends React.Component {
  progress = "gameEuropeProgress";

  state = {
    progress: countriesGame.progress,
    modalOpen: false,
    questions: {}
  };

  updateProgress = id => {
    this.setState(prevState => ({
      progress: [...prevState.progress, id]
    }));
  };
  verifyProgress = id => this.state.progress.includes(id);

  popUp = ({ title: country, capital, id }) => {
    this.setState(() => ({
      questions: [
        { question: "Que país es?", response: country },
        { question: "Cual es su capital?", response: capital }
      ],
      modalOpen: true,
      id
    }));
    // const userCountry = this.modalPrompt("Que país es?");
    // if (country !== userCountry) return;
    // const userCapital = this.modalPrompt("Cual es su Capital?");
    // capital === userCapital && this.updateProgress(id);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.progress.length !== this.state.progress.length) {
      localStorage.setItem(this.progress, JSON.stringify(this.state.progress));
    }
  }

  componentDidMount() {
    try {
      const progress = JSON.parse(localStorage.getItem(this.progress));
      if (progress) this.setState(() => ({ progress }));
    } catch (e) {}
  }

  closeModal = () => this.setState(() => ({ modalOpen: false }));

  render() {
    const title = "Europe";
    const base = {
      src: "./images/europe/europa.jpg",
      alt: "Europe"
    };
    const layer = {
      src: "./images/europe/europa.jpg",
      alt: "Europe"
    };
    const map = {
      id: "image-map",
      pieces: Countries
    };

    return (
      <section>
        <h1>{title}</h1>
        <div id="puzzle" className="puzzle">
          <img src={base.src} alt={base.alt} className="puzzle__base" />
          <Pieces
            map={map}
            verifyProgress={this.verifyProgress}
            popUp={this.popUp}
          />
          <img
            src={layer.src}
            alt={layer.alt}
            className="puzzle__layer"
            useMap={`#${map.id}`}
          />
        </div>
        <PuzzleModal
          questions={this.state.questions}
          closeModal={this.closeModal}
          modalOpen={this.state.modalOpen}
          id={this.state.id}
          updateProgress={this.updateProgress}
        />
      </section>
    );
  }
}
export default Puzzle;
