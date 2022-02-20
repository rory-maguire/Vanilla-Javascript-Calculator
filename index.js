// get buttons div's children //

const buttons = document.querySelector(".buttons").children;
console.log(buttons);

//get display //

const display = document.querySelector(".display");

//make it iterable by using Array.from method

const buttonsArray = Array.from(buttons);
//add event listener to console.log value of each button onClick

buttonsArray.map((button) => {
	button.addEventListener("click", (e) => {
		console.log(e.target.innerText);
		switch (e.target.innerText) {
			case "C":
				display.innerText = "";
				break;
			case "=":
				display.innerText = eval(display.innerText);
				break;
			default:
				display.innerText += e.target.innerText;
		}
	});
});
