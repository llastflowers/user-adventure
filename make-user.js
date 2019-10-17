function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        avatar: formData.get('avatar'),
        stamina: 30,
        mushrooms: 0,
        completed: {}
    };
    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    avatar: formData.get('avatar'),
    stamina: 30,
    mushrooms: 0,
    completed: {}
});

export default makeUser;