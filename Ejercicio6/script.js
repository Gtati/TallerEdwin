password2.addEventListener("keyup", function() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    const continueButton = document.getElementById("continue");
  
    if (password1 === password2) {
      continueButton.style.display = "block";
      verifyPass.style.display = "none";
     
  
    } else {
      document.getElementById("verifyPass").textContent =
        "Las contraseñas no coinciden";
        continueButton.style.display = "none";
  
    }
  });
  
  
  function showName() {
      let text = document.getElementById("userInput").value;
      localStorage.setItem("textSecondHtml", text);
  }


