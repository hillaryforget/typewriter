const sentence = "hello there from lighthouse labs";

let animatedString = function(string) {
  let delay = 50;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  console.log('/n');
};

animatedString(sentence);