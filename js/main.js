import {characterSelect, characterPicture, characterName, characterHouse, characterTitle, characterInfo} from "./elements.js"

let characterBio = [];

export async function getCharacters() {
  const response = await fetch("https://thronesapi.com/api/v2/Characters");
  const data = await response.json();
  characterBio = data;
  console.log(characterBio);


  characterBio.forEach((character) => {
    const option = document.createElement("option");
    option.setAttribute("value", character.fullName);
    option.textContent = character.fullName;
    characterSelect.appendChild(option);
  });
}


export async function getCharacterInfo() {
  const response = await fetch("https://thronesapi.com/api/v2/Characters");
  const data = await response.json();
  characterBio = data;

  for (let i = 0; i < characterBio.length; i++) {
    if (characterBio[i].fullName === characterSelect.value) {
      console.log(characterBio[i]);
      characterInfo.style = "background-color: white";
      characterPicture.src = characterBio[i].imageUrl;
      characterName.textContent = `Character Name: ${characterBio[i].fullName}`;
      characterTitle.textContent = `Title: ${characterBio[i].title}`;
    
      if (!characterBio[i].family || characterBio[i].family.trim() === "") {
        characterHouse.textContent = "";
      } else {
        characterHouse.textContent = `House: ${characterBio[i].family}`;
      }      
    }
  }
};

// Function is not working because my browser is blocking the POST (CORS)
async function createCharacter() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://thronesapi.com/api/v2/Characters';

   await fetch(proxyUrl + apiUrl, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 53,
        firstName: 'Gendry',
        lastName: 'Baratheon',
        fullName: 'Gendry Baratheon',
        title: 'Baratheon Bastard',
        family: 'Baratheon',
        image: 'gendry',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Gendry-Joe_Dempsie.jpg'
      })
    });
}

createCharacter();