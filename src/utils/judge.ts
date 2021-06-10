export class Judge {
  private readonly lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  private bord: number[];
  constructor(bord: number[]) {
    this.bord = bord;
  }

  private judge() {
    return this.lines.filter((line) => {
      return line.every((square) => {
        return this.bord[square] === this.bord[line[0]] && this.bord[line[0]] !== 0;
      });
    });
  }

  result() {
    const judge = this.judge();
    if (judge.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
