function transformSketchMiddlware(json) {
  // replace font
  let old_json_string = JSON.stringify(json);
  return old_json_string.replace(/GeographWeb/g, 'Geograph');
}

module.exports.transformSketchMiddlware = transformSketchMiddlware;
