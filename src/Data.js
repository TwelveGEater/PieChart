import React, { useState } from 'react';
import './App.css';
import { addFieldAC, updateFieldDataAC } from './dataReducer';
import store from './store';

function Data(props) {
	const [ newFieldDta, setNewFieldData ] = useState({ name: '', value: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		store.dispatch(updateFieldDataAC(e.target.name, e.target.value));
	};

	const addField = (e) => {
		e.preventDefault();
		store.dispatch(addFieldAC(e.target[0].value, e.target[1].value));
	};

	return (
		<div className="Data">
			<form id="form" name="data">
				{Object.entries(props.data).map((f, index) => {
					let fieldName = f[0];
					return (
						<label key={f[1].name}>
							{fieldName}
							<input value={f[1].value} name={f[0]} onChange={handleSubmit} />
						</label>
					);
				})}
			</form>
			<form onSubmit={addField} id="form" name="data" style={{ position: 'absolute', bottom: 0 }}>
				<input
					value={newFieldDta.name}
					name="field"
					onChange={(e) => setNewFieldData({ ...newFieldDta, name: e.target.value })}
					placeholder="New field name"
				/>

				<input
					value={newFieldDta.value}
					name="value"
					onChange={(e) => setNewFieldData({ ...newFieldDta, value: e.target.value })}
					placeholder="New field value"
				/>

				<button type="submit">Add Field</button>
			</form>
		</div>
	);
}

export default Data;
