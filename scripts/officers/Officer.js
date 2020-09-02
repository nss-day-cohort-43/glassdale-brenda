export const OfficerHTML = (officerObj) => {
	return `
		<section id="officer-${officerObj.id}" class="card-officer">
			<p><strong>Name:</strong> ${officerObj.name}</p>
		</section>
	`
}