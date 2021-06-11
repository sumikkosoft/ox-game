import classNames from "classnames";
import React from "react";
import { useBordState } from "../../hooks/useBordState";
import { ResetButton } from "../ResetButton";
import { Stage } from "../Stage";
import styles from "./Game.module.scss";

const Title = React.memo(() => {
  return <h1 className="font-bold text-6xl pb-6">ox Game</h1>;
});

export const Game = () => {
  const [game, { reset }] = useBordState();

  const onReset = React.useCallback(() => {
    reset();
  }, []);

  const result = React.useCallback((): string => {
    if (game.result) {
      return `win ${game.win}`;
    } else {
      if (game.move === 9) {
        return game.win;
      }
      return "playing";
    }
  }, [game.win]);

  return (
    <div id="Game">
      <Title />
      <p className="mt-3">Turn: {game.turn}</p>
      <div className={classNames("relative mt-2", styles.wrapper)}>
        <Stage />
      </div>
      <p className="mt-3">State: {result()}</p>
      <ResetButton onReset={onReset} />
    </div>
  );
};
