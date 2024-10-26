/** @format */

const client = require("./client");

async function init() {
	const result = await client
		.lpush("messages", 1)
		.client.lpush("messages", 2)
		.client.lpush("messages", 3)
		.client.lpush("messages", 4)
		.client.lpush("messages", 5);

	console.log("Result->", result);
}

init();
