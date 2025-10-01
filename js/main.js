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

// export async function createCharacter() {
//   const response = gsdawait fetch('https://thronesapi.com/api/v2/Characters', {
//   method: 'POST',
//   headers: {
//     'accept': '*/*',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     id: '53',
//     firstName: 'Arya',
//     lastName: 'Stark',
//     fullName: 'Arya Stark',
//     title: 'No One',
//     family: 'Stark',
//     image: 'arya_image_string',
//     imageUrl: 'https://example.com/arya_stark.jpg'
//   })
// });
// }


// createCharacter()