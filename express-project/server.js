const express = require("express")

const app = express()

const PORT = 3000

const friends = [
	{
		id: 0,
		name: "Albert Einstein"
	},
	{
		id: 1,
		name: "Willian Pessoa"
	}
]

app.use((req, res, next) => {
	const start = Date.now()
	next();
	const delta = Date.now() - start
	console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.get("/friends", (req, res) => {
	res.json(friends)
})

app.get("/friends/:friendsId", (req, res) => {
	const friendId = Number(req.params.friendsId);
	const friend = friends[friendId];

	if (friend) {
		res.json(friend)
	} else {
		res.status(404).json({
			error: "Friend doesn't found"
		})
	}
})

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}...`)
})

