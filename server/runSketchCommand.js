const childProcess = require('child_process');

function execSketch(command, options) {
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

module.exports.execSketch = execSketch;
