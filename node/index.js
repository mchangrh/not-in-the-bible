const fs = require('fs');
const LZString = require("lz-string")
const bibleStrings = JSON.parse(LZString.decompressFromBase64(fs.readFileSync("./bible.lz4").toString()))

function inTheBible (text) {
  const original = text.toLowerCase().split(' ').filter(w => w.length > 0)
  const inBible = original.filter(word => bibleStrings.includes(word))
  return {
    original: original.length,
    inBible: inBible.length,
    percent: inBible.length / original.length,
    bibleWords: inBible
  }
}

module.exports = inTheBible;