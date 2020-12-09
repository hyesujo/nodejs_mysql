
console.log(str.match(pattren));

var og = /a/g;

"abcdea".match(og);

var pattern = /(\w+)\s(\w+)/;

var str ="coding everybody";

var result = str.replace(pattern, '$2,$1');

console.log(result);