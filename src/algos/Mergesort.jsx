import { useContext, useEffect, useState } from "react";
import { InputContext } from "../context/inputContext";

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function merge(arr1, arr2, l, r, items, processEle) {
	let mergedArr = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			mergedArr.push(arr1[i]);
			i++;
		} else {
			mergedArr.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		mergedArr.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		mergedArr.push(arr2[j]);
		j++;
	}
	let e = 0;
	for (let k = l; k <= r; k++) {
		await delay(100);
		items[k].style.height = `${mergedArr[e]}%`;
		items[k].innerHTML = `${mergedArr[e++]}`;
	}

	await delay(100);
	return mergedArr;
}

async function mergeSort(arr, l, r, items, processEle) {
	if (l >= r) {
		return [arr[l]];
	}

	const m = l + Math.floor((r - l) / 2);
	await delay(1000);
	processEle.innerHTML = `Finding mid of array ${l} to ${r}. And seperating it.`;
	items[m].style.marginRight = "20px";
	items[m + 1].style.marginLeft = "20px";
	for (let k = l; k <= m; k++) {
		items[k].style.backgroundColor = "purple";
	}
	for (let k = m + 1; k <= r; k++) {
		items[k].style.backgroundColor = "brown";
	}
	// await delay(1000);
	const leftArr = await mergeSort(arr, l, m, items, processEle);
	await delay(100);
	const rightArr = await mergeSort(arr, m + 1, r, items, processEle);

	processEle.innerHTML = `Merging arrays: [${leftArr}] and [${rightArr}]`;
	await delay(250);
	for (let k = l; k <= r; k++) {
		items[k].style.backgroundColor = "plum";
	}
	const mergedArr = await merge(leftArr, rightArr, l, r, items, processEle);
	items[m].style.marginRight = "0px";
	items[m + 1].style.marginLeft = "0px";
	processEle.innerHTML = `Merged array: [${mergedArr}]`;
	await delay(250);

	return mergedArr;
}

async function Sort(arr) {
	const items = document.querySelectorAll(".arritem");
	const processEle = document.querySelector(".processCon");
	const sortedArray = await mergeSort(
		arr,
		0,
		arr.length - 1,
		items,
		processEle
	);
	processEle.innerHTML = "Done.";
	return sortedArray;
}

const Mergesort = () => {
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
		// console.log("ins");
		items = document.querySelectorAll(".arritem");
		items.forEach((item, index) => {
			item.style.height = `${arr[index]}%`;
		});
	}, [arr]);

	const handleClick = () => {
		console.log("clicked");
		setIsSorting(true);
		Sort(arr)
			.then((sortedArray) => setArr(sortedArray))
			.catch((error) => {
				console.error("Sort error:", error);
			})
			.finally(() => {
				setIsSorting(false);
			});
	};

	const genrater = () => {
		items = document.querySelectorAll(".arritem");
		items.forEach((item, index) => {
			item.style.backgroundColor = "white";
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
				Merge Sort
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
					disabled={isSorting}
				>
					Sort
				</button>
				<button
					className=" btn btn-outline-light"
					onClick={genrater}
					disabled={isSorting}
				>
					Generate new array
				</button>
			</div>
		</div>
	);
};

export default Mergesort;
