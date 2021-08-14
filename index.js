function checkNumber(){
    let maximum=document.getElementById("number").value;
    let x= document.getElementById("winMsg");
    
    // let maximum=parseInt(prompt("Enter a maximum Number upto you want to guess!"));
    if(maximum==''){
        alert("Please Enter Valid Numeric Value");
    }
    else{
        const targetNum=Math.floor(Math.random()*maximum)+1;
        console.log(targetNum);

        let guess=parseInt(prompt("Enter your first guess!"));
        let attempts=1;

        while(parseInt(guess)!==targetNum){
            if(guess==='q'){
                break;
            }
        
            attempts++;
            if (guess>targetNum) {
                guess=prompt("Too High! Enter a new guess");
            } else {
                guess=prompt("Too Low! Enter a new guess");
            }
        
        
        }
        document.getElementById("guessImage").style.display="none";
        if (guess==='q') {
            x.innerHTML="Ok, You Quit!";
        } else {
            x.innerHTML="Congrats You Win!";
            document.getElementById("gueessRe").innerHTML=`Range of guessing = 1 to ${maximum}<br\>Correct Number = ${targetNum}<br\>Attempts taken to guess = ${attempts}`;
        }
    }
}

    
