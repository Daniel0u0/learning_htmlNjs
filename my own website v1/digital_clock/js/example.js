//set timer format, add 0 if time(1-9)
function addzero(num){
	if(num<10){
		return '0'+num;
	}
	else{
	return''+num;}
}

//get the current time
function get_time(){
	now=new Date();
	var h=now.getHours();
	var m=now.getMinutes();
	var s=now.getSeconds();
	var time=addzero(h)+':'+addzero(m)+':'+addzero(s);
	document.getElementById("time").innerHTML = time;
	//upper code means show time back to tag ids
}

setInterval(function(){get_time()},1000);
//set the refresh rate(1000,1 second) to function get_time