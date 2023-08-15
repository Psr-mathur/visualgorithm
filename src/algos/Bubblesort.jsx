import { useContext, useEffect, useState } from "react";
import { InputContext } from "../context/inputContext";

const Timeout = (time) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};

function swap(arr, min_idx, i, items, process) {
	var temp = arr[min_idx];
	arr[min_idx] = arr[i];
	arr[i] = temp;

	process.innerHTML = `swapping ${i} with ${min_idx}.`;
	items[i].innerHTML = `${arr[i]}`;
	items[min_idx].innerHTML = `${arr[min_idx]}`;
	items[i].style.height = `${arr[i]}%`;
	items[min_idx].style.height = `${arr[min_idx]}%`;
}

async function Sort(arr) {
	const items = document.querySelectorAll(".arritem");
	const process = document.querySelector(".processCon");
	var i, j, temp;
	const n = arr.length;
	var swapped;
	for (i = 0; i < n - 1; i++) {
		for (j = 0; j < n - i - 1; j++) {
			process.innerHTML = `Comparing arr[${j}] with arr[${j + 1}].`;
			items[j].style.backgroundColor = "#c5fcd4";
			items[j + 1].style.backgroundColor = "#ffa091";
			await Timeout(250);
			if (arr[j] > arr[j + 1]) {
				process.innerHTML = `arr[${j}] > arr[${j + 1}] so Swapping.`;
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				items[j].style.height = `${arr[j]}%`;
				items[j].innerHTML = `${arr[j]}`;
				items[j + 1].style.height = `${arr[j + 1]}%`;
				items[j + 1].innerHTML = `${arr[j + 1]}`;
				await Timeout(400);
			}
			items[j].style.backgroundColor = "white";
			items[j + 1].style.backgroundColor = "white";
		}
		items[n - i - 1].style.backgroundColor = "lightgreen";
	}
	process.innerHTML = `Done.`;
	items[0].style.backgroundColor = "lightgreen";
	return arr;
}

const Bubblesort = () => {
	const { getLength, setLength } = useContext(InputContext);
	const [arr, setArr] = useState([]);
	const [isSorting, setIsSorting] = useState(false);
	let items = document.querySelectorAll(".arritem");
	useEffect(() => {
		const newArray = [];
		for (let i = 0; i < getLength; i++) {
			newArray.push(Math.floor(Math.random() * 95) + 5);
		}
		setArr(newArray);
	}, [getLength]);

	useEffect(() => {
		items = document.querySelectorAll(".arritem");
		items.forEach((item, index) => {
			item.style.height = `${arr[index]}%`;
		});
	}, [arr]);

	const handleClick = () => {
		console.log("clicked");
		setIsSorting(true);
		Sort(arr)
			.then((arr) => setArr(() => arr))
			.then(() => setIsSorting(false));
	};
	const genrater = () => {
		items = document.querySelectorAll(".arritem");
		items.forEach((item, index) => {
			items[index].style.backgroundColor = "white";
			item.style.height = `${arr[index]}%`;
		});
		const newArray = [];
		for (let i = 0; i < getLength; i++) {
			newArray.push(Math.floor(Math.random() * 95) + 5);
		}
		setArr(newArray);
	};

	console.count("ren");
	return (
		<div className="container-fluid px-lg-5 vh-100 CustomCon">
			<p className=" text-center text-uppercase text-danger fs-6">
				Bubble Sort
			</p>
			<p className="processCon w-100 text-center text-capitalize text-white fs-4">
				click button to sort
			</p>
			<div className="itemsContainer container-fluid d-flex gap-2 align-items-end justify-content-center w-100 pb-3">
				{arr.map((val, index) => {
					return (
						<div key={index} className="arritem w-25 text-center">
							{val}
						</div>
					);
				})}
			</div>
			<div className=" px-2 d-flex gap-4 py-2">
				<div>
					<label htmlFor="length" className=" fw-bold">
						Array Length :&nbsp;
					</label>
					<input
						type="number"
						min={3}
						max={window.innerWidth <= 568 ? 10 : 30}
						value={getLength}
						className=" px-3 py-1 bg-transparent text-dark"
						name="length"
						onChange={(e) => setLength(e.target.value)}
						readOnly={isSorting}
					/>
				</div>
				<button
					className=" btn btn-outline-light"
					onClick={handleClick}
				>
					Sort
				</button>
				<button className=" btn btn-outline-light" onClick={genrater}>
					Generate new array
				</button>
			</div>
		</div>
	);
};

export default Bubblesort;
