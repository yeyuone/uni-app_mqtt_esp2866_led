import {
	ONE_SAY,
	SET_CLIENT
	} from './mutation-type.js'
import state from './state.js';
import mqtt from '../utils/mqtt.min.js';
export default {
		publish({commit},msg) {
			if (!state.client || !state.client.connected) {
				this.dispatch('showToast','客户端未连接')
				return;
			}
			if (msg.sendMassage != '') {
				state.client.publish(msg.sendOnTopic,msg.sendMassage, error => {
					console.log(error ||'消息发布成功: '+msg.sendOnTopic+' '+msg.sendMassage)
				});
			} else {
					console.log('发布消息为空');
			}
		
		},
		
	showToast({commit},title) {
		uni.showToast({
			title:title,
			icon: null,
		});
		setTimeout(function() {
			uni.hideToast();
		}, 1000);
	},
get_one_say({commit}){
		uni.request({
			url:'https://api.muxiaoguo.cn/api/yiyan',
			success(res) {
				commit(ONE_SAY,{info:res.data.data.constant,by:res.data.data.source})
			}
		})
	},

	  
}
