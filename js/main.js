import {characterSelect, characterPicture, characterName, characterHouse, characterTitle} from "./elements.js"

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