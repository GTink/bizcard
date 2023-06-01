document.getElementById('businessCardForm').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Extract the values from the form data
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const website = formData.get("website");

  // Generate the landing page URL with the form data
  const landingPageUrl = `generated-landing-page.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&website=${encodeURIComponent(website)}`;

  // Redirect to the generated landing page URL
  window.location.href = landingPageUrl;
}
