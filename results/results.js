import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/save-get-user.js';
import scoreStamina from './score-stamina.js';
import scoreMushrooms from './score-mushrooms.js';
import { staminaMessages, healthyMushroomsMessages, sickMushroomsMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');
// const resultImage = document.getElementById('result-image');

const staminaResult = scoreStamina(user.stamina);
const mushroomsResult = scoreMushrooms(user.mushrooms);
const staminaMessage = staminaMessages[staminaResult];

let mushroomsMessages = null;
if (mushroomsResult === 'sick') {
    mushroomsMessages = sickMushroomsMessages;
    // resultImage = sickResultImage;
}
else {
    mushroomsMessages = healthyMushroomsMessages;
}

const mushroomsMessage = mushroomsMessages[mushroomsResult];

let story = 'When you get home, ';
story += staminaMessage + '. ';
story += mushroomsMessage;

storyDisplay.textContent = story;

// story += user.name + ' the ' + user.avatar + ', ';