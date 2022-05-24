const fs = require('fs');
const LZString = require("lz-string")

try {
  const uncompressed = fs.readFileSync('../build/formatted.txt').toString()
  const compressed = LZString.compressToBase64(uncompressed)
  
  fs.writeFileSync("../build/bible.lz4", compressed);
} catch (err) {
    console.error(err);
}