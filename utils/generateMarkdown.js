const userResponse = require("../index.js");
console.log(userResponse.name);
function generateMarkdown(data) {
  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;
