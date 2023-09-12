const fsP = require("fs/promises");

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = {
  cat
};