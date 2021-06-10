import React from "react";

type Props = {
  onReset: () => void;
};

export const ResetButton: React.VFC<Props> = ({ onReset }) => {
  return (
    <button
      className="fixed right-4 top-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={onReset}
    >
      Reset game
    </button>
  );
};
