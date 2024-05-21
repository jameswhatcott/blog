function submitForm(event) {
    event.preventDefault();
    console.log("Form submission prevented");
    // Get the input values
    let username = document.getElementById('username').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;


    // Store them in local storage
    localStorage.setItem('name', username);
    localStorage.setItem('title', title);
    localStorage.setItem('content', content);
    console.log("Data stored in local storage");


    // Redirect to display.html
    window.location.href = 'blog.html';
    console.log("Redirecting to blog.html");
}
