import React, { createContext, Dispatch, useReducer } from "react";
import { Judge } from "../utils/judge";

export type Turn = "○" | "×";
export type Move = number;
export type Result = boolean;
export type Win = "" | "○" | "×" | "drow";
export type Square = 0 | 1 | 2;
export type Bord = Square[];

const OPENING_GAME = "OPENING_GAME" as const;
const JUDGE_GAME = "JUDGE_GAME" as const;
const RESET_GAME = "RESET_GAME" as const;

const openingGameAction = () => {
  return { type: OPENING_GAME };
};

const judgeGameAction = (bord: Bord) => {
  return { type: JUDGE_GAME, payload: { bord } };
};

const resetGameAction = () => {
  return { type: RESET_GAME };
};

export const actions = {
  openingGameAction,
  judgeGameAction,
  resetGameAction,
};

type ActionType =
  | ReturnType<typeof openingGameAction>
  | ReturnType<typeof judgeGameAction>
  | ReturnType<typeof resetGameAction>;

/**
 * Stateのtype
 * @param {Result} result - 勝敗が付いたか
 * @param {Win} win - 勝者、誰も勝ってなければ空文字列
 * @param {Bord} bord - 最新の盤面情報
 * @param {Move} move - ターン数
 */
export type State = { result: Result; win: Win; bord: Bord; turn: Turn; move: Move };

const inialState: State = {
  result: false,
  win: "",
  bord: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  turn: "○",
  move: 0,
};

const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case OPENING_GAME:
      return state;
    case JUDGE_GAME: {
      const judge = new Judge(action.payload.bord);
      const result = judge.result();
      const win = result ? (state.turn === "○" ? "○" : "×") : state.move + 1 === 9 ? "drow" : "";
      return {
        ...state,
        result,
        bord: action.payload.bord,
        turn: state.turn === "○" ? "×" : "○",
        move: state.move + 1,
        win,
      };
    }
    case RESET_GAME:
      return inialState;
    default:
      return state;
  }
};

export const BordContext = createContext<State>(inialState);

export const BordUpdateContext = createContext<Dispatch<ActionType>>(() => {});

export const BordContextProvider: React.FC = ({ children }) => {
  const [bord, dispatch] = useReducer(reducer, inialState);

  return (
    <BordContext.Provider value={bord}>
      <BordUpdateContext.Provider value={dispatch}>{children}</BordUpdateContext.Provider>
    </BordContext.Provider>
  );
};
