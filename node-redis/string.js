/** @format */

const client = require("./client");

async function init() {
	const result = await client.get("user:3");
	console.log("Result->", result);
}

async function setValue(value) {
	await client.set("message:3", value);
	console.log("Value set successfully");
	const result = await client.get("message:3");
	console.log("Result->", result);
}

async function expirevalue(params) {
	const value = params;
	await client.set("message:3", value);
	const result = await client.get("message:3");
	console.log("Result->", result);
	await client.expire("message:3", 3);

	console.log("after 3 sec");

	setTimeout(async () => {
		const result = await client.get("message:3");
		if (result) console.log("Result->", result);
		else console.log("message expired");
	}, 3001);
	console.log("fucntion ends");

	// now print every 1 second
	// setInterval(async () => {
	// 	const result = await client.get("message:3");
	// 	if (result) console.log("Result->", result);
	// 	else console.log("message expired");
	// }, 1000);
}

init();
setValue("Hello World");
expirevalue("hey there, its cool to be inside redis, its red");
