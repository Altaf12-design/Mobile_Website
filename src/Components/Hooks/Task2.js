
import useGenerateRandomColor from "../Genrator";

function Task2() {
const { color, generateColor }= useGenerateRandomColor();
return (
	<div
	style={{
		height: "100vh",
		width: "100vw",
		backgroundColor: "#" + color,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}}
	>
	<button
		style={{
		padding: "40px",
		borderRadius: "10px",
		backgroundImage:
"linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
		fontSize: "larger",
		}}
		onClick={generateColor}
	>
		Generate random color
	</button>
	</div>
);
}

export default Task2;
