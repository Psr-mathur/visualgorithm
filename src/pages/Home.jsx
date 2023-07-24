import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home">
			<section className="hero">
				<h1>Explore Algorithms in Action!</h1>
				<img src="hero-image.png" alt="Sorting Algorithms" />
			</section>

			<section className="introduction">
				<h2>Welcome to Sorting Algorithm Visualizer</h2>
				<p>
					Discover the world of sorting algorithms through interactive
					visualizations. Watch the algorithms in action and gain a
					deeper understanding of their behavior and performance.
				</p>
				<p>
					Our visualizations make learning sorting algorithms engaging
					and fun. Customize the array sizes, adjust the visualization
					speed, and step through the process at your own pace.
				</p>
			</section>

			<section className="algorithm-previews">
				<h2>Sorting Algorithms at a Glance</h2>
				<div className="algorithm-preview">
					<h3>
						<Link
							style={{ textDecoration: "none" }}
							to="/selectionsort"
						>
							Selection Sort
						</Link>
					</h3>
					<img src="selection-sort.gif" alt="Selection Sort" />
					<p>
						Selection sort is a simple comparison-based sorting
						algorithm. It repeatedly selects the smallest element
						and places it at the beginning of the array.
					</p>
				</div>
				<div className="algorithm-preview">
					<h3>
						<Link
							style={{ textDecoration: "none" }}
							to="/bubblesort"
						>
							Bubble Sort
						</Link>
					</h3>
					<img src="bubble-sort.gif" alt="Bubble Sort" />
					<p>
						Bubble sort is a comparison-based algorithm where
						adjacent elements are compared and swapped if they are
						in the wrong order.
					</p>
				</div>
				<div className="algorithm-preview">
					<h3>
						<Link
							style={{ textDecoration: "none" }}
							to="/mergesort"
						>
							Merge Sort
						</Link>
					</h3>
					<img src="merge-sort.gif" alt="Merge Sort" />
					<p>
						Merge sort is a divide-and-conquer algorithm that
						divides the array into two halves, sorts them
						separately, and then merges them back into a sorted
						array.
					</p>
				</div>
			</section>

			<section className="key-features">
				<h2>Key Features</h2>
				<ul>
					<li>Step-by-step visualization of sorting algorithms.</li>
					<li>Adjustable speed for a better learning experience.</li>
					<li>
						Customizable array sizes to observe different scenarios.
					</li>
					<li>User-friendly and interactive interface.</li>
				</ul>
			</section>

			<section className="educational-value">
				<h2>Unlock the Power of Sorting Algorithms</h2>
				<p>
					Understanding sorting algorithms is fundamental to computer
					science and programming. Visualizing the algorithms in
					action helps demystify complex concepts and lays the
					foundation for solving real-world problems.
				</p>
			</section>

			<section className="cta">
				<h2>Start Visualizing Algorithms Now!</h2>
				<a href="#/selectionsort" className="btn-cta">
					Start Learning
				</a>
			</section>

			<section className="quotes">
				<h2>Inspired Learners Say...</h2>
				<blockquote>
					"This visualization platform made sorting algorithms so much
					easier to grasp. Highly recommended!"
					<cite>John Doe, Software Engineer</cite>
				</blockquote>
			</section>

			<footer className="footer">
				<nav>
					<Link to="/">Home</Link>
					<Link to="/about">About Us</Link>
					<Link to="/">Algorithm Descriptions</Link>
					<Link to="/">Contact</Link>
					<Link
						href="https://github.com/yourusername/sorting-visualization"
						target="_blank"
					>
						GitHub Repository
					</Link>
				</nav>
				<p>
					&copy; 2023 Sorting Algorithm Visualizer. All rights
					reserved.
				</p>
			</footer>
		</div>
	);
};

export default Home;
