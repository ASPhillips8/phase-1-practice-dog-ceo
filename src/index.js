console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const dogBreed = document.getElementById("dog-breeds") 
const dogCard = document.getElementById("dog-image-container")
const doggo = document.querySelectorAll("li.doggo") 
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
    const breadNames = Object.keys(breedData.message)
    breadNames.forEach((breedDetail) => breedRender(breedDetail))
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

// doggo.addEventListener("click", function () {
//   li.style.color = "blue"
// })

//create function to handle click
// function handleClick(breadDetail) {
//   console.log("Selected:" , breadDetail)
// }


function initialize() {
  getAllDogPics()
  getDogBreed()
  console.log("test")
}

initialize()
