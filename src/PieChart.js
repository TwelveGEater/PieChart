import React from 'react';
import s from './PieChart.module.css';

// Setup global variables
const PieChartGraph = (props) => {
	const dataArray = Object.entries(props.data);
	let chartParts = [];
	let totalValue = 0;
	let startAngle = 0;

	for (let i = 0; i < dataArray.length; i++) {
		totalValue += dataArray[i][1].value;
	}

	let radius = 5,
		circleLength = 2 * Math.PI * radius, // Circumference = PI * Diameter
		particles = circleLength / totalValue;

	// Loop trough props.data to create pie
	for (let c = 0; c < dataArray.length; c++) {
		let sliceAngle = particles * dataArray[c][1].value / circleLength;
		let circle = (
			<circle
				r={5}
				cx="10"
				cy="10"
				fill="transparent"
				className={s.circlePart}
				data-title={dataArray[c][0]}
				style={{
					stroke: dataArray[c][1].color,
					strokeWidth: 10,
					strokeDasharray: `${particles * dataArray[c][1].value} ${circleLength}`,
					transformOrigin: '50% 50%',
					transform: `rotate(${startAngle}deg)`
				}}
			>
				<title className={s.tooltip} style={{ color: 'red' }}>
					{dataArray[c][0]}
				</title>
			</circle>
		);
		// let text = (
		// 	<text x={10 * c} y={10} fontFamily="sans-serif" fontSize="2px" fill="red" zIndex="100">
		// 		Hello!
		// 	</text>
		// );
		startAngle += sliceAngle * 360;
		chartParts.push(circle);
		//chartParts.push(text);
	}
	return (
		<svg height="45%" width="45%" viewBox="0 0 20 20">
			<circle r="10" cx="10" cy="10" fill="transparent" />
			{chartParts.map((i) => i)}
		</svg>
	);
};

export default PieChartGraph;
