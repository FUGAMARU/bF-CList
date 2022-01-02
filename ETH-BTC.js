var BashTitle = require("node-bash-title");
BashTitle("bF-CList ETH-BTC");
var Colors = require("colors");
var PubNub = require("pubnub");
var streaming = new PubNub({
    subscribeKey: "sub-c-52a9ab50-291b-11e5-baaa-0619f8945a4f"});
streaming.subscribe({
    channels: ["lightning_executions_ETH_BTC"]
});
streaming.addListener({
    message: function (message) {
        var side = (message.message[0].side);
        if(side == "BUY"){
        	console.log(side.green.bold.underline + "\u0020\u0020\u0020" + message.message[0].price + "BTC" + "\u0020\u0020" + message.message[0].size + "ETH");
        }else{
        	console.log(side.red.bold.underline + "\u0020\u0020" + message.message[0].price + "BTC" + "\u0020\u0020" + message.message[0].size + "ETH");
        }
    }
});