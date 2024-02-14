(async() => {
	const database = require("./db");
	const Post = require("./post");

	// Connect
	try {
		const result = await database.sync();
		console.log(result);
	} catch (error) {
		console.log(error);
	}

	// Create
	const create = await Post.create({
		title: "Aplok Guns Addon | v1.0.8",
		cover: "https://modbay.org/uploads/posts/2023-12/aplok-guns-v1-0-7-cover.png",
		description: "Survival-friendly military-themed add-on with vanilla styled and beautiful guns, satisfying effects, various animations, explosives, custom armor and blocks, and various details."
	})
	console.log(create);

	// Read All
	const posts = await Post.findAll();
	console.log(posts);

	// Read By Id
	const posts = await Post.findByPk(1);
	console.log(posts);

	// Update
	const post = await Post.findByPk(1);
	console.log(post);
	post.title = "Aplok Guns 1.0.9";

	const save = await post.save();
	console.log(save);

	//Delete
	// Like this
	Post.destroy({ where: { id: 1 }});
	// Or like this
	const post = await Post.findByPk(1);
	post.destroy();
})();
