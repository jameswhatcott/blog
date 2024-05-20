function submitForm() {
    // Get the input values
    let username = document.getElementById('username').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;


    // Store them in local storage
    localStorage.setItem('name', username);
    localStorage.setItem('title', email);

    // Redirect to display.html
    window.location.href = 'display.html';