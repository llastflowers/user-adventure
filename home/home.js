import { saveUser } from '../data/save-get-user.js';
import makeUser from '../make-user.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(userSignUp);
    const user = makeUser(formData);
    saveUser(user);
    window.location = 'forest';
});