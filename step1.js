"use strict";

const fsP = require("fs/promises");
//TODO: change variable name argv
const argv = process.argv[2];

/**
 *
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

cat(argv);
