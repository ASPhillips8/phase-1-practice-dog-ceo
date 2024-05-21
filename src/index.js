console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"



function getAllDogPics() {

  fetch(imgUrl)
  .then((response) => response.json())
  .then((dogData) => dogData.message.forEach(dogImage => dogRender(dogImage)))
}

function dogRender(dogImage) { 
  const dogCard = document.getElementById("dog-image-container")

    const img = document.createElement("img")
    img.src = dogImage
    img.alt = "Doggie"
    dogCard.appendChild(img)
}

// fetch dog bred with breedUrl
// ??add creeds to page in ul
const dogBreed = document.getElementById("dog-breeds") 

function getDogBreed () {

  fetch(breedUrl)
  .then((response) => response.json())
  .then((breedData) => {
    const breadNames = Object.keys(breedData.message)
    breadNames.forEach((breedDetail) => breedRender(breedDetail))
  })
}
// Object.keys(breedData.message).forEach(breedDetail => breedRender(breedDetail))

///breadData.message is an object

function breedRender (breedDetail) {
  const dogBreed = document.getElementById("dog-breeds") 

  const li = document.createElement("li")
  li.textContent = breedDetail
  dogBreed.appendChild(li)


}



function initialize() {
  getAllDogPics()
  getDogBreed()
  console.log("test")
}

initialize()
