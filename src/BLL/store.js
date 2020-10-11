import { dataReducer } from './dataReducer';

const store = {
	_state: {
		dataPage: {
			fieldData: {
				Apples: {
					color: 'Green',
					value: 42
				},
				Banana: {
					color: 'pink',
					value: 10
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
