import classNames from "classnames";
import React from "react";
import { Square as SquareType, useBordState } from "../../hooks/useBordState";
import { Square } from "../Square";
import styles from "./Stage.module.scss";

export const Stage = () => {
  const [game, { judge }] = useBordState();

  return (
    <div
      id="stage"
      className={classNames(
        "w-full h-full p-1 grid grid-cols-3 grid-rows-3 gap-1 items-center justify-items-center",
        styles.stage
      )}
    >
      {[...Array(9)].map((_, index) => {
        const view = game.bord[index] === 1 ? "○" : game.bord[index] === 2 ? "×" : "";
        const enabled = game.bord[index] === 0 && !game.result;
        return (
          <Square
            key={`Square_${index}`}
            id={index as SquareType}
            onJudge={judge}
            view={view}
            enabled={enabled}
          />
        );
      })}
    </div>
  );
};
