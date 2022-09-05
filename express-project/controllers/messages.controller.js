function getMessages(req, res) {
	res.send("<h1>Helloo Willian !!!</h1>")
}

function postMessages(req, res) {
	console.log("Updating Messages...")
}

module.exports = {
	getMessages,
	postMessages
}