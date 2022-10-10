import React from 'react';

export const LearnMoreCards = (props) => {
    return (
        <React.Fragment>
			<div class="card mb-3" style={{maxWidth: "540px"}}>
				<div class="row g-0">
					<div class="col-md-4">
						<img src={props.image} class="img-fluid rounded-start" alt="..."/>
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h5 class="card-title">{props.name}</h5>
							<p class="card-text">{props.mass}</p>
							<p class="card-text">{props.hair_color}</p>
							<p class="card-text">{props.skin_color}</p>
							<p class="card-text">{props.eye_color}</p>
							<p class="card-text">{props.birth_year}</p>
							<p class="card-text">{props.gender}</p>

						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
    )
}