
document.addEventListener('DOMContentLoaded', function() {

 let blogEntries = localStorage.getItem('blogEntries');
 blogEntries = JSON.parse(blogEntries);


let main = document.querySelector('main');

for(let i = 0; i < blogEntries.length; i++) {

let blogEntry = document.createElement('section');
blogEntry.className = 'blogEntry';

let username = document.createElement('p');
username.className = 'username';
username.textContent = 'Username: ' + blogEntries[i].username;

let title = document.createElement('p');
title.className = 'title';
title.textContent = 'Title: ' + blogEntries[i].title;

let content = document.createElement('p');
content.className = 'content';
content.textContent = 'Content: ' + blogEntries[i].content;

let space = document.createElement('hr');

blogEntry.append(username, title, content, space);
main.append(blogEntry);

}


 console.log(blogEntries);

});

// needs to create a new paragraph element with username, title and content, similar to above



 // Back button

 function goBack (event) {
    event.preventDefault();
    window.location.href = 'index.html';
    console.log('Redirecting back to main page');
 }
 


