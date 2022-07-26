import React from "react";
import './LocationTable.css';
import DataService from "../../services/dataService"
import SearchByName from "./SearcByName";
import ErrorMessage from '../error/ErrorMessage';
import { Link } from "react-router-dom";

const btnSearch = 'search';
const btnClear = 'clear';

export default class LocationTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locationData: [],
			urlByName: 'https://rickandmortyapi.com/api/location/?name=',
			name: '?name=',
			isClickFound: false,
			isErrorSearch: false
		};
		this.location = new DataService();
		this.componentDidMount = () => {
			this.location.getResource(this.state.urlByName)
				.then((data) => {
					this.setState({ locationData: data.results })
				})
		}
		this.getLocationByName = (planet, btnName) => {
			if ((btnName === btnSearch && planet) || (btnName === btnClear && this.state.isClickFound)) {
				this.location.getResource(this.state.urlByName + planet)
					.then((data) => {
						this.setState({
							name: this.state.name + planet,
							locationData: data.results || [],
							isClickFound: btnName === btnSearch,
							isErrorSearch: false
						})
					}).catch(this.onError)
			} else {
				this.setState({ isErrorSearch: false })
			}
		}
		this.onError = (error) => {
			this.setState({ isErrorSearch: true });
		};
	};
	render() {
		return (
			<>
				<h2>Locations</h2>
				<SearchByName
					isClickFound={this.state.isClickFound}
					getLocationByName={this.getLocationByName}
					locationData={this.state.locationData}
				/>
				{this.state.isClickFound &&
					<p> Search found: {this.state.locationData.length}</p>
				}
				{this.state.isErrorSearch ? <ErrorMessage /> :
					<table className="table">
						<thead className="thead-dark">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Type</th>
								<th scope="col">Dimension</th>
								<th scope='col'>More info</th>
							</tr>
						</thead>
						<tbody>
							{this.state.locationData.length > 0 &&
								this.state.locationData.map((value, i) => {
									return (
										<tr key={i}>
											<th scope='row'>{value.id}</th>
											<td>{value.name}</td>
											<td>{value.type}</td>
											<td>{value.dimension}</td>
											<td><Link to={'/locations/' + value.id} className="btn btn-primary"> More info</Link></td>
										</tr>)
								})
							}
						</tbody>
					</table>}
			</>
		)
	}
}