import "./Cards.css";
import CardItem from "./CardItem"
function Cards(props) {
	let data = props.items.length > 0 ? (
		<>
			<h2>Cards</h2>
			<div className="row">
				{props.items.map(item =>
					<CardItem key={item.id} items={item} />)}

			</div>
		</>
	) : <h3>Loading Cards...</h3>
	return (
		data
	);
}

export default Cards;
