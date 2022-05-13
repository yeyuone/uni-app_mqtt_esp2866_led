import {	
	SET_CLIENT,
	SET_RECIVETOPIC,
	SET_RECEIVEMESSAGE
	} from './mutation-type.js'
export default {
	SET_CLIENT(state, client){
		state.client = client
		console.log(state.client)
	},
	SET_RECIVETOPIC(state, reciveTopic){
		state.reciveTopic = reciveTopic
	},
	SET_RECEIVEMESSAGE(state, client){
		state.receiveMessage = receiveMessage
	}
}
