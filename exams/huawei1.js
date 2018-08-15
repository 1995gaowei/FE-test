function print(s) {
  console.log(s);
}

function* input1() {
  yield 1;
  yield 2;
  yield 3;
}

let out = input1();

function readline() {
  return out.next().value;
}

// let line = readline();
// while (line) {
//   print(line);
//   line = readline();
// }

function normalizeStr(str) {
  if (str.startsWith("(")) {
    let left = 1,
      i = 1;
    while (left != 0 && i < str.length) {
      if (str[i] == ")") {
        left--;
      } else if (str[i] == "(") {
        left++;
      }
      i++;
    }
    return left != 0 ? "-1" : str.substring(0, i);
  } else {
    return "-1";
  }
}

function calc(str) {
  if (str.startsWith("(")) {
    str = str.substring(1, str.length - 1);
    let operator = str[0];
    let i = 3,
      left = 0;
    if (str[2] == "(") {
      left++;
      while (left != 0) {
        if (str[i] == ")") {
          left--;
        } else if (str[i] == "(") {
          left++;
        }
        i++;
      }
    } else {
      while (!/\s/.test(str[i]) && i < str.length) {
        i++;
      }
    }
    let exp1 = str.substring(2, i);
    let exp2 = str.substring(i + 1);
    if (operator == "^") {
      return calc(exp1) + 1;
    } else if (operator == "+") {
      return calc(exp1) + calc(exp2);
    } else if (operator == "*") {
      return calc(exp1) * calc(exp2);
    }
  } else {
    return parseInt(str);
  }
}

print(calc(normalizeStr("(+ (* 2 3) (^ 4)")));
