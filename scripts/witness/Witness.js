export const Witness = (witnessObj) => {

	return `
		<section id="witness--${witnessObj.id}" class="card-criminal">
			<p><strong>Name:</strong> ${witnessObj.name}</p>
			<p>Statement: ${witnessObj.statements}</p>
		</section>
		`
}