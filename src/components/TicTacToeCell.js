import { LitElement, html, css } from 'lit';

class TicTacToeCell extends LitElement {
    static styles = [
        css`
            :host {
                --box-bg-color: #fefef0;
                
                width: 175px;
                height: 175px;
                background: var(--box-bg-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
            }
            .cross {
                background:  rgb(71, 69, 78);
                height: 100px;
                position: relative;
                width: 10px;
                transform: rotate(45deg);
                border-radius: 30px;
            }
            .cross:after {
                background:  rgb(71, 69, 78);
                content: "";
                height: 10px;
                left: -45px;
                position: absolute;
                top: 45px;
                width: 100px;
                border-radius: 30px;
            }
            .circle {
                background: transparent;
                border: 10px solid rgb(184, 64, 57);
                width: 75px;
                height: 70px;
                border-radius: 50%;
            }
        `
    ];

    static get properties() {
        return {
            symbol: { type: String },
            col: { type: Number },
            row: { type: Number },
        };
    }

    constructor() {
        super();
        this.symbol='';
    }

    render() {
        return html`
            <div class='${this.symbol}'></div>
        `;
    }
}
customElements.define('tic-tac-toe-cell', TicTacToeCell);
