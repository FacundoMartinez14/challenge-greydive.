import React from 'react';
import { Link } from 'react-router-dom';
export default function Card({ id, escenario, cliente }) {
	return (
		<div className="max-w-[33%] min-w-[33%] h-1/3 text-DarkSlateBlue border border-gray bg-white rounded-md p-10 shadow-md shadow-white transition-all duration-200 hover:bg-black hover:text-white">
			<Link to={`/${id}`}>
				<h1 className="text-3xl font-bold">Test</h1>
				<h2 className="font-bold my-2" >Cliente: <span>{cliente}</span></h2>
				<h2 className="font-bold my-2">Escenario:</h2>
				<p>{escenario}</p>
			</Link>
		</div>
	);
}
