# README-Generator

## Description

Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project.

This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. Check out the [SampleREADME.md](SampleREADME.md) in this repo as an example.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Questions](#Questions)

## Installation

To generate your own README, git clone the repo down to your local so you have the Node project on your local.

Run npm install in order to install the following npm package dependencies as specified in the package.json:

inquirer will prompt you for your inputs from the command line.

The application will start by running node index.js in the command line.

Answer the prompts in your command line to generate the README.

After answering all the prompts, your README file will be named [SampleREADME.md](SampleREADME.md) and will be ready for you at the root of the repo.

The README has some automatically generated badges for your repo courtesy of shields.io and will include your Github username and email.

## Usage

Attached is the link to the video of the demo of README-Generator [Link to video](https://drive.google.com/file/d/1wZLr-5UPZrACJVxgs6ZjrOxqRQwDWxhx/view)

When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project.
The application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README). The README will also include badges for your GitHub repo.

Finally, fs.writeFile is used to generate your project's README.md file. Check out the [SampleREADME.md](SampleREADME.md) in this repo as an example on the final output.

## Questions

If you utilize this app to generate a README for your project, I'd love to see. Feel free to contact me with examples or any questions via the information below:

Github: SrilaithaN <br>
Email : snookala.dev@gmail.com
