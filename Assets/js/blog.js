 
 let username = localStorage.getItem('name');
 let title = localStorage.getItem('title');
 let content = localStorage.getItem('content');


 document.getElementById('usernameDisplay').textContent = 'Username: ' + username;
 document.getElementById('titleDisplay').textContent = 'Title: ' + title;
 document.getElementById('contentDisplay').textContent = 'Content: ' + content;