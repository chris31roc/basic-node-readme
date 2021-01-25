const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt(
    [
        {
            type: "input",
            name: "author",
            message: "Who is the author of this project?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "title",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Give a description of your project.",
        },
        {
            type: "input",
            name: "reason",
            message: "What was the reason for creating this project?",
        },
    ]
).then(({
    author,
    github,
    email,
    title,
    description,
    reason
})=>{
    const markdownTemplate = `## ${author}
    
    * [github](#github)
    * [email](#email)
    * [title](#title)
    * [description](#description)
    * [reason](#reason)
    # Github
    ${github}
    # E-Mail
    ${email}
    #### Title
    ${title}
    # Description
    ${description}
    # Reason
    ${reason}`;

    newFile(author, markdownTemplate);

});

function newFile(fileName,data){
    fs.writeFile(`./${fileName.toLowerCase().split(" ").join("")}.md`,data,(err)=>{
        if (err){
            console.log(err)
        }
        console.log("Generating new README.md file");
    })
}