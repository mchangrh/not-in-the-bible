const fs = require('fs');
const LZString = require("lz-string")

try {
  const wordArray = fs.readFileSync('../build/raw.txt')
    .toString()
    .replace(/\n/g, ' ') // remove newline
    .replace(/[^\w\s'`]/gi, '') // remove punctuation
      // leave in ' and ` for later correction
    .toLowerCase() // tolower
    .split(' ') // split on space
    .filter(word =>
      !(word.startsWith("`") || word.endsWith("`") || word.startsWith("'") || word.endsWith("'"))
    ) // filter out quotes
  // reduce to set
  const dedupeWords = [...new Set(wordArray)]
    .sort() // sort deduped
  fs.writeFileSync("../build/formatted.txt", JSON.stringify(dedupeWords));
} catch (err) {
    console.error(err);
}