import {DivComponent} from "../../common/div-component.js";
import './header.css';

export class Header extends DivComponent
{
    constructor(appState) 
    {
        super();
        this.appState = appState;
    }
    
    render() 
    {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = 
            `
            <div>
                <img src="/static/logo.svg" alt="logo">
            </div>
            <div class="menu">
                <a href="#" class="menu__item">
                    <img src="/static/search.svg" alt="search-icon">
                    Поиск книг
                </a>
                <a href="#favorites" class="menu__item">
                    <img src="/static/favorites.svg" alt="favorites">
                    Избранное
                    <div class="menu__counter">
                        ${this.appState.favourites.length}
                    </div>
                </a>
            </div>
            `;
        return this.el;
    }
}