videoApp.factory('playlistData', function() {
		return {
			      playlist : {
						 		lists :
									[
										{
											name : 'Robin List',
											duration : 195,
											id : 1,
											movielist : 
														[
															{
																mediaid : 0
															},
															{
																mediaid : 1
															}
														]
										},
										{
											name : 'May List',
											duration : 120,
											id : 2,
											movielist :
														[
															{
																mediaid : 2
															}
														]
										},
										{
											name : 'Ted List',
											duration : 255,
											id : 3,
											movielist : 
														[
															{
																mediaid : 2
															},
															{
																mediaid : 3
															}
														]
										}
									]
								}
				}
});