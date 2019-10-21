// IMPORT MODULES under test here:
// import example from '../src/example.js';
import makeUser from '../make-user.js';
const test = QUnit.test;

QUnit.module('make user');

test('create a profile based on user form data entry', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'willow');
    formData.set('avatar', 'cat');

    const expected = {
        name: 'willow',
        avatar: 'cat',
        stamina: 30,
        mushrooms: 0,
        completed: {}
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const user = makeUser(formData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(user, expected);
});