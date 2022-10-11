const sentence = "hello there from lighthouse labs";
  
for (let i = 0, j = 100; i < sentence.length; i++, j += 100) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      process.stdout.write('\n');
    }
  }, j);
}