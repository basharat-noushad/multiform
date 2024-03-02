let currentStep = 1;
const progressBar = document.getElementById('progress');

function updateProgressBar(step) {
    const progressWidth = (step - 1) * 33.33 + '%';
    progressBar.style.width = progressWidth;
}

function showStep(stepNumber) {
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });

    document.getElementById(`step${stepNumber}`).classList.add('active');
    updateProgressBar(stepNumber);
}

function validateStep(stepNumber) {
    const requiredFields = document.querySelectorAll(`#step${stepNumber} [required]`);
    var radios = document.getElementsByName("car_company");
    var valid = false;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            valid = true;
            break;
        }
    }
    var dropdown = document.getElementById("cars").value;

    if (dropdown === "") {
        valid = false;
    }
    // var phoneNumberInput = document.getElementById("phoneNumber");
    // var phoneNumber = phoneNumberInput.value;

    // Remove non-numeric characters from the input
    // phoneNumber = phoneNumber.replace(/\D/g, '');

    // if (phoneNumber.length !== 11 || isNaN(phoneNumber)) {
    //     document.getElementById("errorMessage").innerText = "Please enter a valid 11-digit phone number.";
    // }

    /* if (!isValid) {
         document.getElementById("errorMessage").innerText = "Please select a gender.";
     } else {
         document.getElementById("errorMessage").innerText = "";
         // Proceed with form submission or other actions
     }

     const radio_btn1 = document.getElementsByName('car_company');
     let valid = true;

     if (radio_btn1.value === '') {
         valid = false;
     } */

    requiredFields.forEach(field => {
        if (field.value.trim() === '') {
            valid = false;
        }
    });

    if (!valid) {
        document.getElementById(`step${stepNumber}Error`).textContent = 'All fields are required.';
        return;
    }
    // document.getElementById(`step${stepNumber}Error`).textContent = '';

    if (stepNumber === 2) {
        const email = document.getElementById('email').value;
        const c_email = document.getElementById('c_email').value;
        const emailError = document.getElementById('emailError');
        // Basic email validation
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            emailError.textContent = 'Invalid email format';
            return emailError;
        }
        else if (email != c_email) {
            emailError.textContent = 'Email does not match';
            return emailError;
        }
        else {
            emailError.textContent = '';
            document.getElementById(`step${stepNumber}Error`).textContent = '';

        }

    } else if (stepNumber === 3) {
        let isvalid = false;
        var secondRadio = document.getElementsByName("commission");
        for (var i = 0; i < secondRadio.length; i++) {
            if (secondRadio[i].checked) {
                isvalid = true;
                break;
            }
        }
        if (!isvalid) {
            document.getElementById('radioError').textContent = 'radio button required';
            return;
        } else {
            document.getElementById('radioError').textContent = '';
        }

        // const password = document.getElementById('password').value;
        // const confirmPassword = document.getElementById('confirmPassword').value;
        // const passwordError = document.getElementById('passwordError');
        // // Check if password and confirm password match
        // if (password !== confirmPassword) {
        //     passwordError.textContent = 'Passwords do not match';
        //     return;
        // } else {
        //     passwordError.textContent = '';
        // }
    }


    if (currentStep < 4) {
        currentStep++;
        showStep(currentStep);
    }
    // document.getElementById(`step${stepNumber}Error`).textContent = '';
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

// Show the initial step
showStep(currentStep);
