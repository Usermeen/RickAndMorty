import React from "react";
import { Link } from "react-router-dom";
import DataService from "../../services/dataService"

const EPISODE_URL = 'https://rickandmortyapi.com/api/episode/';
const sortByName = 'name';
const sortByDate = 'date';
const sortByEpisode = 'episode';
const sortById = '#'

export default class EpisodeTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			episodesData: [],
			isClickToSort: true,
			totalPages: null
		}
		this.getEpisodes = new DataService();
		this.componentDidMount = () => {
			this.getEpisodes.getResource(EPISODE_URL)
				.then((data) => {
					this.setState({
						episodesData: data.results,
						totalPages: data.info.pages
					})
				})
		}
		this.sortByField = function (field) {
			this.setState(() => {
				return {
					episode: this.state.episodesData.sort((a, b) =>
						this.state.isClickToSort
							? (a[field] < b[field] ? 1 : -1)
							: (a[field] > b[field]) ? 1 : -1)
				}
			})
		}
		this.sort = (e) => {
			this.setState({ isClickToSort: !this.state.isClickToSort })
			switch (e.target.innerHTML.toLowerCase()) {
				case sortByName:
					this.sortByField('name');
					break;
				case sortByDate:
					this.sortByField('air_date');
					break;
				case sortByEpisode:
					this.sortByField('episode');
					break;
				case sortById:
					this.sortByField('id');
					break;
				default: break;
			}
		}
	}

	render() {
		return (
			<>
				<h2>Episodes</h2>
				<table className="table">
					<thead className="thead-dark">
						<tr onClick={this.sort}>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Date</th>
							<th scope="col">Episode</th>
							<th scope='col'>More info</th>
						</tr>
					</thead>
					<tbody>
						{this.state.episodesData &&
							this.state.episodesData.map(({ id, name, air_date, episode }, i) => {
								return (
									<tr key={i}>
										<th scope='row'>{id}</th>
										<td>{name}</td>
										<td>{air_date}</td>
										<td>{episode}</td>
										<td><Link
											to={'/episode/' + id}
											className="btn btn-primary">
											More info
										</Link>
										</td>
									</tr>)
							})
						}
					</tbody>
				</table>
			</>
		)
	}
}