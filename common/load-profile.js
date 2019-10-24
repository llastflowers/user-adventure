import { getUser } from '../data/save-get-user.js';
import goHome from './go-home.js';

function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const stamina = document.getElementById('stamina');
    const mushrooms = document.getElementById('mushrooms');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    avatar.src = '../assets/avatars/' + user.avatar + '.svg';
    mushrooms.textContent = user.mushrooms;

    if (goHome(user)) {
        stamina.textContent = '💀';
    }
    else {
        stamina.textContent = user.stamina;
    }

}

export default loadProfile;