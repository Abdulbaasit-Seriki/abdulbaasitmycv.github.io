function validateContactForm() {
    //Retrieving values of the elements
    const name = document.contactForm.fullname.value;
    const email = document.contactForm.email.value;
    const title = document.contactForm.title.value;
    const message =  document.contactForm.message.value;
     //Validate name
     if(name === ""){
        window.alert("Please fill in your Full name");
     } else {
         var regex = /^[a-zA-Z\s]+$/;
         if(regex.test(name) === false){
             window.alert("Please enter a valid Full Name");
             name.focus();
             return true;
         }
     }
     //Validate length of name
     if (name.length < 4) {
         window.alert("Enter a valid name")
         name.focus();
         return true;
     }
     //Valiadte Email
     if(email === ""){
         window.alert("Please fill in your email address");
     }else {
         var regex =  /^\S+@\S+\.\S+$/;
         if (regex.test(email) === false) {
             window.alert("Enter a valid e-mail address");
             email.focus();
             return true;
         }
     }

     //Validate title
     if(title === ""){
        window.alert("Please give your message a title");
     } else {
         var regex = /^[a-zA-Z\s]+$/;
         if(regex.test(name) === false){
             window.alert("Please enter a valid title fot your message");
             title.focus();
             return true;
         }
     }
     //Validate Message
     if (message.length < 20) {
        window.alert("Type 20 characters and above")
        message.focus();
        return true;
    }

    }