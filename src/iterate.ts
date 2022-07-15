export default function iterate(
  a: number,
  x: number,
  object: () => void = () => {},
  time = 1,
) {
  let conditions = true;

  if (a === 0 || x === 0) conditions = false; // check if the numbers are equal to 0

  const multiples = Math.floor(x / a);

  if (multiples <= 0) conditions = false; // check if the numbers had opposite sign

  if(conditions) { // only run the code if all conditions were met
    for (let i = 0; i < multiples; i++) {
      object();
    }
  }
  
  const xMultiplier = time + 1 - (time - 1) * 1.5; // X will increase 2 times on second run and 1.5 times on third run. 

  if (time < 3)
    iterate(a + 1, x * xMultiplier, object, time + 1); // using math.abs to make sure it will iterate correctly on negative numbers.
}
