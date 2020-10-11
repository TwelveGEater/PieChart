import React from 'react';
import s from './Data.module.css';
import { updateFieldDataAC } from '../BLL/dataReducer';
import store from '../BLL/store';
import AddField from './AddField/AddField';

function Data(props) {
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isFinite(e.target.value)) store.dispatch(updateFieldDataAC(e.target.name, e.target.value));
	};

	return (
		<div className={s.dataBox}>
			<form id="form" name="data" className={s.dataFieldBox}>
				{Object.entries(props.data).map((f) => {
					let fieldName = f[0];
					return (
						<div className={s.fieldBox} key={f[1].color}>
							<input value={f[1].value} name={f[0]} onChange={handleSubmit} />
							<label key={f[1].name}>{fieldName}</label>
						</div>
					);
				})}
			</form>
			<AddField />
		</div>
	);
}

export default Data;
