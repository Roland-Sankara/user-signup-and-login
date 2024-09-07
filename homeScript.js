const homeDiv = document.getElementById("home-div");
const userDetails = document.getElementById("user-details");
const imageDiv = document.getElementById("image-div");
const itemsInLocalStorage = localStorage.getItem("userData");
let parseUserData = JSON.parse(itemsInLocalStorage);
console.log(parseUserData);

const showDetails = () => {
  for (let detail of parseUserData) {
    const userNames = document.createElement("p");
    const email = document.createElement("p");
    const image = document.createElement("img");
    const name = document.getElementById("name");
    const username = document.getElementById("username");
    const emailAccount = document.getElementById("email-acc");

    image.setAttribute("src", `${detail.profilePic}`);

    userNames.innerText = `${detail.firstname} ${detail.lastname}`;
    name.innerText = `${detail.firstname} ${detail.lastname}`;
    emailAccount.innerText = detail.email;
    username.innerText = detail.username;
    userNames.style.textAlign = "left";
    email.style.marginTop = "-10px";
    email.innerText = detail.email;

    userDetails.append(userNames, email);
    imageDiv.append(image, userDetails);
  }
  homeDiv.prepend(imageDiv);
};
showDetails();
