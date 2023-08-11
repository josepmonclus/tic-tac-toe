import { LitElement, html, css } from 'lit';

import "@/components/TicTacToeCell.js"

class TicTacToe extends LitElement {
    static get styles() {
        return css`
            :host {
                --board-bg-color: #e5d6c2;
                --cell-width: 32%;
                --cell-height: 32%;
            }
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .board {
                max-width: var(--board-width);
                max-height: var(--board-height);
                width: 100vw;
                height: 100vh;
                padding: 12px;
                background: var(--board-bg-color);
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                justify-content: space-between;
                border-radius: 20px;
            }
            @media(max-height:600px) {
                .board {
                    max-width: none;
                    max-height: 100%;
                    width: 80vh;
                    height: 80vh;
                    margin: 10px;
                }

            }
            @media(max-width: 600px) {
                .board {
                    max-width: 100%;
                    max-height: none;
                    width: 90vw;
                    height: 90vw;
                    margin: 10px;
                }
            }
            a.new-game{                
                background-color: #e5d6c2;
                color: #2D333B;
                font-family: Verdana;
                font-size: max(2vw, 2vh);
                font-weight: 800;
                font-style: normal;
                text-decoration: none;
                padding: 15px 30px;
                border: 0px solid #000;
                border-radius: 12px;
                display: inline-block;
                margin-top: 2vh;
            }
            a.new-game:hover{
                background-color: #d9cbb8;
                cursor: pointer;
            }
            a.new-game:active{
                transform: scale(0.95);
            }
        `
    }

    static get properties() {
        return {
            board: { type: Array },
            currentPlayer: { type: Number },
            plays: { type: Object },
            turn: { type: Number },
        };
    }

    constructor() {
        super();
        this.initGame();
        this.addEventListener('player-win', e => {
            confirm(`Player ${e.detail.player} has won! 🎉`)
        })
        this.addEventListener('tie', () => {
            confirm(`It seems it's a tie 🫤`)
        })
    }

    render() {
        return html`
            <div class="container">
                <div class="board">
                    ${this.board.map((row, rowIndex) =>
                        row.map((col, colIndex) =>
                        html`
                            <tic-tac-toe-cell 
                                .col=${colIndex}
                                .row=${rowIndex}
                                @click="${this._handleClick}">
                            </tic-tac-toe-cell>
                        `
                    ))}
                </div>
                <a class="new-game" @click="${this.newGame}">New Game</a>
            </div>
        `
    }

    initGame() {
        this.board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        this.turn = 1
        this.currentPlayer = 1
        this.plays = { 1: 0, 2: 0}
    }

    newGame(e) {
        this.initGame();

        const cells = this.shadowRoot.querySelectorAll('tic-tac-toe-cell');
        cells.forEach(cell => {
            cell.symbol = ''
        })
    }

    _handleClick(e) {
        // game ended
        if(this.checkVictory(this.currentPlayer)) {
            return;
        }

        // cell used
        if(this.board[e.target.row][e.target.col] !== 0) {
            return;
        }
        
        e.target.symbol = this.currentPlayer === 1 ? 'cross' : 'circle';

        this.board[e.target.row][e.target.col] = this.currentPlayer;
        this.plays[this.currentPlayer]++;

        if(this.checkVictory(this.currentPlayer)) {
            setTimeout(() => {
                this.dispatchEvent(new CustomEvent('player-win', {
                    detail: {
                        player: this.currentPlayer
                    }
                }))
            }, 100);
        } else if(this.plays[1] + this.plays[2] === 9) {
            setTimeout(() => {
                this.dispatchEvent(new CustomEvent('tie'))
            }, 100);
        } else {
            this.turn++;
            this.changePlayer();
        }
    }

    changePlayer() {
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    }

    checkVictory(player) {
        return this.checkHorizontal(player)
            || this.checkVertical(player)
            || this.checkDiagonal(player)
    }

    checkHorizontal(player) {
        for(let row = 0; row < this.board.length; row++) {
            let count = 0;
            for(let col = 0; col < this.board.length; col++) {
                if(this.board[row][col] === player) {
                    count++;
                } else {
                    break;
                }
            }

            if(count === this.board.length) {
                return true;
            }
        }

        return false;
    }

    checkVertical(player) {
        for(let col = 0; col < this.board.length; col++) {
            let count = 0;
            for(let row = 0; row < this.board.length; row++) {
                if(this.board[row][col] === player) {
                    count++;
                } else {
                    break;
                }
            }

            if(count === this.board.length) {
                return true;
            }
        }
        return false;
    }

    checkDiagonal(player) {
        if((this.board[0][0] === player
                && this.board[1][1] === player
                && this.board[2][2] === player)
            ||
            (this.board[0][2] === player
                && this.board[1][1] === player
                && this.board[2][0] === player)) {
            return true;
        }

        return false;
    }
}
customElements.define('tic-tac-toe', TicTacToe);