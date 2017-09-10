var x,y,z;
x = 5;
y = 6;
z = x+y;




function myFunction(){
	document.getElementById("demo").innerHTML = typeof z;
}

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};