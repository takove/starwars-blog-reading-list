import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HomeCard } from "../component/HomeCards.jsx";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		let getCharactersResult = actions.getCharacters()
		let getPlanetsResult = actions.getPlanets()
		
	}, [])
	return (
		<React.Fragment>
			{
				store.characters ? (
					<div className="d-flex overflow-auto no-wrap" >
						{store.characters.map((character) => {
							return <HomeCard key={character.uid} uid={character.uid} name={character.name} image={store.API_URL_IMG + `characters/${character.uid}.jpg`}/>
						})}
					</div>		
				) : (
					<div>
						nothing yet
					</div>
				)
			}
			<div className="p-5"></div>
			{
				store.planets ? (
					<div className="d-flex overflow-auto no-wrap" >
						{store.planets.map((planets) => {
							return <HomeCard key={planets.uid} name={planets.name} image={store.API_URL_IMG + `planets/${planets.uid}.jpg`}/>
						})}
					</div>		
				) : (
					<div>
						nothing yet
					</div>
				)
			}				
		</React.Fragment>
	);
};
