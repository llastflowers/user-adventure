function scoreStamina(stamina) {
    if (stamina <= 0) {
        return 'gohome';
    }

    else if (stamina < 4) {
        return 'tired';
    }
}

export default scoreStamina;