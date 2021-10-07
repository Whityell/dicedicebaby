var dice = [];

class Die {
    constructor(value) {
        this.value = value;
        this.div = document.createElement("div");
        document.body.appendChild(this.div);
        
        this.div.style.width = "100px";
        this.div.style.height = "100px";
        this.div.style.cssFloat = "left";
        this.roll();
       
        this.div.addEventListener("click", () => {
            console.log(this);
            let diceFace = Math.floor(Math.random() * 6) + 1;
            
            this.div.innerText = diceFace;
            this.divText = diceFace;
            this.div.style.color = "pink";
            
            switch (diceFace) {
                case 1:
                    this.div.style.color = "white";
                    this.div.style.height = "100px";
                    this.div.style.weidth = "100px";
                    this.div.style.backgroundColor = "pink"
                    this.div.style.marginRight = "50px"
                    this.div.style.marginBottom = "50px"
                    this.div.style.textAlign = "center"
                    this.div.style.border = "double"
                    this.div.style.borderWidth = "thick"
                    this.div.style.fontSize = "70px"

                    
                    break;
                case 2:
                    this.div.style.color = "white";
                    this.div.style.height = "100px";
                    this.div.style.weidth = "100px";
                    this.div.style.backgroundColor = "pink"
                    this.div.style.marginRight = "50px"
                    this.div.style.marginBottom = "50px"
                    this.div.style.textAlign = "center"
                    this.div.style.border = "double"
                    this.div.style.borderWidth = "thick"
                    this.div.style.fontSize = "70px"
                    break;
                case 3:
                    this.div.style.color = "white";
                    this.div.style.height = "100px";
                    this.div.style.weidth = "100px";
                    this.div.style.backgroundColor = "pink"
                    this.div.style.marginRight = "50px"
                    this.div.style.marginBottom = "50px"
                    this.div.style.textAlign = "center"
                    this.div.style.border = "double"
                    this.div.style.borderWidth = "thick"
                    this.div.style.fontSize = "70px"
                    break;
                case 4:
                    this.div.style.color = "white";
                    this.div.style.height = "100px";
                    this.div.style.weidth = "100px";
                    this.div.style.backgroundColor = "pink"
                    this.div.style.marginRight = "50px"
                    this.div.style.marginBottom = "50px"
                    this.div.style.textAlign = "center"
                    this.div.style.border = "double"
                    this.div.style.borderWidth = "thick"
                    this.div.style.fontSize = "70px"
                    break;
                case 5:
                    this.div.style.color = "white";
                    this.div.style.height = "100px";
                    this.div.style.weidth = "100px";
                    this.div.style.backgroundColor = "pink"
                    this.div.style.marginRight = "50px"
                    this.div.style.marginBottom = "50px"
                    this.div.style.textAlign = "center"
                    this.div.style.border = "double"
                    this.div.style.borderWidth = "thick"
                    this.div.style.fontSize = "70px"
                    break;
                case 6:
                    this.div.style.color = "white";
                    this.div.style.height = "100px";
                    this.div.style.weidth = "100px";
                    this.div.style.backgroundColor = "pink"
                    this.div.style.marginRight = "50px"
                    this.div.style.marginBottom = "50px"
                    this.div.style.textAlign = "center"
                    this.div.style.border = "double"
                    this.div.style.borderWidth = "thick"
                    this.div.style.fontSize = "70px"
                    break;
            }
        });
       
        this.div.addEventListener("dblclick", () => {
            this.removeDie();
        });
    }                                        
    roll() {
        
        let diceFace = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = diceFace;
        this.divText = diceFace;
        this.div.style.color = "transparent";
        switch (diceFace) {
            case 1:
                this.div.style.color = "white";
                this.div.style.height = "100px";
                this.div.style.weidth = "100px";
                this.div.style.backgroundColor = "pink"
                this.div.style.marginRight = "50px"
                this.div.style.marginBottom = "50px"
                this.div.style.textAlign = "center"
                this.div.style.border = "double"
                this.div.style.borderColor = "black"
                this.div.style.borderWidth = "thick"
                this.div.style.fontSize = "70px"
                break;
            case 2:
                this.div.style.color = "white";
                this.div.style.height = "100px";
                this.div.style.weidth = "100px";
                this.div.style.backgroundColor = "pink"
                this.div.style.marginRight = "50px"
                this.div.style.marginBottom = "50px"
                this.div.style.textAlign = "center"
                this.div.style.border = "double"
                this.div.style.borderColor = "black"
                this.div.style.borderWidth = "thick"
                this.div.style.fontSize = "70px"
                break;
            case 3:
                this.div.style.color = "white";
                this.div.style.height = "100px";
                this.div.style.weidth = "100px";
                this.div.style.backgroundColor = "pink"
                this.div.style.marginRight = "50px"
                this.div.style.marginBottom = "50px"
                this.div.style.textAlign = "center"
                this.div.style.border = "double"
                this.div.style.borderColor = "black"
                this.div.style.borderWidth = "thick"
                this.div.style.fontSize = "70px"
                break;
            case 4:
                this.div.style.color = "white";
                this.div.style.height = "100px";
                this.div.style.weidth = "100px";
                this.div.style.backgroundColor = "pink"
                this.div.style.marginRight = "50px"
                this.div.style.marginBottom = "50px"
                this.div.style.textAlign = "center"
                this.div.style.border = "double"
                this.div.style.borderColor = "black"
                this.div.style.borderWidth = "thick"
                this.div.style.fontSize = "70px"
                break;
            case 5:
                this.div.style.color = "white";
                this.div.style.height = "100px";
                this.div.style.weidth = "100px";
                this.div.style.backgroundColor = "pink"
                this.div.style.marginRight = "50px"
                this.div.style.marginBottom = "50px"
                this.div.style.textAlign = "center"
                this.div.style.border = "double"
                this.div.style.borderColor = "black"
                this.div.style.borderWidth = "thick"
                this.div.style.fontSize = "70px"
                break;
            case 6:
                this.div.style.color = "white";
                this.div.style.height = "100px";
                this.div.style.weidth = "100px";
                this.div.style.backgroundColor = "pink"
                this.div.style.marginRight = "50px"
                this.div.style.marginBottom = "50px"
                this.div.style.textAlign = "center"
                this.div.style.border = "double"
                this.div.style.borderColor = "black"
                this.div.style.borderWidth = "thick"
                this.div.style.fontSize = "70px"
                break;
        }
    }
    // remove function to remove the dice 
    removeDie() {
        this.div.remove();
        let index = dice.indexOf(this);
        dice.splice(index, 1);
        console.log(index);
    }
}
// click button to create a new dice 
document.getElementById("newDie").addEventListener("click", function () {
    let d1 = new Die();
    dice.push(d1);
});
// click button to roll all dice already on the page 
document.getElementById("allDie").addEventListener("click", function () {
    for (i = 0; i < dice.length; i++) {
        dice[i].roll();
    }
});
// click button to add up all dice on the page and return a alert
document.getElementById("sumDie").addEventListener("click", function () {
    let sum = 0;
    for (a = 0; a < dice.length; a++) {
        sum = sum + dice[a].divText;
    }
    alert(`Add Em' All Up and You Get... ${sum}!`);
});