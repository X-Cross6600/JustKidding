let text = "Hello world";
let str = "";

for (let i = 0; i < text.length; i++) {
  str += text.charAt(text.length - i - 1);
}
console.log(str);
