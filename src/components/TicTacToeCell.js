import { LitElement, html, css } from 'lit';

class TicTacToeCell extends LitElement {
    static styles = [
        css`
            :host {
                --box-bg-color: #fefef0;
                
                width: var(--cell-width);
                height: var(--cell-height);
                background: var(--box-bg-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
            }
            .cross {
                background:  rgb(71, 69, 78);
                height: 100%;
                position: relative;
                width: 0.7em;
                transform: rotate(45deg);
                border-radius: 30px;
            }
            .cross:after {
                background:  rgb(71, 69, 78);
                content: "";
                height: 100%;
                position: absolute;
                width: 100%;
                transform: rotate(90deg);
                border-radius: 30px;
            }
            .circle {
                background: transparent;
                border: 0.7em solid rgb(184, 64, 57);
                width: 60%;
                height: 60%;
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
