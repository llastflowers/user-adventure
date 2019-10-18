function scoreStamina(stamina) {
    if (stamina <= 0) {
        return 'sick';
    }

    else if (stamina < 4) {
        return 'tired';
    }
}

export default scoreStamina;