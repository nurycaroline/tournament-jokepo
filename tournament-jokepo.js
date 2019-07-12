/*
 * Rules;
 * Rock beats Scissor
 * Scissor beats Paper
 * Paper beats Rock
 */

const RPS_TYPE = {
  R: "Rock",
  P: "Paper",
  S: "Scissor"
};

function RPSGameWinner(listPlayers = []) {
  if (listPlayers && listPlayers.length < 2) {
    return alert("WrongNumberOfPlayersError");
  }

  const rps = Object.keys(RPS_TYPE);
  const moveP1 = listPlayers[0][1];
  const moveP2 = listPlayers[1][1];
  const [play1, play2] = listPlayers;

  if (!rps.includes(moveP1) || !rps.includes(moveP2)) {
    return alert("NoSuchStrategyError");
  }

  if (moveP1 === moveP2) {
    return listPlayers[0];
  }
  if (moveP1 === "R") {
    return moveP2 === "P" ? play2 : play1;
  }
  if (moveP1 === "P") {
    return moveP2 === "S" ? play2 : play1;
  }
  if (moveP1 === "S") {
    return moveP2 === "R" ? play2 : play1;
  }
}

function rpsTournamentWinner(listTournament) {
  const gameWinners = [];

  for (let index = 0; index < listTournament.length; index++) {
    const tournament = listTournament[index];
    for (let index2 = 0; index2 < tournament.length; index2++) {
      const game = tournament[index2];
      const win = RPSGameWinner(game);
      gameWinners.push(win);
    }
  }

  const tournamentWinners = [
    RPSGameWinner(gameWinners.slice(0, 2)),
    RPSGameWinner(gameWinners.slice(2, 4))
  ];
  const finalyWinner = RPSGameWinner(tournamentWinners);

  return `Winner is ${finalyWinner[0]}, the move is ${
    RPS_TYPE[finalyWinner[1]]
  }`;
}

const tournament = rpsTournamentWinner([
  [
    [["Armando E.", "P"], ["Dave B.", "S"]],
    [["Richard", "R"], ["Michael", "S"]]
  ],
  [[["Allen", "S"], ["Omer", "P"]], [["David E.", "R"], ["Richard X.", "P"]]]
]);

console.log(tournament);
