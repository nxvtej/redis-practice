/** @format */

const { Redis } = require("ioredis");
const client = new Redis();

// client.on("connect", () => {
// 	console.log("Client connected to Redis...");
// });

module.exports = client;
