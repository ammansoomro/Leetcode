/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let data1 = pattern.split("");
  let data2 = s.split(" ");
  if (data1.length !== data2.length) {
    return false; //
  }
  let data1Map = {};
  let data2Map = {};
  for (let i = 0; i < data1.length; i++) {
    if (data1Map[data1[i]] && data1Map[data1[i]] !== data2[i]) {
      return false;
    }
    if (data2Map[data2[i]] && data2Map[data2[i]] !== data1[i]) {
      return false;
    }

    data1Map[data1[i]] = data2[i];
    data2Map[data2[i]] = data1[i];
  }
  return true;
};

let input = "abab";
let text = "cat dog cat dog";

console.log(wordPattern(input, text));
