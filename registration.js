let firstnameEl = document.getElementById("firstname");
let firstnameErrMsgEl = document.getElementById("firstnameErrMsg");
let middlenameEl = document.getElementById("middlename");
let lastnameEl = document.getElementById("lastname");
let lastnameErrMsgEl = document.getElementById("lastnameErrMsg");
let usernameEl = document.getElementById("username");
let usernameErrMsgEl = document.getElementById("usernameErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");
let confirmpasswordEl = document.getElementById("confirmpassword");
let confirmpasswordErrMsgEl = document.getElementById("confirmpasswordErrMsg");
let dateofbirthEl = document.getElementById("dateofbirth");
let dateofbirthErrMsgEl = document.getElementById("dateofbirthErrMsg");
let mobilenumberEl = document.getElementById("mobilenumber");
let mobilenumberErrMsgEl = document.getElementById("mobilenumberErrMsg");
let aadharnumberEl = document.getElementById("aadharnumber");
let aadharnumberErrMsgEl = document.getElementById("aadharnumberErrMsg");
let addressEl = document.getElementById("address");
let addressErrMsgEl = document.getElementById("addressErrMsg");
let workingStatusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");
let genderOtherEl = document.getElementById("genderOther");
let occupationEl = document.getElementById("occupation");
let occupationErrMsgEl = document.getElementById("occupationErrMsg");
let myFormEl = document.getElementById("myForm");

let formData = {
    firstname: "",
    middlename: '',
    lastname: "",
    username: "",
    password: "",
    confirmpassword: '',
    mobilenumber: "",
    email: "",
    status: "",
    gender: "",
    dateofbirth: "",
    address: "",
    aadharnumber: ""
};
occupationEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        occupationErrMsgEl.textContent = "Required*";
    } else {
        occupationErrMsgEl.textContent = "";
    }

    formData.occupation = event.target.value;
});
firstnameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        firstnameErrMsgEl.textContent = "Required*";
    } else {
        firstnameErrMsgEl.textContent = "";
    }

    formData.firstname = event.target.value;
});
lastnameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        lastnameErrMsgEl.textContent = "Required*";
    } else {
        lastnameErrMsgEl.textContent = "";
    }

    formData.lastname = event.target.value;
});
usernameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        usernameErrMsgEl.textContent = "Required*";
    } else {
        usernameErrMsgEl.textContent = "";
    }

    formData.username = event.target.value;
});
emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }

    formData.email = event.target.value;
});
passwordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        passwordErrMsgEl.textContent = "Required*";
    } else {
        passwordErrMsgEl.textContent = "";
    }

    formData.password = event.target.value;
});
dateofbirthEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        dateofbirthErrMsgEl.textContent = "Required*";
    } else {
        dateofbirthErrMsgEl.textContent = "";
    }

    formData.dateofbirth = event.target.value;
});
confirmpasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        confirmpasswordErrMsgEl.textContent = "Required*";
    } else {
        confirmpasswordErrMsgEl.textContent = "";
    }

    formData.confirmpassword = event.target.value;
});
addressEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        addressErrMsgEl.textContent = "Required*";
    } else {
        addressErrMsgEl.textContent = "";
    }

    formData.address = event.target.value;
});
mobilenumberEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        mobilenumberErrMsgEl.textContent = "Required*";
    } else {
        mobilenumberErrMsgEl.textContent = "";
    }

    formData.mobilenumber = event.target.value;
});
aadharnumberEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        aadharnumberErrMsgEl.textContent = "Required*";
    } else {
        aadharnumberErrMsgEl.textContent = "";
    }

    formData.aadharnumber = event.target.value;
});
workingStatusEl.addEventListener("blur", function(event) {
    formData.status = event.target.value;
});
genderMaleEl.addEventListener("blur", function(event) {
    formData.gender = event.target.value;
});
genderFemaleEl.addEventListener("blur", function(event) {
    formData.gender = event.target.value;
});
genderOtherEl.addEventListener("blur", function(event) {
    formData.gender = event.target.value;
});

function validateFormData(formData) {
    let isvalid = true;
    let {
        firstname,
        lastname,
        username,
        mobilenumber,
        aadharnumber,
        email,
        dateofbirth,
        address,
        occupation,
        password,
        confirmpassword
    } = formData;
    if (firstname === "") {
        isvalid = false;
        firstnameErrMsgEl.textContent = "Required*";
    }
    if (lastname === "") {
        isvalid = false;
        lastnameErrMsgEl.textContent = "Required*";
    }
    if (username === "") {
        isvalid = false;
        usernameErrMsgEl.textContent = "Required*";
    }
    if (username.includes(" ")) {
        isvalid = false;
        usernameErrMsgEl.textContent = "Enter valid username";
    }
    if (email === "") {
        isvalid = false;
        emailErrMsgEl.textContent = "Required*";
    }
    if (email.endsWith("@gmail.com") !== true) {
        isvalid = false;
        emailErrMsgEl.textContent = "Please Enter Valid MailId";
    }
    if (password === "") {
        isvalid = false;
        passwordErrMsgEl.textContent = "Required*";
    }
    if (password.length < 8) {
        isvalid = false;
        passwordErrMsgEl.textContent = "Please enter strong password";
    }
    if (password !== conformpassword) {
        isvalid = false;
        conformpasswordErrMsgEl.textContent = "Enter correct password";
    }
    if (occupation === "") {
        isvalid = false;
        occupationErrMsgEl.textContent = "Required*";
    }
    if (dateofbirth === "") {
        isvalid = false;
        dateofbirthErrMsgEl.textContent = "Required*";
    }
    return isvalid;
}


myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    let result = validateFormData(formData);
    if (result) {
        alert("YOUR REGISTRATION IS SUCCESSFULLY DONE");
    }
});
