
const mainPhotos = [
    "img/skiing.webp",
    "img/hiking.webp",
    "img/climbing.jpg",
    "img/sailing.jpg"
  ];
  
  const allPhotos = [
    "img/diving.jpg",
    "img/champing.jpg",
    "img/skydiving.jpg",
    "img/cycling.jpg",
    "img/horse.webp",
  ];
  

  function generatePhotoCard(photoURL) {
    const card = document.createElement("div");
    card.classList.add("photo-card");
    card.style.width = "350px"; 
    card.style.height = "400px"; 
    const img = document.createElement("img");
    img.src = photoURL;
    card.appendChild(img);
  
    return card;
  }
  
  
  function displayMainPhotos() {
    const mainPhotosContainer = document.getElementById("main-photos");
  
    mainPhotos.forEach((photoURL) => {
      const card = generatePhotoCard(photoURL);
      mainPhotosContainer.appendChild(card);
    });
  }
  
  
  function displayAllPhotos() {
    const cardsContainer = document.getElementById("cards-container");
  
  
    
    cardsContainer.innerHTML = "";
  
  
    const first10Photos = allPhotos.slice(0, 10);
    first10Photos.forEach((photoURL) => {
      const card = generatePhotoCard(photoURL);
      cardsContainer.appendChild(card);
    });
  }
  
  
  function toggleViewAllButton() {
    const viewAllBtn = document.getElementById("view-all-btn");
    const cardsContainer = document.getElementById("cards-container");
  
    if (viewAllBtn.innerText === "View All") {
      
      displayAllPhotos();
      viewAllBtn.innerText = "Close";
      cardsContainer.style.display = "flex";
      cardsContainer.style.gap = "10px";
      
    } else {
    
      viewAllBtn.innerText = "View All";
      cardsContainer.style.display = "none";
    }
  }
  
  const viewAllBtn = document.getElementById("view-all-btn");
  viewAllBtn.addEventListener("click", toggleViewAllButton);
  
  
  displayMainPhotos();
  