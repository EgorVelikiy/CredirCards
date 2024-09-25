const card_types = {
  visa: 4,
  master: 5,
  amex: 34,
  discover: 6,
  mir: 2,
  diners_club: 30,
};

const card_length = {
  visa: [13, 16, 19],
  master: [16],
  amex: [15],
  discover: [16, 17, 18, 19],
  mir: [16],
  diners_club: [14],
};

export function cardTypes(input) {
  for (let i in card_types) {
    if (input.startsWith(card_types[i])) {
      if (input.length <= Math.max(...card_length[i])) {
        return i;
      }
    }
  }
}
