// Function to open the modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Function to handle form submission (adding user to text file)
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the username input value
    var username = document.getElementById('username').value;

    // Basic validation: ensure username is not empty
    if (username.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    // Send HTTP request to server to add user
    fetch('http://localhost:8080/addUser?username=' + encodeURIComponent(username))
        .then(response => response.text())
        .then(data => {
            alert(data); // Display server response
            closeModal(); // Close modal after adding user
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
}

// Event listener to open modal when Join button is clicked
document.querySelector('.join-button').addEventListener('click', function() {
    openModal();
});

// Event listener to handle form submission when OK button is clicked
document.getElementById('userForm').addEventListener('submit', function(event) {
    submitForm(event);
});

// Event listener to close modal when close button (X) is clicked
document.querySelector('.close').addEventListener('click', function() {
    closeModal();
});
