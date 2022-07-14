import iterate from './iterate';

const counter = () => {
  let i = 0;
  return () => {
    i++;
    console.log(i);
  }
}

function main() {
  const count = counter();
  iterate(1, 1, count);
}

main();
