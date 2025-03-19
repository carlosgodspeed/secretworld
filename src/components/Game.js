import "./Game.css";

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
        <p className="points">
          <span>Pontuação: 000</span>
        </p>
        <h1>Adivinhe a Palavra:</h1>
        <h3 className="tip">
          Dica Sobre a Palavra: <span>Dica...</span>
        </h3>
        <div className="wordContainer">
          <span className="letter">A</span>
          <span className="blankSquare"></span>
        </div>
        <div className="letterContainer">
          <p>Tente Adivinhar uma Letra da Palavra</p>
          <form>
            <input type="text" name="letter" maxLength="1" required />
            <button>Jogar!</button>
          </form>
        </div>
        <div className="WrongLettersContainer">
          <p>Letras Já Utilizadas:</p>
          <span>a, </span>
          <span>b, </span>
        </div>
    </div>
  );
};

export default Game;