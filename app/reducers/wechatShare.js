import {Map, fromJS} from 'immutable'
import {TUSO_INFO_RECEIVED} from '../actions/wechatShare'

const initialState = fromJS({
    "wechatShare": {

    },
    "tuso":{

    }
}
)

export default (state = initialState, action) => {
    switch (action.type) {
    	case TUSO_INFO_RECEIVED:
        console.log(action.payload);
    		return fromJS(action.payload)
      default:
        console.log("没有数据");
        return state
    }
}
