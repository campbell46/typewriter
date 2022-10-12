const sentence = "hello there from lighthouse labs";

//loop through each character, setting a timer that accumulates for each element
for (let i = 0, j = 100; i < sentence.length; i++, j += 100) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    //if its the last character output newline
    if (i === sentence.length - 1) {
      process.stdout.write('\n');
    }
  }, j);//j adds 100ms for each character
}