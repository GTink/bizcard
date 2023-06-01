document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('businessCardForm').addEventListener('submit', function (e) {
        e.preventDefault();

        var form = e.target;
        var name = form.name.value;
        var email = form.email.value;
        var phone = form.phone.value;
        var website = form.website.value;

        // Concatenate selected information fields
        var info = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nWebsite: " + website;

        // Generate the QR code
        var qr = qrcode.generate(info, {
            width: 200,
            height: 200
        });

        // Create an image element with the generated QR code
        var qrImage = document.createElement('img');
        qrImage.src = qr;

        // Clear the previous QR code, if any
        var qrCodeContainer = document.getElementById('qrCodeContainer');
        qrCodeContainer.innerHTML = '';

        // Append the new QR code image to the container
        qrCodeContainer.appendChild(qrImage);
    });
});
