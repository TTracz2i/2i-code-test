export default function counter() {
  let count = 0;
  return (read = false) => {
    if (read) return count;
    return count++;
  };
}
