const addComment = async (event) => {
    event.preventDefault();

    const description = document.querySelector("#adding-comment").value.trim();
    const id = document.querySelector("#post-id");

    if (description) {
        const response = await fetch("/api/comments/", {
            method: "POST",
            body: JSON.stringify({ description }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace(`/blogpost/${id}`);
        } else {
            alert("Comment failed.")
        }
    }
};

document.querySelector(".add-comment").addEventListener("submit", addComment);