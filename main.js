//navbar fixed

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

//sidebar functionality

const toggleSidebarButton = document.querySelector(".bars");
const sidebar = document.getElementById("sidebar");
const sidebarLinks = document.querySelectorAll(".nav-link");
let closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

// Function to toggle sidebar open/close
function toggleSidebar() {
  sidebar.classList.toggle("show-sidebar");
}

// Add event listener to the toggle button
toggleSidebarButton.addEventListener("click", toggleSidebar);

// Function to close sidebar and navigate
function closeSidebarAndNavigate(event) {
  // Close the sidebar
  sidebar.classList.remove('show-sidebar');

  // Get the target link and navigate to it
  const targetLink = event.target.getAttribute('href');
  window.location.href = targetLink;

  // const targetSection = document.querySelector(event.target.getAttribute('href'));
  // targetSection.scrollIntoView({ behavior: "smooth" });
}

// Add event listener to each sidebar link to close sidebar on click
sidebarLinks.forEach(link => {
  link.addEventListener("click", closeSidebarAndNavigate);
});








