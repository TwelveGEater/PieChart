import { dataReducer } from './dataReducer';

const store = {
	_state: {
		dataPage: {
			fieldData: {
				Apples: {
					name: 'Value 1',
					color: 'Green',
					value: 45
				}
			}
		}
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {},

	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		this._state.dataPage = dataReducer(this._state.dataPage, action);
		this._callSubscriber(this._state);
	}
};

export default store;
