var command = require("./runSketchCommand");
// TODO handle this hard-code
const script = "res=$(\"/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool\" run \"/Users/cristian.poputea/projects/html-sketchapp/build/asketch2sketch.sketchplugin\" \"asketch2sketch\" --without-activating 2>&1); if (echo \"$res\" | grep \"Unknown command ‘run’\"); then echo \"Only available on Sketch 43+\"; elif (echo \"$res\" | grep \"such file or directory\"); then echo \"Looks like we can't find Sketch.app.\\nYou can specify where to look for it by running:\\n\\necho \\\"sketchPath: ABSOLUTE/PATH/TO/Sketch.app\\\" > ~/.skpmrc\"; elif (true); then echo \"$res\"; fi\n";

function runSketchCommand() {
  (0, command.execSketch)(script, { shell: '/bin/bash' }).then(res => {
    if (res.stderr) {
      console.error(res.stderr);
    }
    if (res.stdout.trim().length > 0) {
      res.stdout.trim().split('\n').forEach(line => {
        console.log(line);
      });
    }
  });
}

module.exports.runSketchCommand = runSketchCommand;

function transformSketchMiddlware(jsonString) {
  // replace font
  return jsonString.replace(/GeographWeb/g, 'Geograph');
}

module.exports.transformSketchMiddlware = transformSketchMiddlware;
