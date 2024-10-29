function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}




function toggleInfo(infoId) {
  const infoElement = document.getElementById(infoId);
  if (infoElement.style.display === "none" || infoElement.style.display === "") {
    infoElement.style.display = "block"; // Exibe as informações
  } else {
    infoElement.style.display = "none"; // Oculta as informações
  }
}



