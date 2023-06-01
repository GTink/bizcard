document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user input from the query parameters
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');
    var email = urlParams.get('email');
    var phone = urlParams.get('phone');
    var website = urlParams.get('website');

    // Set the values in the generated landing page
    document.getElementById('name').textContent = name;
    document.getElementById('email').textContent = email;
    document.getElementById('phone').textContent = phone;
    document.getElementById('website').textContent = website;
});
