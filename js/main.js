const characterSelect = document.getElementById("characterselect");
const characterPicture = document.getElementById("character-image");
const characterName = document.getElementById("character-name");
const characterInfo = document.getElementById("character-info");
const characterAppearances = document.getElementById("character-details")

export async function getCharacters() {
  const response = await fetch("https://api.disneyapi.dev/character");
  const data = await response.json();
  const characterBio = data.data;
  console.log(characterBio);

  characterBio.forEach((character) => {
    const option = document.createElement("option");
    option.setAttribute("value", character.name);
    option.textContent = character.name;
    characterSelect.appendChild(option);
  });

  characterSelect.addEventListener("change", () => {
    for (let i = 0; i < characterBio.length; i++) {
      if (characterBio[i].name === characterSelect.value) {
        console.log(characterBio[i]);
        characterPicture.src = characterBio[i].imageUrl;
        characterName.textContent = `Character Name: ${characterBio[i].name}`;

        const appearances = [];

        if (characterBio[i].films && characterBio[i].films.length > 0) {
          appearances.push(`Films: ${characterBio[i].films.join(", ")}`);
        }
        if (characterBio[i].tvShows && characterBio[i].tvShows.length > 0) {
          appearances.push(`Shows: ${characterBio[i].tvShows.join(", ")}`);
        }
        if (
          characterBio[i].videoGames &&
          characterBio[i].videoGames.length > 0
        ) {
          appearances.push(`Video Games: ${characterBio[i].videoGames.join(", ")}`);
        } if (
            characterBio[i].shortFilms &&
            characterBio[i].shortFilms.length > 0
          ) {
            appearances.push(`Short Films: ${characterBio[i].shortFilms.join(", ")}`);
          }

        if (appearances.length > 0) {
            characterAppearances.textContent = `Appears in: ${appearances.join(", ")}`;
        } else {
            characterAppearances.textContent = "Appears in: None listed";
        }
      }
    }
  });
}
