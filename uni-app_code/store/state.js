export default {
	
	
	//使用缓存持久化
	historyLists: uni.getStorageSync("_history") || [],
	client: null,
	receiveMessage:'',
	reciveTopic:''
	}
