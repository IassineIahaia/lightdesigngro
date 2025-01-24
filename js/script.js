function fixHeaderOnScroll() {
    const header = document.querySelector("header");
  
    // Adiciona ou remove a classe 'fixed' com base na posição do scroll
    if (window.scrollY > 0) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }
  
  // Adiciona o evento de scroll
  window.addEventListener("scroll", fixHeaderOnScroll);
  
  // Executa a função uma vez ao carregar a página
  fixHeaderOnScroll();
  