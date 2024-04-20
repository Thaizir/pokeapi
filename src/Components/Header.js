import React, { useEffect } from "react";

export const Header = ({ listaPokemon, setListaPokemon, pokeType, setPokeType }) => {


    function handleClick(pkmTypes) {
        console.log(pkmTypes)
        if (pkmTypes === 'ver-todos') {
            setPokeType(listaPokemon);
        } else {
            let filteredPokemon = listaPokemon.filter((pkm) => {
                const type1 = pkm.types[0] ? pkm.types[0].type.name : null;
                const type2 = pkm.types[1] ? pkm.types[1].type.name : null;
                return type1 === pkmTypes || type2 === pkmTypes;
            });
            setPokeType(filteredPokemon);
        }
    }

    return (

        <header>
            <div className="nav">
                <img src="./logo.png" alt="pokeapi" />
                <ul className="nav-list">
                    <li className="nav-item"><button className="btn btn-header" id="ver-todos" onClick={() => handleClick('ver-todos')}>Ver todos</button></li>
                    <li className="nav-item"><button className="btn btn-header normal" id="normal" onClick={() => handleClick('normal')}>Normal</button></li>
                    <li className="nav-item"><button className="btn btn-header fire" id="fire" onClick={() => handleClick('fire')}>Fire</button></li>
                    <li className="nav-item"><button className="btn btn-header water" id="water" onClick={() => handleClick('water')}>Water</button></li>
                    <li className="nav-item"><button className="btn btn-header grass" id="grass" onClick={() => handleClick('grass')}>Grass</button></li>
                    <li className="nav-item"><button className="btn btn-header electric" id="electric" onClick={() => handleClick('electric')}>Electric</button></li>
                    <li className="nav-item"><button className="btn btn-header ice" id="ice" onClick={() => handleClick('ice')}>Ice</button></li>
                    <li className="nav-item"><button className="btn btn-header fighting" id="fighting" onClick={() => handleClick('fighting')}>Fighting</button></li>
                    <li className="nav-item"><button className="btn btn-header poison" id="poison" onClick={() => handleClick('poison')}>Poison</button></li>
                    <li className="nav-item"><button className="btn btn-header ground" id="ground" onClick={() => handleClick('ground')}>Ground</button></li>
                    <li className="nav-item"><button className="btn btn-header flying" id="flying" onClick={() => handleClick('flying')}>Flying</button></li>
                    <li className="nav-item"><button className="btn btn-header psychic" id="psychic" onClick={() => handleClick('psychic')}>Psychic</button></li>
                    <li className="nav-item"><button className="btn btn-header bug" id="bug" onClick={() => handleClick('bug')}>Bug</button></li>
                    <li className="nav-item"><button className="btn btn-header rock" id="rock" onClick={() => handleClick('rock')}>Rock</button></li>
                    <li className="nav-item"><button className="btn btn-header ghost" id="ghost" onClick={() => handleClick('ghost')}>Ghost</button></li>
                    <li className="nav-item"><button className="btn btn-header dark" id="dark" onClick={() => handleClick('dark')}>Dark</button></li>
                    <li className="nav-item"><button className="btn btn-header dragon" id="dragon" onClick={() => handleClick('dragon')}>Dragon</button></li>
                    <li className="nav-item"><button className="btn btn-header steel" id="steel" onClick={() => handleClick('steel')}>Steel</button></li>
                    <li className="nav-item"><button className="btn btn-header fairy" id="fairy" onClick={() => handleClick('fairy')}>Fairy</button></li>
                </ul>
            </div>
        </header>

    )


};