export const CriminalHTML = (criminalObj) => {
	return `
		<section id="officer-${criminalObj.id}" class="card-criminal">
		<hr>
			<p><strong>Name:</strong>Name: ${criminalObj.name}</p>
			<p>Age: ${criminalObj.age}</p>
			<p>Crime: ${criminalObj.conviction}</p>
			<p>Dates:</p>
		</section>
	`
}