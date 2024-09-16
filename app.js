function inputName() {
    let name = document.getElementById("myinput").value;
    console.log("Name entered:",name);
    localStorage.setItem("Name", name)
    
}

function submitForm() {
    let name = document.getElementById("myinput").value;    
    if (name === "") {
        alert("Please enter a name before starting the game!");
        return false; 
    }
    alert("Game started for: " + name);
    return true; 
}