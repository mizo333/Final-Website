document.write ("Welcome To The Third Webpage: Number Calculator");

function changeText() {
	document.getElementById("para").innerHTML=Date();
}

var time = new Date().getHours(); 
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.write("<br />" + greeting);


document.write("<br />");

var todayDate = new Date();

var date = todayDate.getDate();


document.write(month + date + year);
document.write("<br />" + month + "/" + date + "/" + year);



function save(){
	word1 = document.getElementById("things").value;
	x = word1;
}

function saves(){
	word2 = document.getElementById("stuff").value;
	y = word2;
}


function Add(){
	total=x+y;
	document.write("You're First number " + word1 + " added to you're Second number " + word2 + " <br /> Gives us the value of (" + total + ")");
	window.alert("You're Answer is (" + total + ")");
	}
	
function Subtract(){
	totals = x - y;
	document.write("You're Second number (" + word2 + ") subtracted from you're First number (" + word1 + ") <br /> Gives us the value of (" + totals + ")");
	window.alert("You're Answer is (" + totals + ")");
	}
	
function Multiply(){
	totally = x * y;
	document.write("You're First number (" + word1 + ") multiplied by your Second number (" + word2 + ") <br /> Gives us the value of (" + totally + ")");
	window.alert("You're Answer is (" + totally + ")");
	}
	
function Divide(){
	totality = x / y;
	document.write("You're First number (" + word1 + ") Divided by you're Second number (" + word2 + ") <br /> Gives us the value of (" + totality + ")");
	window.alert("You're Answer is (" + totality + ")");
	}