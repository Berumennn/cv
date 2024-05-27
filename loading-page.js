document.addEventListener('DOMContentLoaded', function() {
    // Simulate a loading delay (optional)
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('start-button').style.display = 'block';
    }, 3000); // Adjust the delay as needed
});

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('loader-wrapper').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});
