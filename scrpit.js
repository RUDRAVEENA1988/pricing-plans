const queryForm = document.querySelector("#query-form");
const formStatus = document.querySelector("#form-status");

queryForm.addEventListener("submit", (event) => {
	event.preventDefault();
	formStatus.textContent = "Thanks. Our support team will get back to you shortly.";
	queryForm.reset();
});
