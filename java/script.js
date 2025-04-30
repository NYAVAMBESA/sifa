
// Formulaire contact : alerte confirmation en front-end
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Merci pour votre message, nous vous répondrons bientôt.');
  this.reset();
});