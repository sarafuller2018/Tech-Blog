const loginForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email-for-login").value.trim();
    const password = document.querySelector("#password-for-login").value.trim();

    if (email && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Log in failed.")
        }
    }
};

const signupForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username-for-signup").value.trim();
    const email = document.querySelector("#email-for-signup").value.trim();
    const password = document.querySelector("#password-for-signup").value.trim();

    if (username && email && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Sign up failed.");
        }
    }
};

document.querySelector(".login-form").addEventListener("submit", loginForm);

document.querySelector(".signup-form").addEventListener("submit", signupForm);