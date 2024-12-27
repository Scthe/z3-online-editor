/*
https://en.wikipedia.org/wiki/Zebra_Puzzle


1. There are five houses.
2. The Englishman lives in the red house.
3. The Spaniard owns the dog.
4. Coffee is drunk in the green house.
5. The Ukrainian drinks tea.
6. The green house is immediately to the right of the ivory house.
7. The Old Gold smoker owns snails.
8. Kools are smoked in the yellow house.
9. Milk is drunk in the middle house.
10. The Norwegian lives in the first house.
11. The man who smokes Chesterfields lives in the house next to the man with the fox.
12. Kools are smoked in the house next to the house where the horse is kept.
13. The Lucky Strike smoker drinks orange juice.
14. The Japanese smokes Parliaments.
15. The Norwegian lives next to the blue house.

Now, who drinks water? Who owns the zebra? 

*/

const HOUSE_COLOR = {
  Blue: 0,
  Green: 1,
  Ivory: 2,
  Red: 3,
  Yellow: 4,
};
const NATIONALITY = {
  Japanese: 0,
  Ukrainian: 1,
  Spaniard: 2,
  Norwegian: 3,
  Englishman: 4,
};
const DRINK = {
  Milk: 0,
  Tea: 1,
  Coffee: 2,
  OrangeJuice: 3,
  Water: 4,
};
const SMOKE = {
  Chesterfield: 0,
  OldGold: 1,
  LuckyStrike: 2,
  Parliament: 3,
  Kools: 4,
};
const PET = {
  Zebra: 0,
  Snails: 1,
  Horse: 2,
  Dog: 3,
  Fox: 4,
};

const createPerson = (idx) => ({
  nationality: Int.const(`nationality_${idx}`),
  houseColor: Int.const(`houseColor_${idx}`),
  pet: Int.const(`pet_${idx}`),
  drink: Int.const(`drink_${idx}`),
  smoke: Int.const(`smoke_${idx}`),
});

const DATA = [
  createPerson(0),
  createPerson(1),
  createPerson(2),
  createPerson(3),
  createPerson(4),
];

const solver = new ctx.Solver();

// each value is valid
DATA.forEach((p) => {
  solver.add(p.nationality.ge(0), p.nationality.le(4));
  solver.add(p.houseColor.ge(0), p.houseColor.le(4));
  solver.add(p.pet.ge(0), p.pet.le(4));
  solver.add(p.drink.ge(0), p.drink.le(4));
  solver.add(p.smoke.ge(0), p.smoke.le(4));
});

// no repeating values
solver.add(Distinct(...DATA.map((e) => e.nationality)));
solver.add(Distinct(...DATA.map((e) => e.houseColor)));
solver.add(Distinct(...DATA.map((e) => e.pet)));
solver.add(Distinct(...DATA.map((e) => e.drink)));
solver.add(Distinct(...DATA.map((e) => e.smoke)));

// 2. The Englishman lives in the red house.
solver.add(
  ...DATA.map((e) =>
    Implies(
      e.nationality.eq(NATIONALITY.Englishman),
      e.houseColor.eq(HOUSE_COLOR.Red)
    )
  )
);

// 3. The Spaniard owns the dog.
solver.add(
  ...DATA.map((e) =>
    Implies(e.nationality.eq(NATIONALITY.Spaniard), e.pet.eq(PET.Dog))
  )
);

// 4. Coffee is drunk in the green house.
solver.add(
  ...DATA.map((e) =>
    Implies(e.houseColor.eq(HOUSE_COLOR.Green), e.drink.eq(DRINK.Coffee))
  )
);

// 5. The Ukrainian drinks tea.
solver.add(
  ...DATA.map((e) =>
    Implies(e.nationality.eq(NATIONALITY.Ukrainian), e.drink.eq(DRINK.Tea))
  )
);

// 6. The green house is immediately to the right of the ivory house.
for (let i = 0; i < 4; i++) {
  solver.add(
    Implies(
      DATA[i].houseColor.eq(HOUSE_COLOR.Ivory),
      DATA[i + 1].houseColor.eq(HOUSE_COLOR.Green)
    )
  );
}

// 7. The Old Gold smoker owns snails.
solver.add(
  ...DATA.map((e) => Implies(e.smoke.eq(SMOKE.OldGold), e.pet.eq(PET.Snails)))
);

// 8. Kools are smoked in the yellow house.
solver.add(
  ...DATA.map((e) =>
    Implies(e.smoke.eq(SMOKE.Kools), e.houseColor.eq(HOUSE_COLOR.Yellow))
  )
);

// 9. Milk is drunk in the middle house.
solver.add(DATA[2].drink.eq(DRINK.Milk));

// 10. The Norwegian lives in the first house.
solver.add(DATA[0].nationality.eq(NATIONALITY.Norwegian));

// 11. The man who smokes Chesterfields lives in the house next to the man with the fox.
DATA.forEach((e, i) => {
  const left = i === 0 ? false : DATA[i - 1].smoke.eq(SMOKE.Chesterfield);
  const right = i === 4 ? false : DATA[i + 1].smoke.eq(SMOKE.Chesterfield);

  solver.add(Implies(e.pet.eq(PET.Fox), Or(left, right)));
});

// 12. Kools are smoked in the house next to the house where the horse is kept.
DATA.forEach((e, i) => {
  const left = i === 0 ? false : DATA[i - 1].smoke.eq(SMOKE.Kools);
  const right = i === 4 ? false : DATA[i + 1].smoke.eq(SMOKE.Kools);

  solver.add(Implies(e.pet.eq(PET.Horse), Or(left, right)));
});

// 13. The Lucky Strike smoker drinks orange juice.
solver.add(
  ...DATA.map((e) =>
    Implies(e.smoke.eq(SMOKE.LuckyStrike), e.drink.eq(DRINK.OrangeJuice))
  )
);

// 14. The Japanese smokes Parliaments.
solver.add(
  ...DATA.map((e) =>
    Implies(
      e.nationality.eq(NATIONALITY.Japanese),
      e.smoke.eq(SMOKE.Parliament)
    )
  )
);

// 15. The Norwegian lives next to the blue house.
DATA.forEach((e, i) => {
  const left = i === 0 ? false : DATA[i - 1].houseColor.eq(HOUSE_COLOR.Blue);
  const right = i === 4 ? false : DATA[i + 1].houseColor.eq(HOUSE_COLOR.Blue);

  solver.add(Implies(e.nationality.eq(NATIONALITY.Norwegian), Or(left, right)));
});

/////////////////////////
// Run the solver

const result = await solver.check();

if (result === 'sat') {
  const model = solver.model();
  const getFromEnum = (Enum, value) => {
    value = Number(model.eval(value).toString());
    return (
      Object.entries(Enum).find(([_name, val]) => val === value)?.[0] || '?'
    );
  };

  const getPerson = (idx) => {
    const p = DATA[idx];
    const nationality = getFromEnum(NATIONALITY, p.nationality);
    const houseColor = getFromEnum(HOUSE_COLOR, p.houseColor);
    const pet = getFromEnum(PET, p.pet);
    const drink = getFromEnum(DRINK, p.drink);
    const smoke = getFromEnum(SMOKE, p.smoke);
    const s = [`${houseColor} house`, nationality, pet, drink, smoke].join(
      ', '
    );
    return `${idx + 1}: ${s}`;
  };

  for (let i = 0; i < 5; i++) {
    console.log(getPerson(i));
  }
} else {
  console.log('No valid solution');
}
