import styles from "../../styles/game.module.css";
import * as consts from "./constants";

export function GameSymbol({ symbol }) {
  // рендер компонент отображения крестика или нолика
  const getSymbolClassName = (symbol) => {
    if (symbol === consts.SYMBOL_O) return styles["symbol--o"];
    if (symbol === consts.SYMBOL_X) return styles["symbol--x"];
  };
  return (
    <span className={`${styles["symbol"]} ${getSymbolClassName(symbol)}`}>
      {symbol}
    </span>
  );
}
