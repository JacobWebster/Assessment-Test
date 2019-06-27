function sort() {
  // Get the checkboxs
  const checkBirds = document.querySelector("#birdbox");
  const checkCats = document.querySelector("#catbox");
  // Get the output 
  const showCats = document.querySelectorAll(".birds");
  const showBirds = document.querySelectorAll(".cats");
  // If the checkbox is checked, display the cards
  
  if (checkBirds.checked == true) {
    showBirds.forEach((birds) => {
      birds.classList.add("hidden")
    });
  }
  else {
    showBirds.forEach((birds) => {
      birds.classList.remove("hidden")
    });
  };

 if (checkCats.checked == true) {
    showCats.forEach((cats) => {
      cats.classList.add("hidden")
    });
  }
  else {
    showCats.forEach((cats) => {
      cats.classList.remove("hidden")
    });
  };

  if ((checkBirds.checked == true) && (checkCats.checked == true)){
    showBirds.forEach((birds) => {
      birds.classList.remove("hidden")
    });
    showCats.forEach((cats) => {
      cats.classList.remove("hidden")
    });
  };
}
