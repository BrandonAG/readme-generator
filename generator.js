module.exports = (answers) => {
    var readmeText = ""
    if (answers['project-title']) {
        readmeText = readmeText + `# ${answers['project-title']}\n`;
        if (answers.licenses[0]) {
            answers.licenses.forEach((lic) => {
                readmeText = readmeText + `![${lic}](https://img.shields.io/badge/license-${lic}-green)\n`;
            })
        }
    }
    var table = [];
    if (answers['project-description']) table.push("Description");
    if (answers['install-instructions']) table.push("Installation");
    if (answers['project-usage']) table.push("Usage");
    if (answers.contribute) table.push("Contributing");
    if (answers.tests) table.push("Testing");
    if (answers['git-username'] || answers['user-email']) table.push("Questions");
    if (answers.licenses[0]) table.push("Licenses");
    if (table.length > 0){
        readmeText = readmeText + "## Table of Contents\n\n";
        table.forEach((item) => {
            readmeText = readmeText + `* [${item}](#${item})\n`;
        });
    }
    if (answers['project-description']) {
        readmeText = readmeText + `\n## Description\n
${answers['project-description']}\n`
    }
    if (answers['install-instructions']){
        readmeText = readmeText + `\n## Installation\n
${answers['install-instructions']}\n`;
    }
    if (answers['project-usage']){
        readmeText = readmeText + `\n## Usage\n
${answers['project-usage']}\n`;
    }
    if (answers.contribute){
        readmeText = readmeText + `\n## Contributing\n
${answers.contribute}\n`;
    }
    if (answers.tests){
        readmeText = readmeText + `\n## Testing\n
${answers.tests}\n`;
    }
    if (answers['git-username'] || answers['user-email']) {
        readmeText = readmeText + `\n## Questions\n
Direct questions to:\n`
        if (answers['git-username']){
            readmeText = readmeText + `\n* [${answers['git-username']}](https://github.com/${answers['git-username']})\n`;
        }
        if (answers['user-email']){
            readmeText = readmeText + `\n* [${answers['user-email']}](mailto:${answers['user-email']})\n`;
        }
    }
    if (answers.licenses[0]){
        readmeText = readmeText + `\n## Licenses\n
${answers.licenses.join(", ")}\n`;
    }
    if (readmeText.slice(-1) === "\n") {
        readmeText = readmeText.slice(0, -1);
    }
    return readmeText;
}