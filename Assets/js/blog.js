 
// Getting the content on the page

 let username = localStorage.getItem('name');
 let title = localStorage.getItem('title');
 let content = localStorage.getItem('content');


 let blogs = []
 let formValue = {
    username: username, 
    title: title, 
    content: content
};


 document.getElementById('usernameDisplay').textContent = 'Username: ' + username;
 document.getElementById('titleDisplay').textContent = 'Title: ' + title;
 document.getElementById('contentDisplay').textContent = 'Content: ' + content;

// needs to create a new paragraph element with username, title and content, similar to above

document.createElement('p');




 // Back button

 let backBtn = document.getElementById('backBtn');

 function goBack (event) {
    event.preventDefault();
    window.history.back()
    console.log('Redirecting back to main page');
 }
 