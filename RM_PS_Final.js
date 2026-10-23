// 01. Solve Me First

var solveMeFirst = function(a, b) {
  return a + b;
};



// 02. Multiply

var multiply = function(a, b) {
  return a * b;
};

// 03. Even or Odd

var evenOrOdd = function(number) {
  return number % 2 === 0 ? "Even" : "Odd";
};

// 04. Return Negative

var makeNegative = function(number) {
  return number > 0 ? -number : number;
};

// 05. Opposite Number

var opposite = function(number) {
  return 0 - number;
};

// 06. Simple Array Sum

var simpleArraySum = function(ar) {
  return ar.reduce(function(sum, x) { return sum + x; }, 0);
};

// 07. sleepIn

var sleepIn = function(weekday, vacation) {
  return !weekday || vacation;
};

// 08. monkeyTrouble

var monkeyTrouble = function(aSmile, bSmile) {
  return aSmile === bSmile;
};



// 09. sumDouble

var sumDouble = function(a, b) {
  return a === b ? 2 * (a + b) : a + b;
};

// 10. diff21

var diff21 = function(n) {
  return n > 21 ? 2 * (n - 21) : 21 - n;
};

// 11. parrotTrouble

var parrotTrouble = function(talking, hour) {
  return talking && (hour < 7 || hour > 20);
};

// 12. makes10

var makes10 = function(a, b) {
  return a === 10 || b === 10 || a + b === 10;
};

// 13. nearHundred

var nearHundred = function(n) {
  return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
};

// 14. posNeg

var posNeg = function(a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  }
  return (a < 0 && b > 0) || (a > 0 && b < 0);
};

// 15. notString

var notString = function(str) {
  return str.startsWith("not") ? str : "not " + str;
};

// 16. Compare the Triplets

var compareTriplets = function(a, b) {
  var result = [0, 0];
  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) result[0]++;
    else if (a[i] < b[i]) result[1]++;
  }
  return result;
};

// 17. A Very Big Sum

var aVeryBigSum = function(ar) {
  return ar.reduce(function(sum, x) { return sum + x; }, 0);
};

// 18. Staircase

var staircase = function(n) {
  var rows = [];
  for (var i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }
  return rows.join("\n");
};

// 19. Grading Students

var gradingStudents = function(grades) {
  return grades.map(function(g) {
    if (g < 38) return g;
    var nextMultiple = g + ((5 - (g % 5)) % 5);
    return nextMultiple - g < 3 ? nextMultiple : g;
  });
};

// 20. Time Conversion

var timeConversion = function(s) {
  var period = s.slice(-2);
  var parts = s.slice(0, -2).split(":");
  var hour = parseInt(parts[0], 10);

  if (period === "AM" && hour === 12) hour = 0;
  else if (period === "PM" && hour !== 12) hour += 12;

  return String(hour).padStart(2, "0") + ":" + parts[1] + ":" + parts[2];
};

// 21. String Repeat

var repeatStr = function(n, s) {
  return s.repeat(n);
};

// 22. Reversed Strings

var solution = function(str) {
  return str.split("").reverse().join("");
};

// 23. Sum of Positive

var positiveSum = function(arr) {
  return arr.reduce(function(sum, x) { return x > 0 ? sum + x : sum; }, 0);
};

// 24. Grasshopper - Summation

var summation = function(num) {
  return (num * (num + 1)) / 2;
};




// 25. Convert a Boolean to a String

var booleanToString = function(b) {
  return b ? "true" : "false";
};