$(document).ready(function() {
	$(".sidePanel").click(function() {
		// alert($(this).outerWidth());
		if ($(this).width() == 25) {
			if ($(document).width() < 720) {
				// alert($(this).children(":nth-child(1)").css("display"));
				$(this).width(275).delay(200);
				// $(this).children(":nth-child(1)").css("visibility","visible");
				$(this).children(":nth-child(1)").fadeIn();
				$(this).next().css("display", "none");
			} else {
				$(this).width(275).delay(200);
				// $(this).children(":nth-child(1)").css("visibility","visible");
				$(this).children(":nth-child(1)").fadeIn();
				$(this).next().css("margin-left", "300px");
			}
			$(this).css("background", "none");
		}
	});

	$(".sidePanelMin").click(function() {

		if ($(document).width() < 720) {
			// $(this).parent().parent().css("visibility","hidden");
			$(this).parent().parent().hide();

			$(this).parent().parent().parent().width(25);
			$(this).parent().parent().parent().next().css("display", "block");
			$(this).parent().parent().parent().css("background", "rgba(50,50,50,0.4)");
		} else {
			// $(this).parent().parent().css("visibility","hidden");

			$(this).parent().parent().hide();
			$(this).parent().parent().parent().width(25);
			$(this).parent().parent().parent().css("background", "rgba(50,50,50,0.4)");
			$(this).parent().parent().parent().next().css("margin-left", "50px");
		}
	});

	/*
		
		8 888888888o.   8 8888888888     d888888o.    8 8888  8888888888',8888' 8 8888888888
		8 8888    `88.  8 8888         .`8888:' `88.  8 8888         ,8',8888'  8 8888
		8 8888     `88  8 8888         8.`8888.   Y8  8 8888        ,8',8888'   8 8888
		8 8888     ,88  8 8888         `8.`8888.      8 8888       ,8',8888'    8 8888
		8 8888.   ,88'  8 888888888888  `8.`8888.     8 8888      ,8',8888'     8 888888888888
		8 888888888P'   8 8888           `8.`8888.    8 8888     ,8',8888'      8 8888
		8 8888`8b       8 8888            `8.`8888.   8 8888    ,8',8888'       8 8888
		8 8888 `8b.     8 8888        8b   `8.`8888.  8 8888   ,8',8888'        8 8888
		8 8888   `8b.   8 8888        `8b.  ;8.`8888  8 8888  ,8',8888'         8 8888
		8 8888     `88. 8 888888888888 `Y8888P ,88P'  8 8888 ,8',8888888888888  8 888888888888
	*/

	// alert(window.location.pathname.match(/([0-9a-zA-Z])+\.([a-zA-Z])+$/)[0]);

	// $(".sidePanel>ul>li>a").each(function() {
		
	// 	activateLink($(this));
	// });
	// 	activateLink($(".navHead>a"));

	// $(".navBody>ul>li>a").each(function() {
	// 	activateLink($(this));
	// 	// alert($(this));
	// });


	// function activateLink(x){
	// 	if(window.location.pathname == window.location.pathname.match(/[/]([A-Za-z])+[/]/)[0])
	// 	{
	// 		if($(x).attr('href')=="index.html")
	// 		// alert(window.location.pathname);
	// 		$(x).addClass("linkActive");
	// 	}
	// else
	// 	if ($(x).attr('href') == window.location.pathname.match(/([0-9a-zA-Z])+\.([a-zA-Z])+$/)[0])
	// 	{	
	// 		$(x).addClass("linkActive");
	// 		// alert(window.location.pathname.match(/([0-9a-zA-Z])+\.([a-zA-Z])+$/)[0]);
	// 	}
	// }



/*
	
	b.             8          .8. `8.`888b           ,8' 8 888888888o          .8.          8 888888888o.
	888o.          8         .888. `8.`888b         ,8'  8 8888    `88.       .888.         8 8888    `88.
	Y88888o.       8        :88888. `8.`888b       ,8'   8 8888     `88      :88888.        8 8888     `88
	.`Y888888o.    8       . `88888. `8.`888b     ,8'    8 8888     ,88     . `88888.       8 8888     ,88
	8o. `Y888888o. 8      .8. `88888. `8.`888b   ,8'     8 8888.   ,88'    .8. `88888.      8 8888.   ,88'
	8`Y8o. `Y88888o8     .8`8. `88888. `8.`888b ,8'      8 8888888888     .8`8. `88888.     8 888888888P'
	8   `Y8o. `Y8888    .8' `8. `88888. `8.`888b8'       8 8888    `88.  .8' `8. `88888.    8 8888`8b
	8      `Y8o. `Y8   .8'   `8. `88888. `8.`888'        8 8888      88 .8'   `8. `88888.   8 8888 `8b.
	8         `Y8o.`  .888888888. `88888. `8.`8'         8 8888    ,88'.888888888. `88888.  8 8888   `8b.
	8            `Yo .8'       `8. `88888. `8.`          8 888888888P .8'       `8. `88888. 8 8888     `88.
*/

	// $(".dropHead>a").click(function(){
	// 	$(this).parent().children(":nth-child(2)").toggle();
	// });
// window.onclick = function(event){
// 	if($(event.target).attr("class")==$(".modalBG").attr("class"))
// 		$(".modalBG").fadeOut();
// }


	/*
		          .         .
		         ,8.       ,8.           ,o888888o.     8 888888888o.            .8.          8 8888
		        ,888.     ,888.       . 8888     `88.   8 8888    `^888.        .888.         8 8888
		       .`8888.   .`8888.     ,8 8888       `8b  8 8888        `88.     :88888.        8 8888
		      ,8.`8888. ,8.`8888.    88 8888        `8b 8 8888         `88    . `88888.       8 8888
		     ,8'8.`8888,8^8.`8888.   88 8888         88 8 8888          88   .8. `88888.      8 8888
		    ,8' `8.`8888' `8.`8888.  88 8888         88 8 8888          88  .8`8. `88888.     8 8888
		   ,8'   `8.`88'   `8.`8888. 88 8888        ,8P 8 8888         ,88 .8' `8. `88888.    8 8888
		  ,8'     `8.`'     `8.`8888.`8 8888       ,8P  8 8888        ,88'.8'   `8. `88888.   8 8888
		 ,8'       `8        `8.`8888.` 8888     ,88'   8 8888    ,o88P' .888888888. `88888.  8 8888
		,8'         `         `8.`8888.  `8888888P'     8 888888888P'   .8'       `8. `88888. 8 888888888888
	*/

	$(".openModal").click(function() {
		$(".modalBG").fadeIn();
	});
	$("button.closeModal").click(function() {
		// $(".modalBG").fadeOut();
		alert("lol");
	});
	// $(".modalBG").click(function() {
	// 	$(".modalBG").fadeOut();
	// 	// $(this).fadeOut();
	// });
	$(".modalBG").click(function() {
		$(this).fadeOut();
	}).children().click(function(e) { //stops children from recieving the click
		return false;
	});
});

function closeModal(){
		$(".modalBG").fadeOut();
}
	// $(".closeModal").click(function() {
	// 	$(".modal").fadeOut();
	// 	$(".modalBG").fadeOut();
	// });
function openModal(){
	// alert("lol");
		$(".modalBG").fadeIn();
		$(".modal").fadeIn();
	
}