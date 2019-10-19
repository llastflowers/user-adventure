function scoreStamina(stamina) {
    if (stamina <= -20) {
        return 'sick';
    }

    else if (stamina <= 0) {
        return 'exhausted';
    }

    else if (stamina > 4) {
        return 'tired';
    }
}

export default scoreStamina;