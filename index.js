document.getElementById('CreateAccountButton').addEventListener('click', function(event) {
    const pass1 = document.getElementById('Pass1');
    const pass2 = document.getElementById('Pass2');
    const errMsg = document.getElementById('ErrMsg')

    if (pass1.value !== pass2.value) {
        event.preventDefault();

        pass1.setCustomValidity('Passwords do not match!');
        pass2.setCustomValidity("Passwords do not match!");

        errMsg.textContent = "*Passwords do not match! Please try again.";
        
    }
    else {
        pass1.setCustomValidity("")
        pass2.setCustomValidity("")
    }
});
