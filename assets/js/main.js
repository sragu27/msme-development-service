 // SIDE NAVBAR CODE ------------START
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelectorAll("#sidebar .nav-link");
  const menuToggleIcon = menuToggle.querySelector("i");

  // Toggle sidebar open/close
  function toggleSidebar(open) {
    if (open) {
      sidebar.style.left = "0";
      overlay.style.display = "block";
      sidebar.style.display ="block";
      //menuToggle.innerHTML = "&times;";
      menuToggleIcon.className = "bi bi-x-circle-fill"; // change to X
    } else {
      sidebar.style.left = "-250px";
      overlay.style.display = "none";
      sidebar.style.display ="none"
      //menuToggle.innerHTML = "&#9776;";
      menuToggleIcon.className = "bi bi-list"; // change to hamburger
    }
  }

  // Handle toggle button
  menuToggle.addEventListener("click", () => {
    const isOpen = sidebar.style.left === "0px";
    toggleSidebar(!isOpen);
  });

  // Close sidebar when overlay clicked
  overlay.addEventListener("click", () => {
    toggleSidebar(false);
  });

  // Close sidebar and highlight active on nav link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      toggleSidebar(false);
    });
  });

  // Highlight top menu item (desktop) based on scroll
  const desktopLinks = document.querySelectorAll("#navbarMain .nav-link");
  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach(section => {
      if (pageYOffset >= section.offsetTop - 80) {
        current = section.id;
      }
    });

    [...navLinks, ...desktopLinks].forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

//--------------------------------SIDE NAVBAR------------------------------------------END   

// Scroll to Top Button--------------------START
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show/hide scroll-to-top button on scroll
window.addEventListener("scroll", () => {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
} else {
    scrollTopBtn.style.display = "none";
}
});

// Scroll to top when button clicked
scrollTopBtn.addEventListener("click", () => {
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});
//Scroll to Top Button ---------------------------END