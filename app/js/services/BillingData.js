videoApp.factory('billingData',  function() {
		return {
				 bills : [
        					{
        						billing : 15,
        						userID  : 'robinr.rao@gmail.com',
        						month   : 1438367400000,
        						payment : 'payment details',
        						reminder: 'disable'
        					},   					
                                                {
                                                        billing : 20,
                                                        userID  : 'sureshk5@gmail.com',
                                                        month   : 1438367400000,
                                                        payment : 'payment details',
                                                        reminder: 'disable'
                                                },
                                                {
                                                        billing : 15,
                                                        userID  : 'robinr.rao@gmail.com',
                                                        month   : 1441065600000,
                                                        payment : 'payment details',
                                                        reminder: 'disable' 
                                                },
                                                {
                                                        billing : 20,
                                                        userID  : 'sureshk5@gmail.com',
                                                        month   : 1441065600000,
                                                        payment : 'payment details',
                                                        reminder: 'disable' 
                                                }	
        			   	]
        		}
});