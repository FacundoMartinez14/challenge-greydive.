import React from 'react';
import Card from './Card';

export default function Cards({ json }) {
	return (
		<>
			<div className="bg-gradient-to-b from-DarkSlateBlue to-DarkerSlateBlue h-screen flex justify-items-center items-center justify-around">
				{json.map((e) => (
					<Card
						key={e.idVideo}
						id={e.idVideo}
						escenario={e.escenario}
						cliente={e.cliente}
					/>
				))}
			</div>
		</>
	);
}
