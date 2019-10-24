function scoreQuest(choice, questId, user) {
    user.stamina += choice.stamina;
    user.mushrooms += choice.mushrooms;
    user.completed[questId] = true;
}

export default scoreQuest;