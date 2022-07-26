/*..........Import Styles......*/
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
/*..........Import React......*/
import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
/*..........Import Components......*/
import Cards from "../cards/Cards.js";
import DataService from "../../services/dataService"
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Banner from '../banner/Banner';
import LocationTable from "../locations/LocationTable";
import EpisodeTable from "../episodes/EpisodeTable.js";
import EpisodeInfo from "../episodes/EpisodeInfo.js";
import LocationInfo from "../locations/LocationInfo.js";

const CHARACTERS_URL = "https://rickandmortyapi.com/api/character";
const BUTTON_NAME_NEXT = 'next';
const BUTTON_NAME_PREVIOUS = 'previous';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: null,
			items: [],
			click: false,
			isDeleteBanner: false,
			page: '?page=1',
			target: 1,
			prevOrNext: null,
			totalPages: null,
			episodeData: null
		};
		const { isDeleteBanner, page, totalPages } = this.state;

		this.dataService = new DataService();
		this.componentDidMount = () => {
			this.dataService.getCharacters(CHARACTERS_URL + page)
				.then(data => {
					this.setState({
						items: data.results,
						info: data.info,
						totalPages: data.info.pages
					})
				})
		}

		this.componentDidUpdate = (prevProps, prevState) => {
			if (prevState.click !== this.state.click) {
				if (this.state.prevOrNext === BUTTON_NAME_NEXT
					&& this.state.info.next !== null) {
					this.dataService.getCharacters(this.state.info.next)
						.then(data => {
							this.setState({ items: data.results, info: data.info })
						})
				} else
					if (this.state.prevOrNext === BUTTON_NAME_PREVIOUS
						&& this.state.info.prev !== null) {
						this.dataService.getCharacters(this.state.info.prev)
							.then(data => {
								this.setState({
									items: data.results,
									info: data.info
								})
							})
					}
			}
			if (prevState.page !== this.state.page) {
				this.dataService.getCharacters(CHARACTERS_URL + this.state.page)
					.then(data => {
						this.setState({
							items: data.results,
							info: data.info
						})
					})
			}
		};

		this.selectPage = (btnName) => {
			if (btnName.toLowerCase() === BUTTON_NAME_NEXT) {
				this.setState({
					click: !this.state.click,
					target: this.state.target === totalPages
						? totalPages
						: this.state.target + 1,
					prevOrNext: btnName.toLowerCase()
				})
			} else
				if (btnName.toLowerCase() === BUTTON_NAME_PREVIOUS) {
					this.setState({
						click: !this.state.click,
						target: this.state.target > 1
							? +this.state.target - 1
							: 1,
						prevOrNext: btnName.toLowerCase()
					})
				}
				else {
					this.setState({
						target: +btnName.toLowerCase(),
						page: '?page=' + btnName,
						click: !this.state.click
					})
				}
		}

		this.closeAdBanner = () => {
			this.setState({ isDeleteBanner: !isDeleteBanner })
		};

	}
	render() {
		const { items, isDeleteBanner, target } = this.state;
		return (
			<BrowserRouter>
				<div className="main">
					<Header
						isDeleteBanner={isDeleteBanner}
						closeAdBanner={this.closeAdBanner} />
					<div className="container">

						<Route
							exact
							path='/'
							render={() => {
								return (
									<Banner
										isDeleteBanner={isDeleteBanner}
										closeAdBanner={this.closeAdBanner} />
								)
							}}
						>

						</Route>
						<Route exact path="/locations" component={LocationTable} />
						<Route
							path='/locations/:id'
							render={(props) => {
								const id = props.match.params.id;
								return <LocationInfo id={id} />
							}}
						/>
						<Route
							path='/'
							exact
							render={() => {
								return (<Navigation
									selectPage={this.selectPage}
									target={target}
									pages={this.state}
								/>)
							}}
						>
						</Route>
						<Route
							exact
							path='/'
							component={(props) => <Cards items={items} />} />

						<Route
							path='/episodes'
							render={() => {
								return (
									<EpisodeTable
									getDataOfEpisodes={this.getDataOfEpisodes}
									/>
								)
							}}
						>
						</Route>
						<Route
							path='/episode/:id'
							render={(props) => {
								const id = props.match.params.id;
								return <EpisodeInfo id={id} />
							}}
						/>

					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;