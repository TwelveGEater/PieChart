import React from 'react';
import s from './PieChart.module.css';

const PiePart = (props) => {
	const dataArray = [ ...props ];
	let chartParts = [];
	let totalValue = 0;
	let startAngle = 0;

	for (let i = 0; i < dataArray.length; i++) {
		totalValue += dataArray[i][1].value;
	}

	let radius = 1.5,
		circleLength = 2 * Math.PI * radius, // Circumference = PI * Diameter
		particles = circleLength / totalValue;

	// Loop trough props.data to create pie
	for (let c = 0; c < dataArray.length; c++) {
		let sliceAngle = particles * dataArray[c][1].value / circleLength;
		const color = dataArray[c][1].color;
		// let x =
		// 	(50 +
		// 		(0.501 - 50) * Math.cos(startAngle + 90 + sliceAngle * 180) -
		// 		(0.07 - 50) * Math.sin(startAngle + 90 + sliceAngle * 180)) *
		// 	100;
		// let y =
		// 	50 +
		// 	(0.07 - 50) * Math.cos(startAngle + 90 + sliceAngle * 180) +
		// 	(0.501 - 50) * Math.sin(startAngle + 90 + sliceAngle * 180);
		let circle = (
			<g key={color}>
				<circle
					r={1.5}
					cx="10"
					cy="5"
					fill="transparent"
					className={s.circlePart}
					data-title={dataArray[c][0]}
					style={{
						stroke: color,
						strokeWidth: 3,
						strokeDasharray: `${particles * dataArray[c][1].value} ${circleLength}`,
						transformOrigin: '50% 50%',
						transform: `rotate(${startAngle}deg)`
					}}
				>
					<title className={s.tooltip} style={{ color: 'red' }}>
						{dataArray[c][0]}
					</title>
				</circle>
				<line
					x1="50%"
					y1="13%"
					x2="50.1%"
					y2="20%"
					stroke="white"
					strokeWidth="0.03"
					stroke={color}
					style={{
						transformOrigin: '50% 50%',
						transform: `rotate(${startAngle + 90 + sliceAngle * 180}deg)`,
						zIndex: 100
					}}
					className={s.line}
				/>
				<line
					x1="50%"
					y1="13%"
					x2="55%"
					y2="13%"
					stroke="white"
					strokeWidth="0.03"
					stroke={color}
					style={{
						transformOrigin: '50% 50%',
						transform: `rotate(${startAngle + 90 + sliceAngle * 180}deg)`,
						zIndex: 100
					}}
					className={s.line}
				/>
				<text
					x={'50.1%'}
					y={'12%'}
					fontFamily="sans-serif"
					fontSize="0.025rem"
					fill="white"
					style={{
						transformOrigin: `50% 50%`,
						transform: `rotate(${startAngle + 90 + sliceAngle * 180}deg)`
					}}
				>
					{`${dataArray[c][0]} (${Math.round(dataArray[c][1].value / totalValue * 100)}%) `}
				</text>
			</g>
		);
		startAngle += sliceAngle * 360;
		if (dataArray[c][1].value) chartParts.push(circle);
	}
	return chartParts;
};

export default PiePart;
