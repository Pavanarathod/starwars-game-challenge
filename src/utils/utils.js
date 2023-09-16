export const starWarsCharacters = [
  {
    id: 1,
    name: "Boba Fett",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Boba-Fett-icon.png",
  },
  {
    id: 2,
    name: "C3PO",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/C3PO-icon.png",
  },
  {
    id: 3,
    name: "Chewbacca",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Chewbacca-icon.png",
  },
  {
    id: 4,
    name: "Darth Vader",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Darth-Vader-icon.png",
  },
  {
    id: 5,
    name: "Emperor",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Emperor-icon.png",
  },
  {
    id: 6,
    name: "Han Solo",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Han-Solo-icon.png",
  },
  {
    id: 7,
    name: "Princess Leia",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Leia-icon.png",
  },
  {
    id: 8,
    name: "Luke Skywalker",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Luke-Skywalker-icon.png",
  },
  {
    id: 9,
    name: "Obi Wan Kenobi",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Obi-Wan-icon.png",
  },
  {
    id: 10,
    name: "R2D2",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/R2D2-icon.png",
  },
  {
    id: 11,
    name: "Stormtrooper",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Stormtrooper-icon.png",
  },
  {
    id: 12,
    name: "Yoda",
    icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Yoda-icon.png",
  },
];

export const mathes = [
  {
    match: 1,
    player1: {
      id: 1,
      score: 93,
    },
    player2: {
      id: 2,
      score: 83,
    },
  },
  {
    match: 2,
    player1: {
      id: 3,
      score: 89,
    },
    player2: {
      id: 4,
      score: 90,
    },
  },
  {
    match: 3,
    player1: {
      id: 5,
      score: 97,
    },
    player2: {
      id: 6,
      score: 92,
    },
  },
  {
    match: 4,
    player1: {
      id: 7,
      score: 87,
    },
    player2: {
      id: 8,
      score: 90,
    },
  },
  {
    match: 5,
    player1: {
      id: 9,
      score: 91,
    },
    player2: {
      id: 10,
      score: 82,
    },
  },
  {
    match: 6,
    player1: {
      id: 11,
      score: 91,
    },
    player2: {
      id: 12,
      score: 89,
    },
  },
  {
    match: 7,
    player1: {
      id: 10,
      score: 99,
    },
    player2: {
      id: 11,
      score: 93,
    },
  },
  {
    match: 8,
    player1: {
      id: 9,
      score: 87,
    },
    player2: {
      id: 8,
      score: 90,
    },
  },
  {
    match: 9,
    player1: {
      id: 1,
      score: 86,
    },
    player2: {
      id: 12,
      score: 97,
    },
  },
  {
    match: 10,
    player1: {
      id: 4,
      score: 82,
    },
    player2: {
      id: 5,
      score: 86,
    },
  },
  {
    match: 11,
    player1: {
      id: 7,
      score: 96,
    },
    player2: {
      id: 6,
      score: 85,
    },
  },
  {
    match: 12,
    player1: {
      id: 2,
      score: 96,
    },
    player2: {
      id: 3,
      score: 86,
    },
  },
  {
    match: 13,
    player1: {
      id: 3,
      score: 89,
    },
    player2: {
      id: 5,
      score: 99,
    },
  },
  {
    match: 14,
    player1: {
      id: 12,
      score: 97,
    },
    player2: {
      id: 2,
      score: 98,
    },
  },
  {
    match: 15,
    player1: {
      id: 8,
      score: 100,
    },
    player2: {
      id: 10,
      score: 88,
    },
  },
  {
    match: 16,
    player1: {
      id: 9,
      score: 91,
    },
    player2: {
      id: 7,
      score: 83,
    },
  },
  {
    match: 17,
    player1: {
      id: 1,
      score: 94,
    },
    player2: {
      id: 11,
      score: 99,
    },
  },
];

export function matchList(players = [], mathes = []) {
  const list = [];

  mathes.forEach((item) => {
    const {
      matchId: match,
      player1: { id: palyer1Id, score: palyer1Score },
      player2: { id: palyer2Id, score: palyer2Score },
    } = item;

    const playerOne = players.find((player) => player.id === palyer1Id);
    const playerTwo = players.find((player) => player.id === palyer2Id);

    const object = {
      left: {
        playerOne,
        palyer1Score,
        matchId: palyer1Id,
      },
      right: {
        playerTwo,
        palyer2Score,
        matchId: palyer2Id,
      },
    };

    list.push(object);
  });

  return list;
}
