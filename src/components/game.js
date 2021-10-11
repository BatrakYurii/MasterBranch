import React from "react";

export class Game extends React.Component{
    constructor(props){
        super(props);

        this.onButtonClick = this.onButtonClick.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
        this.getComputerChoice = this.getComputerChoice.bind(this);

    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getComputerChoice() {
        let computerChoice = this.getRandomInt(0, 3);

        switch (computerChoice) {
            case 0:
                return "stone";
            case 1:
                return "scissors";
            case 2:
                return "paper";
        }
    }

    onButtonClick(e){
        e.preventDefault();
        let user = e.currentTarget.id;
        let computerChoice = this.getComputerChoice();
        switch (user) {
            case computerChoice:
                alert('You: ' + user + '\nComputer: ' + computerChoice + '\nDraw!');
                break;

            case "stone":
                if (computerChoice == "scissors") {
                    alert("You: stone\nComputer: scissors\nYou won!");
                }
                else {
                    alert("You: stone\nComputer: paper\nYou lost!");
                }
                break;
            case "scissors":
                if (computerChoice == "paper") {
                    alert("You: scissors\nComputer: paper\nYou won!");
                }
                else {
                    alert("You: scissors\nComputer: stone\nYou lost!");
                }
                break;
            case "paper":
                if (computerChoice == "stone") {
                    alert("You: paper\nComputer: stone\nYou won!");
                }
                else {
                    alert("You: paper\nComputer: scissors\nYou lost!");
                }
                break;
        }

        
    }

    render(){
        return <div className="icons-block">
            <h2 className="game-title" >Rock - paper- scissors</h2>
            <ul className="game-icons">
                <li><button id="stone" onClick={this.onButtonClick}><img src={gameElementsLinks.stone} alt="Stone" /></button> </li>
                <li><button id="scissors" onClick={this.onButtonClick}><img src={gameElementsLinks.scissors} alt="Scissors" /></button></li>
                <li><button id="paper" onClick={this.onButtonClick}><img src={gameElementsLinks.paper} alt="Paper"/></button></li>
            </ul>
        </div>
    }
}

export default Game;


const gameElementsLinks = {
    stone: "https://images.obi.ru/product/RU/415x415/425578_1.jpg",
    scissors: "https://iron-harry.ua/image/cache/files/product_110363/main_img_p110363-385x385.JPG",
    paper: "https://kot.sh/sites/default/files/styles/large/public/articles-image/26-prost-paper-1.jpg?itok=bIF_czKK" 
};
