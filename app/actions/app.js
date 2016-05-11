import config from '../config'
import axios from 'axios'

export const APP_INFO = 'APP_INFO'

export function appInfo() {
    return (dispatch) => {
        axios.get(`${config.apiServerUrl}/app.json`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: APP_INFO,
                        payload: response.data
                    })
                } else {
                    throw Error(`${APP_INFO}`)
                }
            }).catch((response) => {
                throw Error(`${APP_INFO}`)
            })
    }
}
