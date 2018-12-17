// Register `phoneList` component, along with its associated controller and template
angular.
module('App12ships').
component('indexMainChat', {
    templateUrl: 'index-main-chat.html',
    controller: function() {
		g_G.component.indexMainChat = ctrl;
        var ctrl = this;
        ctrl.g_G = g_G;
        ctrl.chatList = [{
        		uid : 'roy',
                nic: 'Roy Cho',
                time: '23 Jan 2:00 pm',
                image: '../dist/img/roy.png',
                msg: "I'm free today. It's unbelievable!",
            },
            {
            	uid : 'Sarah',
                nic: 'Sarah Bullock',
                time: '23 Jan 2:05 pm',
                image: '../dist/img/user3-128x128.jpg',
                msg: "You better believe it!",
            }
        ];
    }
});