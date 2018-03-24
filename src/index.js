import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data.json';


class Directory extends React.Component {
	constructor(props) {
		super(props);
		this.addRow = this.addRow.bind(this);
		this.makeRows = this.makeRows.bind(this);
		this.state = {
			rows: data
		}
		this.makeRows();
		console.log(this.state.rows)
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
								<br/><input type="text" name="lastName" /><br/>
							</label>
							<label>
								First Name
								<br/><input type="text" name="firstName" /><br/>
							</label>
							<label>
								Email Address
								<br/><input type="text" name="emailAddress" /><br/>
							</label>
							<label>
								Specialty
								<br/><input type="text" name="specialty" /><br/>
							</label>
							<label>
								Practice Name
							<br/><input type="text" name="practiceName" /><br/>
							</label>  
							<br/><input className= "submit" type="submit" value="Submit" /><br/>
						</form>
					</div>
					<div className="resultSection">
						<div>Provider List</div>
							<ul className = "providerList"> {
								//this.makeRows()
								this.state.rows.map(function(item) {
									return <div>{
										<div className="entry">
											<input type="checkbox"></input>
											<div className = "name">{item.last_name}, {item.first_name}
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
		
	addRow() {
		var nextState = this.state;
		nextState.rows.push('row');
		this.setState(nextState);
	}
	
	makeRows() {
		var data = this.state.rows;
		console.log('making rows')
		console.log(data);
		
		var html = "";
		
		data.forEach(function(item) {
			console.log(item);
			html += <li> {item.last_name} </li>;
		});
		console.log(html);
		return html;
	}
}

ReactDOM.render(
  <Directory />,
  document.getElementById('root')
);