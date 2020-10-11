const UPDATE_FIELD_DATA = 'UPDATE-FIELD-DATA';
const ADD_FIELD = 'ADD-FIELD';

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.ceil(Math.random() * 15)];
	}
	return color;
}

export const dataReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_FIELD_DATA:
			const field = action.field;
			const fieldValue = state.fieldData[field];
			return {
				...state,
				fieldData: { ...state.fieldData, [field]: { ...fieldValue, value: +action.text } }
			};
		case ADD_FIELD:
			return {
				...state,
				fieldData: {
					...state.fieldData,
					[action.name]: {
						color: getRandomColor(),
						value: +action.value
					}
				}
			};
		default:
			return state;
	}
};

export const updateFieldDataAC = (field, text) => ({ type: UPDATE_FIELD_DATA, field, text });
export const addFieldAC = (name, value) => ({ type: ADD_FIELD, name, value });
