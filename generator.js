module.exports = (answers) => {
    var readmeText = ""
    if (answers['project-title']) {
        readmeText = readmeText + `# ${answers['project-title']}\n`;
    }
    if (answers['project-description']) {
        readmeText = readmeText + `\n## Description\n
${answers['project-description']}\n`
    }
    if (answers['install-instructions']){
        readmeText = readmeText + `\n## Installation Instructions\n
${answers['install-instructions']}\n`;
    }
    if (answers['project-usage']){
        readmeText = readmeText + `\n## Usage\n
${answers['project-usage']}\n`;
    }
    if (answers.contribute){
        readmeText = readmeText + `\n## Contributing\n
${answers.contributors}\n`;
    }
    if (answers.tests){
        readmeText = readmeText + `\n## Testing\n
${answers.tests}\n`;
    }
    if (answers.licenses[0]){
        readmeText = readmeText + `\n## Licenses\n
${answers.licenses.join(", ")}\n`;
    }
    if (answers['git-username']){
        readmeText = readmeText + `\n## User\n
${answers['git-username']}\n`;
    }
    if (answers['user-email']){
        readmeText = readmeText + `\n## Email\n
${answers['user-email']}\n`;
    }
    if (readmeText.slice(-1) === "\n") {
        readmeText = readmeText.slice(0, -1);
    }
    return readmeText;
}