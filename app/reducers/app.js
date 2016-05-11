import {Map, fromJS} from 'immutable'
import {APP_INFO} from '../actions/app'

const initialState = fromJS({
    "mainNav": {

    }
}
)

export default (state = initialState, action) => {
    switch (action.type) {
    	case APP_INFO:
    		return fromJS(action.payload)
      default:
        return state
    }
}
