import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/save-get-user.js';
import scoreStamina from './score-stamina.js';
import scoreMushrooms from './score-mushrooms';
import { staminaMessages, healthyMushroomsMessages, sickMushroomsMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const staminaResult = scoreStamina(user.stamina);
const mushroomsResult = scoreMushrooms(user.mushrooms);
const staminaMessage = staminaMessage[staminaResult];

let mushroomsMessages = null;
if (mushroomsResult === 'sick') {
    mushroomsMessages = sickMushroomsMessages;
}
else {
    mushroomsMessages = healthyMushroomsMessages;
}

const mushroomsMessage = mushroomsMessage[mushroomsResult];

let story = 'When you get home, ';
story += user.name + ' the ' + user.avatar + ', ';
story += staminaMessages + ' and ' + mushroomsMessage + '.';

storyDisplay.textContent = story;