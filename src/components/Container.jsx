import { Routes, Route } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";

const Container = () => {
  return (
		<div id="main-section">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Blue" element={<Blue />} />
				<Route path="/Red" element={<Red />} />
			</Routes>
		</div>
	);
};

export default Container;