import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Markup } from 'interweave';
import './Detail.css';
import { Link } from 'react-router-dom';
export default function Detail({ json }) {
	const { id } = useParams();
	const test = json.find((e) => e.idVideo === id);
	const [play, setPlay] = useState(false);
	let tarea = 0;

	return (
		<div className="bg-gradient-to-b from-DarkSlateBlue to-DarkerSlateBlue pb-20 text-white">
			<div className="flex flex-col">
				<Link className="w-1/3 m-auto mt-20" to="/">
					<img
						src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-500.png"
						alt=""
					/>
				</Link>
				<h1 className="font-bold text-2xl mb-5 ml-28 mt-10">
					Cliente: {test.cliente}
				</h1>
				<h2 className="font-bold text-2xl mb-5 ml-28">
					Test: Test de usabilidad en el sitio web
				</h2>
				<h3 className="font-bold text-2xl ml-28">Testeador 1</h3>
			</div>
			<div className="h-screen flex">
				{play ? (
					<video
						className="min-w-[75%] max-w-[75%] min-h-[75%] max-h-[75%] m-auto"
						controls
						autoPlay={true}
					>
						<source src={test.linkVideo} type="video/mp4" />
					</video>
				) : (
					<div className="bg-black min-w-[75%] max-w-[75%] min-h-[75%] max-h-[75%] m-auto flex">
						<button onClick={() => setPlay(true)} className="m-auto">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-1/4 h-1/4 m-auto text-white transition-all duration-200 hover:text-gray"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
								/>
							</svg>
						</button>
					</div>
				)}
			</div>
			<h1 className="font-bold text-xl ml-56">Transcripcion</h1>
			<br />
			<div id="transcription" className="overflow-auto w-1/3 max-h-96 m-auto">
				<Markup
					className="overflow-y-scroll max-h-[50%]"
					content={test.transcripcion}
				/>
			</div>
			<h1 className="ml-56 mt-20 font-bold text-xl ">Tareas</h1>
			<div id="tasks" className="overflow-auto w-1/3 max-h-96 m-auto">
				<p className="font-bold">{test.escenario}</p>
				{test.preguntas.map((e, index) => {
					tarea += 1;
					return (
						<div key={index}>
							<hr className="w-10/12 mx-auto mt-2" />
							<h2 className="p-3 font-bold">Tarea: {tarea}</h2>
							<Markup
								className="font-bold px-5"
								content={e.texto.replace('\\n', '<br>')}
							/>
							{!isNaN(e.respuesta) ? <p>Respuesta: {e.respuesta}</p> : null}
							<p className="text-orange">Duracion de la tarea: {e.tiempo}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
