import { useState } from "react";
import * as consts from "./constants";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] == cells[b] && cells[a] == cells[c]) {
      return [a, b, c];
    }
  }
};

export function useGameState() {
  // Устанавливаю значения состояний
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentStep, setCurrentStep] = useState(consts.SYMBOL_O);
  const [winnerSequence, setWinnerSequence] = useState();

  // Если есть победитель, отображаем его
  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter((value) => value).length == 9;

  const handleClick = (index) => {
    if (cells[index] ?? winnerSequence) return;

    // setCells принимают в кач.
    // аргумента копии изменяемых элементов!
    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;

    // Высчитывает, есть ли победитель
    const winner = computeWinner(cellsCopy);

    // Динамически устанавливает новые значения,
    // чтобы потом в компонент App отправить новый вид JSX
    setCells(cellsCopy);
    setCurrentStep(
      currentStep === consts.SYMBOL_O ? consts.SYMBOL_X : consts.SYMBOL_O,
    );
    setWinnerSequence(winner);
  };

  const resetCells = () => {
    setCells(Array.from({ length: 9 }, () => null));
    setWinnerSequence(null);
  };

  return {
    cells,
    currentStep,
    winnerSequence,
    isDraw,
    winnerSymbol,
    handleClick,
    resetCells,
  };
}
