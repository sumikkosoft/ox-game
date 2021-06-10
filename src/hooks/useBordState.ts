import { useContext } from "react";
import {
  actions,
  BordContext,
  BordUpdateContext,
  Square as s,
  State,
  Turn as t,
} from "../context/BordContext";

export type Square = s;
export type Turn = t;

export const useBordState = (): [State, { judge: (square: Square) => void; reset: () => void }] => {
  const game = useContext(BordContext);
  const dispatch = useContext(BordUpdateContext);

  const judge = (square: Square) => {
    const _bord = [...game.bord];
    _bord[square] = game.turn === "○" ? 1 : 2;
    dispatch(actions.judgeGameAction(_bord));
  };

  const reset = () => {
    dispatch(actions.resetGameAction());
  };

  return [game, { judge, reset }];
};
