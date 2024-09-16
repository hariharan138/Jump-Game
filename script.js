    let dino = document.getElementById('dino');
    let rock = document.getElementById('rock');
    let score = document.getElementById('score');
    let level = document.getElementById('level');
    let highsc = document.getElementById('highsc');
    let pname = document.getElementById('pname');

    function jump() {
        dino.classList.add('jump-animation');
        setTimeout(() => {
            dino.classList.remove('jump-animation');
        }, 500);
        
    }
    let NAme = localStorage.getItem("Name")
    console.log(localStorage.getItem("Name"));
    
    document.addEventListener("keypress", (e) => {
        if (!dino.classList.contains('jump-animation')) {
            jump();
        }
    });
    document.addEventListener("touchstart", (e) => {
        if (!dino.classList.contains('jump-animation')) {
            jump();
        }
    });
    let maxScore = localStorage.getItem("maxvalue") ? parseInt(localStorage.getItem("maxvalue")) : 0;
    highsc.innerHTML = `Highscore: ${maxScore}`;
    pname.innerHTML=`${NAme}:`;
    setInterval(() => {
        score.innerText++;
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let rockleft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));

        // Hide rock if it goes out of bounds
        if (rockleft < 0) {
            rock.style.display = 'none';
        } else {
            rock.style.display = '';
        }

        // Update high score
        if (parseInt(score.innerText) > maxScore) {
            maxScore = parseInt(score.innerText);
            localStorage.setItem("maxvalue", maxScore);
        }
        //  Collision
        if (rockleft < 50 && rockleft > 0 && dinoTop > 150) {
            alert(`Game Over! You scored: ${score.innerText - 1}. Play Again?`);
            location.reload();
        }

        // Adjust game speed based on score
        if(score.innerText ==="1"){
            updateRockSpeed("2.1s")
        }
        else if(score.innerText==="6
            0"){
            updateRockSpeed("1.5s")
            level.innerHtml ="Well Played !!!";
            setTimeout(() => { level . innerHtml =""},1000);
        }
        else if (score.innerText === "200") {
            updateRockSpeed("1.3s"); 
            level.innerHTML = "Level 1 Completed!!";
            setTimeout(() => { level.innerHTML = "" }, 1000);
        } else if (score.innerText === "400") {
            updateRockSpeed("1.1s"); 
            level.innerHTML = "Level 2 Completed!!";
            setTimeout(() => { level.innerHTML = ""; }, 1000);
        } else if (score.innerText === "600") {
            updateRockSpeed("0.8s"); 
            level.innerHTML = "Level 3 Completed!!";
            setTimeout(() => { level.innerHTML = ""; }, 1000);
        }
    }, 50);

    function updateRockSpeed(speed) {
        rock.style.animation = 'none';  
        rock.offsetWidth;  
        rock.style.animation = `rock ${speed} infinite`;  
    }
