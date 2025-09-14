// Grab all tab buttons and contents
const tabButtons = document.querySelectorAll('.tab-btn');
console.log(tabButtons);
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		// Remove active classes
		tabButtons.forEach((b) => {
			b.classList.remove('text-black', 'after:bg-black', 'active');
			b.classList.add('text-gray-400');
		});
		tabContents.forEach((c) => c.classList.add('hidden'));

		// Add active class to current
		btn.classList.remove('text-gray-400');
		btn.classList.add('text-black', 'after:bg-black', 'active');

		// Show related content
		const target = btn.dataset.tab;
		document.getElementById(target).classList.remove('hidden');
	});
});
