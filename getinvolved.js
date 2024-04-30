// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function() {
    // Get the buttons by their class names
    const teacherButton = document.querySelector('.Box.Teachers .Button');
    const studentButton = document.querySelector('.Box.Students .Button');

    // Add click event listeners to the buttons
    teacherButton.addEventListener('click', function() {
        // Redirect to the Google Form for teacher application
        window.location.href = 'https://your-google-form-url-for-teachers';
    });

    studentButton.addEventListener('click', function() {
        // Redirect to the Google Form for student application
        window.location.href = 'https://your-google-form-url-for-students';
    });
});