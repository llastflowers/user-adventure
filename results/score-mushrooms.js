function scoreMushrooms(mushrooms) {
    if (mushrooms === 0) {
        return 'study';
    }

    else if (mushrooms < 7) {
        return 'okay';
    }

    else if (mushrooms < 10) {
        return 'good';
    }
    return 'great';
}

export default scoreMushrooms;