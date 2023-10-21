let j = prompt("how old are you?")

    function age() {
        if (a.trim() !== '' ) {
            if(a.trim() > 18){
                console.log("Welcome");
            }
            if(a.trim() < 18){
                console.log("mistake");
            }
        } else {
            console.log("дебил");
        }
    } 
    age()

let a = prompt("A")
let b = prompt("B")

 function mathem() {
    if (a.trim() === 0 && b.trim() === 0) {
        console.log("you need another number");
    } else {
        console.log(
            Number(a) + Number(b),
            Number(a) - Number(b),
            Number(a) / Number(b),
            Number(a) * Number(b),
            Number(a) ** Number(b),
            Number(a) % Number(b)
        );
    }
 }
mathem()

