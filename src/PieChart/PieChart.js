import React from 'react';
import s from './PieChart.module.css';
import PiePart from './PiePart';

const PieChartGraph = (props) => {
	const dataArray = Object.entries(props.data);
	return (
		<div className={s.chartBox}>
			<svg height="100%" width="100%" viewBox="0 0 20 10">
				<circle r="5" cx="10" cy="5" fill="transparent" />
				{PiePart(dataArray).map((i) => i)}
			</svg>
		</div>
	);
};

export default PieChartGraph;
