export default function iterate(
  a: number,
  x: number,
  code: () => any = () => {},
) {
  if (a === 0 || x === 0) return;
  if((a / x) < 0) return; // check if the numbers had opposite sign
  
  const a_abs = Math.abs(a);
  const x_abs = Math.abs(x)

  iterator(a_abs, x_abs, code);
  iterator(a_abs + 1, x_abs * 2, code);
  iterator(a_abs + 2, x_abs * 3, code);
}

function iterator(a: number, x: number, code: () => any) {
  const multiples = Math.floor(x / a);
  for (let i = 0; i < multiples; i++) {
    code();
  }
}
