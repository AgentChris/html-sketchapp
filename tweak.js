var fs = require('fs');
var fileName = './dist-sketchapp/page.asketch.json';
var file = require(fileName);

// file.key = "new value";
let old_json_string = JSON.stringify(file);
// console.log(old_json_string);
let new_string = old_json_string.replace(/GeographWeb/g, 'Geograph');
new_string = new_string.replace(/GeographEditWeb/g, 'GeographEdit');
// console.log(old_json_string);
console.log(new_string);

fs.writeFile(fileName, new_string, function (err) {
// fs.writeFile(fileName, JSON.stringify(file), function (err) {
  if (err) return console.log(err);
  console.log(new_string);
  console.log('writing to ' + fileName);
});
