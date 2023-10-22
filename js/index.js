const BOOKS_URL = "http://localhost:3000/books";

document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector("#list")
    list.addEventListener("click", function (event) {
        event.preventDefault();
        fetch(BOOKS_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({list})
        }).then(response => {
            return response.json();
        }).then(data => {
            showPanel.innerHTML = data;
        })
    })
    
});
