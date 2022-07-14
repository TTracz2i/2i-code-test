export default function iterate(
  a: number,
  x: number,
  code: () => any = () => {},
) {
  iterator(a, x, code);
  iterator(a + 1, x * 2, code);
  iterator(a + 2, x * 3, code);
}

function iterator(a: number, x: number, code: () => any) {
  if (a === 0 || x === 0) return;

  const multiples = Math.floor(x / a);

  if (multiples <= 0) return; // check if the numbers had opposite sign

  for (let i = 0; i < multiples; i++) {
    code();
  }
}
