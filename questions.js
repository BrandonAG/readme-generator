module.exports = [
    {
        type: 'input',
        name: 'project-title',
        message: "What is the title of the project?",
    },
    {
        type: 'input',
        name: 'project-description',
        message: "Describe the project.",
    },
    {
        type: 'input',
        name: 'install-instructions',
        message: "How do you set up the project?",
    },
    {
        type: 'input',
        name: 'project-usage',
        message: "How do you use the project?",
    },
    {
        type: 'input',
        name: 'contribute',
        message: "What are the guidelines in order to contribute to this project?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "How do you go about running the provided tests?",
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: "What are the licensing requirements of the project?",
        choices: [
            {
                name: 'MIT',
            },
            {
                name: 'Apache',
            },
            {
                name: 'GPL',
            },
        ]
    },
    {
        type: 'input',
        name: 'git-username',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'user-email',
        message: "What is your prefered contact email address?",
    }
];