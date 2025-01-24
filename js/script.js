function fixHeaderOnScroll() {
    const header = document.querySelector("header");
  
    if (window.scrollY >= 1) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }