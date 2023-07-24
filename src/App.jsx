import { useState } from "react";
import Navbar from "./components/Navbar";
import Selectionsort from "./algos/Selectionsort";
import { Route, Routes } from "react-router-dom";
import Bubblesort from "./algos/Bubblesort";
import Mergesort from "./algos/Mergesort";
import Home from "./pages/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/selectionsort" element={<Selectionsort />} />
				<Route path="/bubblesort" element={<Bubblesort />} />
				<Route path="/mergesort" element={<Mergesort />} />
			</Routes>
		</div>
	);
}

export default App;
