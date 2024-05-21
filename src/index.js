console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const dogBreed = document.getElementById("dog-breeds") 
const dogCard = document.getElementById("dog-image-container")
// const doggo = document.querySelectorAll("li.doggo") 
// const dogList = document.getElementsByClassName("doggo") 

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

//filter breeds
// breedNames = array of data
//selects value from dropdown === matches all with match
// returns new array with just matching....filterMethod 
// when change only show breed with that start with that letter
const dropDown = document.getElementById("breed-dropdown") 
dropDown.addEventListener("click", () => {
  
  // assess click value... dropDown.value
  let letter = dropDown.value;
  console.log(letter)
  // assign to const
  
  const dogList = document.getElementsByClassName("doggo") 
//html collection
  for(const dogLetter of dogList)
  // go through array of dog names to those that match clicked value
    if (dogLetter.textContent.startsWith(letter)) {
      dogLetter.style.visibility = "visible";
    } else {
      dogLetter.style.visibility = "hidden"
    }
  
//   remove hidden class
// else 
//   add hidden class
  
  console.log(dogList)  // return only matching... true value
  // display back on Dom in list
})



// function filterDog() {
//   let letter = dropDown.value;
  
// }


function initialize() {

  getAllDogPics()
  getDogBreed()
  console.log("test")
  // filterDog()
}

document.addEventListener("DOMContentLoaded", initialize)
