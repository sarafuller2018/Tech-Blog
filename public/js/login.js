const loginForm = async (event) => {
    event.preventDefault();

    const userEmail = document.querySelector("#email-for-login").ariaValueMax.trim();
    const userPassword = document.querySelector("#password-for-login");

    if (userEmail && userPassword) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ userEmail, userPassword }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Log in failed.")
        }
    }
};

const signupForm = async (event) => {
    event.preventDefault();

    const userUsername = document.querySelector("#username-for-signup");
    const userEmail = document.querySelector("#email-for-signup");
    const userPassword = document.querySelector("#password-for-signup");

    if (userUsername && userEmail && userPassword) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ userUsername, userEmail, userPassword }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Sign up failed.");
        }
    }
};

document.querySelector(".login-form");
document.addEventListener("submit", loginForm);

document.querySelector(".signup-form");
document.addEventListener("submit", signupForm);