document.getElementById("blogForm").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submission prevented");


    // Get the input values
    let username = document.getElementById('username').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    let blogEntries = localStorage.getItem('blogEntries');
    blogEntries = JSON.parse(blogEntries);

    if (blogEntries === null) {
        blogEntries = [];
    }

    let blogEntry = {
        username: username,
        title: title,
        content: content,
    };





    // Add the new entry to the array
    blogEntries.push(blogEntry);
    blogEntries = JSON.stringify(blogEntries);
    // Save the updated array back to localStorage
    localStorage.setItem('blogEntries', blogEntries);
    console.log("Data stored in local storage");


    // Redirect to display.html
    window.location.href = 'blog.html';
    console.log("Redirecting to blog.html");

});
