// ✅ Handle Contact Form Submission
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Thank you for your message! I will get back to you soon.');
    contactForm.reset(); // Clear inputs
  });
}

// ✅ Dynamic Job Title Rotation
const jobTitles = ["Web Developer", "AI Chatbot Developer", "Fultter Developer"];
let currentIndex = 0;

function updateJobTitle() {
  const titleElement = document.getElementById("title");
  if (titleElement) {
    titleElement.textContent = jobTitles[currentIndex];
    currentIndex = (currentIndex + 1) % jobTitles.length;
  }
}

// First run immediately, then repeat every 3s
updateJobTitle();
setInterval(updateJobTitle, 3000);
