"use strict";

const fsP = require("fs/promises");
//TODO: change argv  variable
const argv = process.argv[2];


/**
 *cat: Takes in a path to a file, reads the file and logs the contents of the
 * file. Returns error if invalid file path/file name.
 */
async function cat(path) {

  try {
    const contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

/**
 *cat: Takes in a URL, reads the text from URL and logs the contents of the HTML.
 * Returns error if invalid URL.
 */
async function webCat(url) {
  try {
    const response = await fetch(url);
    const readResponse = await response.text();
    console.log(readResponse);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

}

// if (argv.includes("http")) {
//   webCat(argv);
// } else {
//   cat(argv);
// }
//TODO: ternary instead of if/else
if (URL.canParse(argv)) {
  webCat(argv);
} else {
  cat(argv);
}
