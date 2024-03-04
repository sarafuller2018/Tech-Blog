const loginForm = async (event) => {
    event.preventDefault();

    const userEmail = document.querySelector("#email-for-login").value.trim();
    const userPassword = document.querySelector("#password-for-login").value.trim();

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

    const userUsername = document.querySelector("#username-for-signup").value.trim();
    const userEmail = document.querySelector("#email-for-signup").value.trim();
    const userPassword = document.querySelector("#password-for-signup").value.trim();

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