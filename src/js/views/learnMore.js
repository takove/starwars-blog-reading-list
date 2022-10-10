import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { LearnMoreCards } from "../component/LearnMoreCards.jsx";

import { Context } from "../store/appContext";

export const LearnMore = () => {
	const { store, actions } = useContext(Context);

	const {id} = useParams()

	useEffect(() => {
		let getCharacterInfoResult = actions.getCharacterInfo(id)
	}, [])
	return (
		<React.Fragment>
			{
				store.characterInfo ? (
					<div className="d-flex" >
						<LearnMoreCards
							name={store.characterInfo.name} 							
							image={store.API_URL_IMG + `characters/${id}.jpg`} 
							mass={store.characterInfo.mass} 
							hair_color={store.characterInfo.hair_color} 
							skin_color={store.characterInfo.skin_color} 
							eye_color={store.characterInfo.eye_color} 
							birth_year={store.characterInfo.birth_year} 
							gender={store.characterInfo.gender} 
						/>
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
