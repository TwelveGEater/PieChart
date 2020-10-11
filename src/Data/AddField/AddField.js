import React, { useState } from 'react';
import s from '../Data.module.css';
import { addFieldAC } from '../../BLL/dataReducer';
import store from '../../BLL/store';

const AddField = () => {
	const [ newFieldData, setNewFieldData ] = useState({ name: '', value: '' });
	const [ isVisible, setVisible ] = useState(false);

	const addField = (e) => {
		e.preventDefault();
		store.dispatch(addFieldAC(e.target[0].value, e.target[1].value));
		setNewFieldData({ ...newFieldData, value: '', name: '' });
	};

	const showForm = () => {
		setVisible(!isVisible);
	};
	return (
		<div className={s.addField}>
			<div className={s.addFieldButtonBox}>
				<div
					className={s.addFieldButton}
					onClick={showForm}
					style={{ transform: isVisible ? 'rotate(135deg)' : '' }}
				>
					<i class="fas fa-plus" />
				</div>
			</div>
			<div className={isVisible ? s.addFieldFormBox : s.formBoxHidden}>
				<form onSubmit={addField} className={s.addFieldForm} id="form" name="data">
					<input
						value={newFieldData.name}
						name="field"
						onChange={(e) => setNewFieldData({ ...newFieldData, name: e.target.value })}
						placeholder="New field name"
					/>

					<input
						value={newFieldData.value}
						name="value"
						onChange={(e) =>
							isFinite(e.target.value)
								? setNewFieldData({ ...newFieldData, value: e.target.value })
								: null}
						placeholder="New field value"
					/>
					<button type="submit">
						<i class="fas fa-check" />
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddField;
