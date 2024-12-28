/*
Dog, Cat, Mouse

Spend exactly 100 dollars and buy exactly 100 animals.
• Dogs cost 15 dollars,
• cats cost 1 dollar,
• and mice cost 25 cents each.
You have to buy at least one of each.
How many of each should you buy?

Source:
- https://ece.uwaterloo.ca/~agurfink/ece653/assets/pdf/W04-UsingZ3.pdf#page=28
*/

const [dogs, cats, mice] = Int.consts('dogs cats mice');

await printModelValues(
  await solve(
    // at least one of each
    dogs.ge(1),
    cats.ge(1),
    mice.ge(1),
    // buy exactly 100 animals
    dogs.add(cats).add(mice).eq(100),
    // price sums up to 100
    ToReal(dogs.mul(15).add(cats)) // add dogs and cats
      .add(ToReal(mice).mul(0.25)) // add mice
      .eq(Real.val(100.0))
  )
);

function printModelValues(model) {
  if (!model || typeof model !== 'object') {
    console.error(`Could not print model values. Model:`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(`${k.name()}:`, model.eval(k.call()).toString());
  }
}
