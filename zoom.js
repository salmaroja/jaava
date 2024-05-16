function validateCreditCard(cardNumber) {git
    cardNumber = cardNumber.replace(/\D/g, '');
    const cardPatterns = {
        'American Express': /^(34|37)\d{13}$/,
        'Master Card': /^(5[1-5])\d{14}$/,
        'VISA': /^4(\d{12}|\d{15})$/,
        'Discover': /^6011\d{12,13}$/,
        'Diners Club': /^30[0-5]\d{11,12}$/
    };
    for (const cardType in cardPatterns) {
        if (cardPatterns[cardType].test(cardNumber)) {
            return `${cardType} card number is valid.`;
        }
    }
    return 'Invalid credit card number.';
}

 
