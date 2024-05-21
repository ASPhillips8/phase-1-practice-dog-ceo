
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const dogBreed = document.getElementById("dog-breeds") 
const dogCard = document.getElementById("dog-image-container")
const dogList = document.getElementsByClassName("doggo") 
const dropDown = document.getElementById("breed-dropdown") 

function getAllDogPics() {

  fetch(imgUrl)
  .then((response) => response.json())
  .then((dogData) => dogData.message.forEach(dogImage => dogRender(dogImage)))
}

function dogRender(dogImage) { 

    const img = document.createElement("img")
    img.src = dogImage
    img.alt = "Doggie"
    dogCard.appendChild(img)
}

function getDogBreed () {

  fetch(breedUrl)
  .then((response) => response.json())
  .then((breedData) => {
    const breedNames = Object.keys(breedData.message)
    console.log("before loop:", breedNames)
    breedNames.forEach((breedDetail) => breedRender(breedDetail)
  )
  console.log("outside of for Each:", breedNames)
  })
}

function breedRender (breedDetail) {

  const li = document.createElement("li")
  li.textContent = breedDetail
  li.classList.add("doggo")
  li.addEventListener("click", () => {
    li.style.color = "blue" 
    })
  dogBreed.appendChild(li)
}

dropDown.addEventListener("click", () => {
  let letter = dropDown.value;
  
  for(const dogLetter of dogList)
    if (dogLetter.textContent.startsWith(letter)) {
      dogLetter.style.display = "block";
    } else {
      dogLetter.style.display = "none"
    }
});

function initialize() {
  getAllDogPics()
  getDogBreed()
}
initialize()
