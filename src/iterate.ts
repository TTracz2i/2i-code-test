export default function iterate(
  a: number,
  x: number,
  object: () => void = () => {},
  time = 1,
) {
  if (a === 0 || x === 0) return;

  const multiples = Math.floor(x / a);

  if (multiples <= 0) return; // check if the numbers had opposite sign

  for (let i = 0; i < multiples; i++) {
    object();
  }
  
  const xMultiplier = time + 1 - (time - 1) * 1.5; // X will increase 2 times on second run and 1.5 times on third run. 

  if (time < 3)
    iterate(Math.abs(a) + 1, Math.abs(x) * xMultiplier, object, time + 1); // using math.abs to make sure it will iterate correctly on negative numbers.
}
