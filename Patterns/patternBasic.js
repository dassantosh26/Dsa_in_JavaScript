/** @format */

// Square Pattern

function printSqaureStar(row) {
  // pattern variable carries the final pattern in string format
  let pattern = "";
  // outer loop runs for `rows` no. of times
  for (let i = 1; i <= row; i++) {
    // Inner loop for printing stars
    for (let j = 1; j <= row; j++) {
      pattern = pattern + "*";
    }
    // newline after each row
    pattern = pattern + "\n";
  }
  console.log(pattern);
}
printSqaureStar(5);

//Left Triangle Pattern

function leftTriangle(row) {
  // pattern variable carries the final pattern in string format
  pattern = "";
  // outer loop runs for `rows` no. of times
  for (let i = 1; i < row; i++) {
    // Inner loop for printing stars
    for (let j = 1; j <= i; j++) {
      pattern = pattern + "*";
    }
    // newline after each row
    pattern = pattern + "\n";
  }
  console.log(pattern);
}
leftTriangle(5);

//Inverted Star Pattern

function invertedStar(row) {
  let pattern = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= row - i + 1; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
invertedStar(5);

//Squared Number Pattern

function squredNumPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern += i;
    }
    pattern += "\n";
  }
  console.log(pattern);
}
squredNumPattern(5);

//Number Pattern

function numPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern += j;
    }
    pattern += "\n";
  }
  console.log(pattern);
}
numPattern(5)

//Half Pyramid Pattern

function halfPyramid(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    pattern += "\n";
  }
  console.log(pattern);
}
halfPyramid(5)

//Character Pattern

function character(n) {
  let pattern = "";
  let ch = "A";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += ch;
      // Move to the next character
      ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    }
    pattern += "\n";
  }
  console.log(pattern);
}
character(4);
