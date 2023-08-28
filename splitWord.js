let str = "Hello World";
let text = "";
for (let i = 0; i < str.length; i++) {
  text += str.charAt(str.length - i - 1);
}
let result;
for (let i = 0; i < text.length; i++) {
  if (text.charAt(i) == " ") {
    result = text.slice(0, i);
  }
}

console.log(result);
