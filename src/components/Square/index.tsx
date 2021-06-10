import classNames from "classnames";
import React from "react";
import { Square as SquareType } from "../../hooks/useBordState";
import styles from "./Square.module.scss";

type Props = {
  id: SquareType;
  onJudge: (square: SquareType) => void;
  view: "" | "○" | "×";
  enabled: boolean;
};

export const Square: React.VFC<Props> = React.memo(({ id, onJudge, view, enabled }) => {
  return (
    <button
      className={classNames("h-full w-full p-1 rounded-md overflow-hidden", styles.square)}
      onClick={() => {
        if (enabled) {
          onJudge(id);
        }
      }}
      disabled={!enabled}
    >
      <span
        className={classNames(
          "block text-[72px] font-bold",
          view === "○" ? "text-red-500" : view === "×" ? "text-blue-500" : ""
        )}
      >
        {view}
      </span>
    </button>
  );
});
