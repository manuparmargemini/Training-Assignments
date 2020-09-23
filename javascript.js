function createTable() {
	setTimeout( () => {
	var container = document.getElementById("container");
	var table = document.createElement("table");
	container.appendChild(table);
	console.log(container);
	addRow(table, true, ["Name", "Age", "DOB", "Email", "Company"]);
	addRow(table, false, ["Akash Singh", "24", "12/07/1996", "akash.singh@fourkites.com", "Fourkites"]);
	addRow(table, false, ["Mohit Sandhu", "22", "13/1/1998", "mohit.sandhu@tcs.com", "TCS"]);
	addRow(table, false, ["Hitesh Sarangal", "23", "12/08/1997", "hitesh.sarangal@geminisolutions.in", "Gemini Solutions"]);
	addRow(table, false, ["Dinesh Agrawal", "25", "05/06/1995", "dinesh.agrawal@hitachi.com", "Hitachi"]);
	});
}

function addRow(table, header, columnValues) {
	var headerRow = document.createElement("tr");
	var column = header ? "th": "td";
	
	columnValues.forEach(value => {
		const th = document.createElement(column);
		const textNode = document.createTextNode(value);
		th.appendChild(textNode);
		th.setAttribute("style", "border: 1px solid #eee; text-align: center; padding: 5px;"); // dynamic CSS	
		headerRow.appendChild(th);
	});
	
	table.appendChild(headerRow);
}

(()=> {    	// self-invoked function
	table = createTable();
})();