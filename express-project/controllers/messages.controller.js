const path = require("path")

function getMessages(req, res) {
	res.render("messages", {
		title: "Message to my friend",
		friend: "Amelia Duckworth"
	})
	//res.sendFile(path.join(__dirname, "..", "public", "images", "wow.jpg"))
	//res.sendFile(path.join(__dirname, "..", "public", "index.html"))
	//res.send("<h1>Helloo Willian !!!</h1>")
}

function postMessages(req, res) {
	console.log("Updating Messages...")
}

module.exports = {
	getMessages,
	postMessages
}