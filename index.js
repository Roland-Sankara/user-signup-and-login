let username = document.querySelector("#username");
let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-pass");
let profilePic = document.querySelector("#picture");
let signUpButton = document.querySelector("#signup");

const signUpForm = document.getElementsByClassName("signup-form");

let signDiv = document.getElementById("first");
let lastDiv = document.getElementById("last");
let usernameDiv = document.getElementById("user");
// creating an error element in the dom
let displayTextError = document.createElement("div");
displayTextError.style.color = "red";
displayTextError.style.marginRight = "120px";

function validate(input) {
  if (input.type === "text") {
    if (input.value.length >= 5) {
      console.log("Valid");
      return true;
    } else {
      if (firstname.value.length < 5) {
        displayTextError.textContent =
          "Should have a min length of 5 characters";
        signDiv.appendChild(displayTextError);
        return false;
      } else if (lastname.value.length < 5) {
        displayTextError.textContent =
          "Should have a min length of 5 characters";
        lastDiv.appendChild(displayTextError);
        return false;
      } else if (username.value.length < 5) {
        displayTextError.textContent =
          "Should have a min length of 5 characters";
        usernameDiv.appendChild(displayTextError);
        return false;
      }
    }
  } else if (input.type === "email") {
    console.log("Email Field", input.value);

    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (pattern.test(input.value)) {
      console.log("Email is valid");
      return true;
    } else {
      console.error(
        "Email format is invalid, it should be something lik test@email.com"
      );
      return false;
    }
  } else if (input.type === "file") {
    console.log(input.value);
    return true;
  } else if (input.type === "password") {
    if (input.value === confirmPassword.value) {
      console.log("Password Matches");
      return true;
    } else {
      console.error(
        "Confirm password is not equal to the password you entered"
      );
      return false;
    }
  } else {
    console.log("Malformed Input Field");
    return false;
  }
}
signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  let inputFields = [
    username,
    firstname,
    lastname,
    email,
    password,
    profilePic,
  ];
  let ifFormIsValid = true;

  for (let input of inputFields) {
    if (!validate(input)) {
      ifFormIsValid = false;
    }
  }

  if (ifFormIsValid) {
    storeInputs();
    return (window.location.href = "home.html");
  } else {
    console.log("Form validation failed");
  }
});

const storeInputs = () => {
  let userData = [
    {
      firstname: firstname.value,
      lastname: lastname.value,
      username: username.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      profilePic: profilePic.value,
    },
  ];
  let stringifyInputs = JSON.stringify(userData);

  console.log(stringifyInputs);

  localStorage.setItem("userData", stringifyInputs);
};

// function to show password and hide.
const showPassword = () => {
  let invisible = document.getElementById("close");
  let visible = document.getElementById("open");

  invisible.addEventListener("click", () => {
    if (password.type === "password") {
      console.log("same");
      password.type = "text";
      visible.style.display = "block";
      invisible.style.display = "none";
    }
  });
  visible.addEventListener("click", () => {
    if (password.type === "text") {
      password.type = "password";
      invisible.style.display = "block";
      visible.style.display = "none";
    }
  });
};
showPassword();

const showConfirmPassword = () => {
  let confirmVisible = document.getElementById("confirm-open");
  let confirmInvisible = document.getElementById("confirm-close");

  confirmInvisible.addEventListener("click", () => {
    console.log("clicked");
    if (confirmPassword.type === "password") {
      console.log("sameee");
      confirmPassword.type = "text";
      confirmVisible.style.display = "block";
      confirmInvisible.style.display = "none";
    }
  });
  confirmVisible.addEventListener("click", () => {
    if (confirmPassword.type === "text") {
      confirmPassword.type = "password";
      confirmInvisible.style.display = "block";
      confirmVisible.style.display = "none";
    }
  });
};
showConfirmPassword();
