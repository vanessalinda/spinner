const spinMe = ["|", "/", "-", "\\", "|", "/", "-", "\\", "-", "|"];

let delay = 0;
for (const el of spinMe) {
  setTimeout(() => {
    process.stdout.write(`\r${el}   `);
  }, delay);
  delay += 200;
}
