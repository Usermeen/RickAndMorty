import './Navigation.css';
import React from 'react';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			click: false,
			pages: null,
			pagination: [1, 2, 3]
		};
		const { pages, click } = this.state;
		this.getPage = (e) => {
			e.preventDefault();
			this.props.selectPage(e.target.innerHTML);
			this.setState({ click: !click })
		}
		this.componentDidUpdate = (prevProps, prevState) => {
			if (prevProps !== this.props) {
				this.setState((state, props) => {
					return {
						pagination: state.pagination.map((value, i) => (
							prevProps.target >= 1
								&& prevProps.target <= 2
								&& this.props.target !== this.state.pagination.length
								? value
								: this.props.target + i - 1
						)),
						pages: props.pages.totalPages
					}

				})
				if (this.props.target === pages) {
					this.setState((state) => {
						return {
							pagination: state.pagination.map(value => (
								this.props.target >= this.props.target - this.state.pagination.length
									&& this.props.target < state.pages
									? value
									: value - 1
							))
						}
					})
				}
			}
		}
	}
	render() {
		const { pagination, pages } = this.state
		const {target}=this.props
		return (
			<nav className='nav-container ' aria-label="Page navigation example">
				<ul className="pagination justify-content-center " >
					<li className={
						target === 1
							? 'page-item disabled'
							: 'page-item'}>
						<span
							onClick={this.getPage}
							className="page-link">
							Previous
						</span>
					</li>

					{pagination.map((value, index) =>
						<li onClick={this.getPage}
							className=
							{value === target
								? 'page-item page-link active-page'
								: 'page-item page-link'}
							key={index}>
							{value}
						</li>
					)}

					<li className={target === pages
						? 'page-item disabled'
						: 'page-item'}>
						<span
							onClick={this.getPage}
							className="page-link">
							Next
						</span>
					</li>

				</ul>
				<div className='nav-pages'>
					{target}
					<span> of {pages}</span>

				</div>
			</nav>
		)
	}
}