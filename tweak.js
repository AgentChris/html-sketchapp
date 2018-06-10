// var fs = require('fs');
// var fileName = './dist-sketchapp/page.asketch.json';
// var file = require(fileName);
//
// // file.key = "new value";
// let old_json_string = JSON.stringify(file);
// // console.log(old_json_string);
// const new_string = old_json_string.replace(/GeographWeb/g, 'Geograph');
// // console.log(old_json_string);
// console.log(new_string);
//
// fs.writeFile(fileName, new_string, function (err) {
// // fs.writeFile(fileName, JSON.stringify(file), function (err) {
//   if (err) return console.log(err);
//   console.log(new_string);
//   console.log('writing to ' + fileName);
// });
const childProcess = require('child_process');
const script = "res=$(\"/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool\" run \"/Users/cristian.poputea/projects/html-sketchapp/build/asketch2sketch.sketchplugin\" \"asketch2sketch\" --without-activating 2>&1); if (echo \"$res\" | grep \"Unknown command ‘run’\"); then echo \"Only available on Sketch 43+\"; elif (echo \"$res\" | grep \"such file or directory\"); then echo \"Looks like we can't find Sketch.app.\\nYou can specify where to look for it by running:\\n\\necho \\\"sketchPath: ABSOLUTE/PATH/TO/Sketch.app\\\" > ~/.skpmrc\"; elif (true); then echo \"$res\"; fi\n";

function exec(command, options) {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, options, (error, stdout, stderr) => {
      if (error) {
        return reject(error)
      }
      return resolve({
        stdout,
        stderr,
      })
    })
  })
}

(0, exec)(script, { shell: '/bin/bash' }).then(res => {
  if (res.stderr) {
    console.error(res.stderr);
  }
  if (res.stdout.trim().length > 0) {
    res.stdout.trim().split('\n').forEach(line => {
      console.log(line);
    });
  }
});
