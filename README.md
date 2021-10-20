# <img src='resources_readme\logo.svg' alt='logo' width='35px'> **ShareNotes**

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

ShareNotes is a service for sharing notes by hash. 

<img src='resources_readme\demo.gif' alt='demo-gif' width='600px'>

This site was developed as part of Alexander Lushchenko's training course ["ReactJS"](https://itgid.info/course/reactjs). 

The backend part was taken off course. My part of development is frontend. You can see my code in the `react_project` folder.

## :electric_plug:  **How to use** :bulb:
### ***Homepage***
The Homepage contains general information about the service. The terms of use are also written here.

<img src='resources_readme\home.PNG' alt='home-gif' width='600px'>

There are quick links to the necessary sections of the site at the end of the page.
### ***Create page***
The Create page is needed to create a note. Enter your text in the field and click create. 

<img src='resources_readme\create.gif' alt='create-gif' width='600px'>

The resulting link must be sent to the recipient of the note (it is also possible to transfer only a hash).
### ***Note page***
The Note page is needed to read the note. Enter the received hash in the field and click find note.

<img src='resources_readme\note-input.gif' alt='note-gif' width='600px'> 

If you received the full link, please paste it into your browser's search bar.

<img src='resources_readme\note-url.gif' alt='note-gif' width='600px'> 

You can find the note again by clicking the find more button.
### ***Aboute page***
Here you can find general information about the project.

<img src='resources_readme\about.gif' alt='about-gif' width='600px'> 

There are contacts of the author at the end of page.

## :wrench: **Project setup** :hammer:  
### ***Required programs*** 
* `node.js`
* any local server for DB (PhpMyAdmin is used to work with the database in the project)

Download the above if needed.

To get started with the project, download it from GitHub.
### ***Installing dependencies***
In the terminal, go to the `backend_project` folder and enter
```
npm install
```
Repeat the steps with the `react_project` folder.
### ***Database setup***
Configure a local server to work with the database. Login to PhpMyAdmin. The default *user* in the project is *root* and there is *no password*. To change go to `backend_project/db/index.js`. Find a piece of code 
```js
const sequelize = new Sequelize("reactjs", "root", "", {
    dialect: "mysql",
    host: "localhost"
});
```
Replace the second and third parameters with whatever you want (the second parameter is the user, the third is the password).

The next step is to import the database. Its name must match the first parameter in the above code snippet.
### ***Launch of the project***
After setting up the database and installing the dependencies, return to the `backend_project` terminal. Enter
```
node index.js
```
Go to terminal `react project` and enter
```
npm start
```
Also don't forget to start a local server for the DB.
## :trident: **Future scope** :moneybag:
* *Design* - create a professional design
* *Adaptive* - make the site cross-platform
* *Deletion* - add the ability to delete notes

## :love_letter: Contact the author :mailbox_with_no_mail:
:email: zaiets.dar@gmail.com