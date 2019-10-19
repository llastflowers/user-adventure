const deciduous = {
    id: 'deciduous',
    title: 'At the base of a deciduous tree',
    map: {
        top: '80%',
        left: '45%'
    },
    image: 'mushroom1.jpg',
    description: 'You approach a cluster of deciduous trees and clear away some detritus. What did you find?',

    choices:  [{
        id: 'cauliflower',
        description: 'Cauliflower Mushroom',
        result: 'That\'s not right... You leave the mushroom alone. Better safe than sorry!',
        stamina: -10,
        mushrooms: 0
    }, {
        id: 'morel',
        description: 'Morel',
        result: 'Yep, this is definitely a delicious morel! You add two mushrooms to your basket.',
        stamina: -5,
        mushrooms: 2
    }, {
        id: 'russula',
        description: 'Russula',
        result: 'That\'s not right... You leave the mushroom alone. Better safe than sorry!',
        stamina: -10,
        mushrooms: 0  
    }]
};

const leaves = {
    id: 'leaves',
    title: 'Underneath a pile of wet leaves',
    map: {
        top: '31%',
        left: '9%'
    },
    image: 'mushroom2.jpg',
    description: 'You crouch down near the leaves and carefully unearth the mushrooms. What did you find?',

    choices:  [{
        id: 'destroyingangel',
        description: 'Amanita ocreata ("Destroying Angel")',
        result: 'That\'s right, this is the highly toxic amanita ocreata! You leave the mushroom alone. Phew!',
        stamina: -5,
        mushrooms: 0
    }, {
        id: 'puffball',
        description: 'Common Puffball',
        result: 'Uh-oh, nope, this must be a toxic mushroom... You don\'t feel so good... Time to go home.',
        stamina: -50,
        mushrooms: 0
    }, {
        id: 'flyagaric',
        description: 'Amanita muscaria ("Fly Agaric")',
        result: 'Uh-oh, nope, this must be a toxic mushroom... You don\'t feel so good... Time to go home.',
        stamina: -50,
        mushrooms: 0
    }]
};

const needles = {
    id: 'needles',
    title: 'Amongst a scattering of pine needles',
    map: {
        top: '45%',
        left: '70%'
    },
    image: 'mushroom3.jpg',
    description: 'You clear away some pine needles to see what\'s underneath. What did you find?',

    choices:  [{
        id: 'matsutake',
        description: 'Matsutake',
        result: 'Wow, this is the prized matsutake mushroom! You add three mushrooms to your basket.',
        stamina: -5,
        mushrooms: 3
    }, {
        id: 'bolete',
        description: 'Bolete',
        result: 'Hmm, nope... You leave the mushroom alone. Better safe than sorry!',
        stamina: -10,
        mushrooms: 0
    }, {
        id: 'comatus',
        description: 'Coprinus comatus ("Shaggy Mane")',
        result: 'Hmm, nope... You leave the mushroom alone. Better safe than sorry!',
        stamina: -10,
        mushrooms: 0  
    }]
};

const log = {
    id: 'log',
    title: 'Beside a mossy log',
    map: {
        top: '67%',
        left: '15%'
    },
    image: 'mushroom4.jpg',
    description: 'You come upon a mossy log and kneel down to investigate. What did you find?',

    choices:  [{
        id: 'oyster',
        description: 'Oyster Mushroom',
        result: 'That\'s not right... You leave the mushroom alone. Better safe than sorry!',
        stamina: -10,
        mushrooms: 0
    }, {
        id: 'hedgehog',
        description: 'Hedgehog Mushroom',
        result: 'That\'s not right... You leave the mushroom alone. Better safe than sorry!',
        stamina: -10,
        mushrooms: 0
    }, {
        id: 'chanterelle',
        description: 'Chanterelle',
        result: 'Awesome, this is a tasty chanterelle! You add three mushrooms to your basket.',
        stamina: -5,
        mushrooms: 3  
    }]
};

const bark = {
    id: 'bark',
    title: 'On the bark of an oak tree',
    map: {
        top: '15%',
        left: '40%'
    },
    image: 'mushroom5.jpg',
    description: 'You move closer to the oak tree and look closely. What did you find?',

    choices:  [{
        id: 'lionsmane',
        description: 'Lion\'s Mane',
        result: 'That\'s not right... You leave the mushroom alone. Better safe than sorry!',
        stamina: -10,
        mushrooms: 0
    }, {
        id: 'chicken',
        description: 'Laetiporus ("Chicken of the Woods")',
        result: 'Yeah, this the mushroom also known as the Chicken of the Woods! You add two mushrooms to your basket.',
        stamina: -5,
        mushrooms: 2
    }, {
        id: 'apricot',
        description: 'Apricot Jelly Mushroom',
        result: 'Hmm, nope... You leave the mushroom alone. Better safe than sorry!',
        stamina: -10,
        mushrooms: 0  
    }]
};

const quests = [deciduous, leaves, needles, log, bark];

export default quests;