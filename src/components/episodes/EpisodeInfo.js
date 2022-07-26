import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataService from "../../services/dataService";
import './Episode.css'

export default function EpisodeInfo(props) {
	const [episodeData, updateEpisodeData] = useState({});
	const [characters, updateCharacters] = useState([]);
	const [totalEpisodes, updateTotalEpisode] = useState(null);
	const { id } = props;
	const classNameOfPrevBtn = +id === 1
		? 'btn btn-primary disabled'
		: 'btn btn-primary';
	const classNameOfNextvBtn = +id === totalEpisodes
		? 'btn btn-primary disabled'
		: 'btn btn-primary';
	const pathToEpisode = "/episode/";
	const dataServise = new DataService();

	useEffect(() => {
		dataServise.getEpisodeById('').then((data) => {
			console.log('oleg');
			updateTotalEpisode(data.info.count);
		});
	}, []);

	useEffect(() => {
		dataServise.getEpisodeById(id)
			.then((data) => {
				updateEpisodeData(data);
				updateCharacters(data.characters);
			}).catch((error) => console.log(error.message));
	}, [id]);
	return (
		<div>
			<h3>Episode detailts</h3>
			<div className="list-group lead">
				<div className="list-group-item">
					<div className="d-flex justify-content-between">
						<h5 className="mb-1">{episodeData.episode}</h5>
						<small>{episodeData.air_date}</small>
					</div>
					<div className="mb-1">
						<div className="d-inline"><span className="text-gray">Name:</span></div>
						<p className="d-inline p-2">{episodeData.name}</p>
					</div>
					<div className="mb-1">
						<div className="d-inline"><span className="text-gray">Сharacters:</span></div>
						<p className="d-inline p-2">{characters.length}</p>
					</div>
				</div>

			</div>
			<div className="modal-footer">
				<Link className="btn btn-primary" to="/episodes">
					Go back
				</Link>
				<Link /*onClick={prevEpisode}*/ to={+id > 1 ? pathToEpisode.concat(+id - 1) : pathToEpisode + "1"}
					className={classNameOfPrevBtn}>Previous</Link>

				<Link /*onClick={nextEpisode}*/ to={+id < totalEpisodes ? pathToEpisode.concat(+id + 1) : pathToEpisode + totalEpisodes}
					className={classNameOfNextvBtn} data-dismiss="modal">Next </Link>
			</div >

		</div>
	)
}