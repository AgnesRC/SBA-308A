import { characterSelect, getCharacters, getCharacterInfo } from "./main.js";

getCharacters();


characterSelect.addEventListener("change", getCharacterInfo)