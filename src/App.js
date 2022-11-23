import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import Detail from './components/DetailTest';
import json from './json/db.json';

function App() {
	return (
			<Routes>
				<Route path="/" element={<Cards json={json} />} />
				<Route path="/:id" element={<Detail json={json} />} />
			</Routes>

	);
}

export default App;
