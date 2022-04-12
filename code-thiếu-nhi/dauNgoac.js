let a = "(){}[]";

function isOpen(char) {
  return char == "(" || char == "{" || char == "[" || char == "<";
}

function check(a) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (isOpen(a[i])) {
      b.push(a[i]);
    } else {
      let c = b.pop();
      if (
        (c == "(" && a[i] == ")") ||
        (c == "[" && a[i] == "]") ||
        (c == "{" && a[i] == "}") ||
        (c == "<" && a[i] == ">")
      ) {
        continue;
      } else {
        return false;
      }
    }
  }
  if (b.length != 0) {
    return false;
  }
  return true;
}
console.log(check(a));
