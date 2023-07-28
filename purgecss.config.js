module.exports = {
	content: ["index.html", "assets/maugallery.js", "assets/scripts.js"],
	css: ["assets/bootstrap/bootstrap.min.css"],
	output: "assets/bootstrap/",
	fontFace: true,
	keyframes: true,
	variables: true,
	safelist: [/^modal/, /^col-/, /^carousel/],
};
