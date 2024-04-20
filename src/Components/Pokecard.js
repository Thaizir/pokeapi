import React from "react";

export const Pokecard = ({ listaPokemon, pokeType }) => {

    const mapTypes = (types) => (
        types.map((type) => (
            <p className={`${type.type.name} tipo`} key={type.slot}>{type.type.name}</p>
        ))
    );


    function pokeID(pkmId) {
        let id = pkmId.id.toString();
        if (id.length === 1) {
            return '00' + pkmId.id;
        } else if (id.length === 2) {
            return '0' + pkmId.id;
        } else {
            return pkmId.id;
        }
    }

    return (

        <main>
            <div id="todos">


                <div className="pokemon-todos" id="listaPokemon">
                    {pokeType.map((pkm, id) => (
                        (<>

                            <div className="pokemon" key={pkm.id}>
                                <p className="pokemon-id-back">#{pokeID(pkm)}</p>
                                <div className="pokemon-imagen">
                                    <img src={pkm.sprites.other["official-artwork"].front_default} alt={pkm.name} />
                                </div>
                                <div className="pokemon-info">
                                    <div className="nombre-contenedor">
                                        <p className="pokemon-id">#{pokeID(pkm)}</p>
                                        <h2 className="pokemon-nombre">{pkm.name}</h2>
                                    </div>
                                    <div className="pokemon-tipos">
                                        {mapTypes(pkm.types)}
                                    </div>
                                    <div className="pokemon-stats">
                                        <p className="stat">{pkm.height}m</p>
                                        <p className="stat">{pkm.weight}kg</p>
                                    </div>
                                </div>

                            </div>



                        </>

                        )))}


                </div>



            </div>
        </main >
    );

};
