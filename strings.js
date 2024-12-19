function validateForm(event) {
      event.preventDefault(); // Prevent form submission
      
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const zipCode = document.getElementById("zipCode").value.trim();
        const feedbackImage = document.getElementById("feedbackImage");
        const errorSound = document.getElementById("errorSound")
      
        let isValid = true;
      
        // Validate combined length of first and last names including space
        const fullNameLength = firstName.length + lastName.length + 1; // +1 for the space
        if (fullNameLength >= 20) {
          document.getElementById("firstNameError").textContent = 
            "The combined length of first and last names (including the space) must be less than 20 characters.";
          isValid = false;
        } else {
          document.getElementById("firstNameError").textContent = "";
        }
      
        // Validate ZIP code (exactly 5 digits)
        const zipCodePattern = /^\d{5}$/;
        if (!zipCodePattern.test(zipCode)) {
          document.getElementById("zipCodeError").textContent = "ZIP code must be exactly 5 digits.";
          isValid = false;
        } else {
          document.getElementById("zipCodeError").textContent = "";
        }
      
        // If all is correct are valid
        if (isValid) {
              feedbackImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0obe-AK6wQA3k-2GZ37nvshzXJ4YpYO-xBA&s";
              document.getElementById("result").textContent = `Success! Name: ${firstName} ${lastName}, ZIP Code: ${zipCode}`;
              document.getElementById("result").style.color = "green";
        } else {
              feedbackImage.src = "https://media.istockphoto.com/id/1039939018/vector/wrong-mark-line-icon-one-of-set-web-icons.jpg?s=612x612&w=0&k=20&c=p5zCbRQaUQHkFi6yBPWLYoeQMEQ4u8cnMyu0xqktQbE="; 
              document.getElementById("result").textContent = "Please correct the errors.";
              document.getElementById("result").style.color = "red";
              errorSound.play(); // Play error sound
        }
      }
      