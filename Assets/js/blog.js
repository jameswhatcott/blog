
document.addEventListener('DOMContentLoaded', function() {

 let blogEntries = localStorage.getItem('blogEntries');
 blogEntries = JSON.parse(blogEntries);


let main = document.querySelector('main');

for(let i = 0; i < blogEntries.length; i++) {

let blogEntry = document.createElement('section');
blogEntry.className = 'blogEntry';

let title = document.createElement('h3');
title.className = 'title';
title.textContent = blogEntries[i].title;

let content = document.createElement('p');
content.className = 'content';
content.textContent = blogEntries[i].content;

let username = document.createElement('p');
username.className = 'username';
username.textContent = 'Posted by ' + blogEntries[i].username;
username.style.fontStyle = 'italic';

let space = document.createElement('hr');

blogEntry.append( title, content, username, space);
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
 


