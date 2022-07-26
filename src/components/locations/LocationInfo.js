import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataService from "../../services/dataService";

export default function LocationInfo(props) {
	const [locationData, setLocations] = useState({});
	const { name, type, dimension } = locationData;	

	let dataServise = new DataService();
	useEffect(() => {
		dataServise.getLocationById(props.id)
			.then((data) => {
				setLocations(data);
			}).catch((error) => console.log(error.message));
	});
	
	return (
		<div className="card">
			<div className="card-header">{name}</div>
			<div className="card-body">
				<h5 className="card-title">{type}</h5>
				<p className="card-text">Dimension is {dimension}</p>
				<Link className="btn btn-primary" to="/locations">
					Go back
				</Link>
			</div>
		</div>
	)
}