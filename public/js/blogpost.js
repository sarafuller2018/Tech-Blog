const addComment = async (event) => {
    event.preventDefault();

    const description = document.querySelector("#adding-comment").value.trim();
    const user_id = 1;
    const blogpost_id = document.querySelector("#post-id").textContent;
    console.log(description, user_id, blogpost_id);
    console.log("testaddcomment!!!");

    if (description && user_id && blogpost_id) {
        const response = await fetch("/api/comments/", {
            method: "POST",
            body: JSON.stringify({ description, user_id, blogpost_id }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            // document.location.reload();
            alert("Comment added!")
        } else {
            alert("Comment failed.")
        }
    }
};

document.querySelector(".add-comment").addEventListener("submit", addComment);