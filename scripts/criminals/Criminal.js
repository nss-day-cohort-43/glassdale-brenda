export const CriminalHTML = (criminalObj) => {
	return `
		<section id="officer-${criminalObj.id}" class="card-criminal">
			<p><strong>Name:</strong> ${criminalObj.name}</p>
			<p>Age: ${criminalObj.age}</p>
			<p>Crime: ${criminalObj.conviction}</p>
			<p>Dates:</p>
		</section>
	`
} 