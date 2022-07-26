export default function Banner(props) {
	const banner = props.isDeleteBanner
		? null :
		(
			<div className="jumbotron my-4">
				<h1 className="display-3">Welcome!</h1>
				<p className="lead">
					Rick and Morty is an American adult animated science fiction
					sitcom created by Justin Roiland and Dan Harmon for Cartoon
					Network's late-night programming block Adult Swim.
				</p>
				<button onClick={() => props.closeAdBanner()} href="#" className="btn btn-primary btn-lg">
					Click to hide
				</button>
			</div>
		)
	return (
		banner
	)
}