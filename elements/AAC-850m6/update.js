function(instance, properties, context) {
    function formatPhoneNumber(phoneNumber) {
        // Remove any non-numeric characters from the phone number
        phoneNumber = phoneNumber.replace(/\D/g, '');

        // Check if the phone number is empty or not
        if (phoneNumber.length === 0) {
            return '';
        }

        // Extracting country code and the rest of the number
        var countryCode = phoneNumber.substring(0, 2); // Assuming country code is always 2 digits
        var restOfNumber = phoneNumber.substring(2);

        // Format the rest of the number with spaces
        var formattedNumber = restOfNumber.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4');

        // Return the formatted phone number
        return '(+' + countryCode + ') ' + formattedNumber;
    }

    const phoneNumber = properties.phone_number;
    
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber)
    
    
	instance.publishState("formatted_phone_number", formattedPhoneNumber)

}