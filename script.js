function handleSignup(inputId){
    const email = document.getEmailById(inputId).value;
    if (email.trim()===""){
        alert("Please enter an email address.");
    } else{
        alert(`Thank you for trying! We'll contact you through ${email}`);
    }
}