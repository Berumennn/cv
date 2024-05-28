document.addEventListener('DOMContentLoaded', function() {
    // Set a timeout to simulate loading delay
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('start-button').style.display = 'block';
    }, 3000); // Adjust the delay as needed
});

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('loader-wrapper').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});
