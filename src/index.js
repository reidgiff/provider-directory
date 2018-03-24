import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data.json';


class Directory extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			rows: data,
		}
	}
		
	handleSubmit(e) {
		e.preventDefault();
		
		const formData = {};
		for(const field in this.refs) {
			formData[field] = this.refs[field].value;
		}
		this.state.rows.push(formData)
		this.setState({'rows' : this.state.rows});
	}
	
	render() {
		return (
			<div className="directory">
				<div className="searchSection">
					<div className="title">Provider Directory</div>
					<div className="version">v2.0</div>
					<div className="chooseProvider">Create Provider
						<form>
							<label>
								Last Name
							<br/><input type="text" ref="last_name" placeholder="" value={this.state.lastName}/><br/>
							</label>
							<label>
								First Name
								<br/><input type="text" ref="first_name" /><br/>
							</label>
							<label>
								Email Address
								<br/><input type="text" ref="email_address" /><br/>
							</label>
							<label>
								Specialty
								<br/><input type="text" ref="specialty" /><br/>
							</label>
							<label>
								Practice Name
							<br/><input type="text" ref="practice_name" /><br/>
							</label>
							<input type="button" value="Submit" onClick={this.handleSubmit} />
						</form>
					</div>
					<div className="resultSection">
						<div>Provider List</div>
							<ul className = "providerList"> {
								this.state.rows.map(function(item, i) {
									return <div  key={i}>{
										<div className="entry">
											<div className = "name"><input type="checkbox"></input>{item.last_name}, {item.first_name}
												<label className = "specialtyLabel">Specialty</label><br></br>
											</div>
											<div className = "specialty"> {item.specialty} </div>
											<div className = "email">{item.email_address}</div>
											<br></br>
										</div>
									}</div>;
							})} </ul>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <Directory />,
  document.getElementById('root')
);
