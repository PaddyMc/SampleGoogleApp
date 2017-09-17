function makeAjaxCall(){
	$.ajax({
        'url' : 'https://duckduckgo.com',
        'type' : 'GET',
        'crossDomain' : true,
        'success' : function(data) {              
            console.log('Data: '+data);
        },
        'error' : function(request,error)
        {
            console.log("Request: "+JSON.stringify(request));
        }
	});
}

function clickHandler(e) {
  setTimeout(makeAjaxCall, 1000);
}

function main(){
	console.log("hell");
	makeAjaxCall();
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  main();	
});