import { GameInfo } from "./game-info";
import { GameCell } from "./game-cell";
import { useGameState } from "./game-use-state";
import styles from "../../styles/game.module.css";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    isDraw,
    winnerSymbol,
    handleClick,
    resetCells,
  } = useGameState();

  return (
    <div className={styles["game"]}>
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className={styles["game-field"]}>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button className={styles["reset-btn"]} onClick={resetCells}>
        Сбросить
      </button>
    </div>
  );
}
