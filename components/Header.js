export function Header() {
	console.log("Header component loaded.")
	const nav = document.createElement('nav')
	nav.innerHTML = `
		<ul>
			<li>Other Projects</li>
			<li>Github</li>
			<li>About</li>
		</ul>
	`
	return nav
}