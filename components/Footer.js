export function Footer() {
	const year = new Date().getFullYear();
	const footer = document.createElement('footer');
	footer.innerHTML = `
		<footer>
			<small>&copy; ${year} knznsmn. All rights reserved.</small>
		</footer>
	`;
	
	return footer;
}