function generateMarkdown(userResponses) {
  // Create Table of Contents
  let tableOfContents = `## Table of Contents`;

    tableOfContents += `
  * [Installation](#installation)`;

    tableOfContents += `
  * [Usage](#usage)`;

    tableOfContents += `
  * [Contributing](#contributing)`;

    tableOfContents += `
  * [Tests](#tests)`;

  // Generate markdown
  let markdown = `## Description 
   
  ${userResponses.Description}

  `;

  // Add Table of Contents to markdown
  markdown += tableOfContents;

  // Add License section
  markdown += `
  * [License](#license)`;

  //  Installation
  markdown += `
  
  ## Installation
    
  ${userResponses.Installation}`;

  // Usage
  markdown += `
  
  ## Usage 
  
  ${userResponses.Usage}`;

  //Contributing
  markdown += `
  
  ## Contributing
  
  ${userResponses.Contributing}`;

  // Tests
  markdown += `
  
  ## Tests  
  
  ${userResponses.Tests}`;

  // Licenses
  markdown += `
  
  ## License
  
  ${userResponses.License}
  `;

  // Return markdown
  return markdown;
}

module.exports = generateMarkdown;
