import './LocationTable.css'


export default function SearchByName(props) {
	const form = document.querySelector('form.input-group');

	let letSearch = (e) => {
		e.preventDefault();
		const planet = document.querySelector('input#planet').value;
		props.getLocationByName(planet, e.target.innerHTML.toLowerCase());
		form.reset();
	}
	return (
		<>
			<form className="input-group mb-2 needs-validation">
				<input
					id='planet'
					type="text"
					className="form-control"
					placeholder="Search"
					required
				></input>
				<button
					onClick={letSearch}
					className="btn btn-primary"
					type="submit">Search</button>
				<button
					onClick={letSearch}
					className="btn btn-primary"
					type="submit">Clear</button>
			</form>

		</>
	)
}