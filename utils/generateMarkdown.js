
//functions creates text from user input
function generateMarkdown(data) {
  console.log(data)
  return `
${data.title}
${data.description}

# Table of Contents

*[Installation](#installation)
*[Instructions](#instructions)
*[License](#license)
*[Contributors](#contributors)
*[Tests](#tests)
*[Author](#author)

## Installation
> ${data.installation}
 
#Instruction
> ${data.instructions}

## License
This project is licensed under the ${data.license} - see ${data.licenseURL} for details

## Contributors
${data.contributorsURLstring}

## Tests
${data.tests}
## Author
\n[ProfileImage](${data.avatar_url})
\n**${data.name}**
\nEmail: ${data.email}
\nLocation: ${data.location}
\nGithub: ${data.html_url}

`;
}

//Exports generateMarkdown funtion to index.js
module.exports = generateMarkdown;

//create data names for all user responses
// check for correct template literals syntax
//create readMe badges 
//research axios for use with multiple contributors
