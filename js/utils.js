import { getCharacters, getCharacterInfo } from "./main.js";
import { characterSelect } from "./elements.js"
getCharacters();


characterSelect.addEventListener("change", getCharacterInfo)