import { useEffect, useState } from "react";

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
	let arrlen = 20;
	const [arr, setArr] = useState([]);
	let items = document.querySelectorAll(".arritem");
	useEffect(() => {
		const newArray = [];
		for (let i = 0; i < arrlen; i++) {
			newArray.push(Math.floor(Math.random() * 95) + 5);
		}
		setArr(newArray);
	}, []);

	useEffect(() => {
		items = document.querySelectorAll(".arritem");
		items.forEach((item, index) => {
			item.style.height = `${arr[index]}%`;
		});
	}, [arr]);

	const handleClick = () => {
		console.log("clicked");
		Sort(arr).then((arr) => setArr(() => arr));
	};
	const genrater = () => {
		items = document.querySelectorAll(".arritem");
		items.forEach((item, index) => {
			items[index].style.backgroundColor = "white";
			item.style.height = `${arr[index]}%`;
		});
		const newArray = [];
		for (let i = 0; i < arrlen; i++) {
			newArray.push(Math.floor(Math.random() * 95) + 5);
		}
		setArr(newArray);
	};

	console.count("ren");
	return (
		<div className="container-fluid px-5 vh85 bg-secondary py-lg-3 ssCon">
			<p className="processCon w-100 text-center text-capitalize text-white fs-3">
				click button to sort
			</p>
			<div className="container-fluid d-flex gap-2 align-items-end justify-content-center itemsContainer w-100 pb-3">
				{arr.map((val, index) => {
					return (
						<div key={index} className="arritem w-25 text-center">
							{val}
						</div>
					);
				})}
			</div>
			<div className="">
				<button onClick={handleClick}>Sort</button>
				<button onClick={genrater}>Generate new array</button>
			</div>
		</div>
	);
};

export default Bubblesort;
