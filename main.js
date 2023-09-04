const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function validate(){
    var f1 = document.querySelector('form')
    const fu1 = 'muskaan1801'
    const pu1 = '12345678'
    var u1 = f1.uname.value;
    var p1 = f1.pwd.value;
    if (u1=='' || p1==''){
        alert("KINDLY FILL ALL THE DETAILS MENTIONED BELOW")
    }

    else if(u1 != fu1 || p1!=pu1){
        alert('Invalid User')
    }

    else{
        alert('Welcome muskaan1801')
        f1.action = 'index.html'
    }
    
}