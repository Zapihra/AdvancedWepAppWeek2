const button = document.getElementById("submit-data");

button.addEventListener("click", () => {
    
    const data = document.getElementById("input-text").value;

    console.log(data)

    fetch('http://localhost:3000/list', {
        method: 'POST',
        body: JSON.stringify({
            "new": data
        }),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(function (response) {return response.json()});
})