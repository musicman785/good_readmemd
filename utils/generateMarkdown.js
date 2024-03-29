
//functions creates text from user input
function generateMarkdown(data) {
  console.log(data)
  return `
 
  # ${data.title}
  \n${data.badge}
  \n${data.description}

# Table of Contents

* [Installation](#installation)
* [Instructions](#instructions)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Acknowledgements](#acknowlegments)
* [Author](#author)

## Installation
> ${data.installation}
 
## Instructions
> ${data.instructions}

## License
${data.licensePrint}  

## Contributors
${data.contributorsURLstring}

## Tests
${data.tests}
## Acknowledgements
${data.acknowledgeStr}
## Author
\n![ProfileImage](${data.avatar_url})
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
