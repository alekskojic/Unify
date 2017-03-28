import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import './App.css';
import axios from 'axios';
import Navbar from './navbar';


class CoreValuesVolunteer extends Component {
  constructor() {
    super();
    this.state = {
      core_values: [],
			missing_core_value: true,
			highlighted: [
				'Advocacy & Human Rights', false,
				'Animals', false,
				'Arts & Culture', false,
				'Board Development', false,
				'Children & Youth', false,
				'Community', false,
				'Computers & Technology', false,
				'Crisis Support', false,
				'Disaster Relief', false,
				'Education & Literacy', false,
				'Emergency & Safety', false,
				'Employement', false,
				'Environment', false,
				'Faith-Based', false,
				'Health & Medicine', false,
				'Homeless & Housing', false,
				'Hunger', false,
				'Immigrants & Refugees', false,
				'International', false,
				'Justice & Legal', false,
				'LGBT', false,
				'Media & Broadcasting', false,
				'People with Disabilities', false,
				'Politics', false,
				'Race & Ethnicity', false,
				'Seniors', false,
				'Sports & Recreation', false,
				'Veterans & Military Families', false,
				'Women', false
			]
    }

    this.updateCoreValues = this.updateCoreValues.bind(this);
    this.coreValueSelect = this.coreValueSelect.bind(this);
  }
  
  updateCoreValues(e) {
    e.preventDefault();
    for (let i = 1; i <= this.state.core_values.length - 1; i += 2)
    if (!this.state.missing_core_value) {
      axios
        .get('/api/volunteers')
  			.then((res) => {
    			console.log(res);
  			})
  			.catch((err) => {
    			console.log(err);
  			});
    }
  }

  coreValueSelect(e) {
    let removeCoreValue = false;
		let highlighted = this.state.highlighted;
    let newCoreValues = this.state.core_values;
    for (let i = 0; i <= this.state.core_values.length; i++) {
      if (e.target.id == this.state.core_values[i]) {
        removeCoreValue = true;
        newCoreValues.splice(i, 1);
        this.setState({core_values: newCoreValues});
      }
    }
		for (let j = 0; j <= highlighted.length; j++) {
			if (e.target.id == highlighted[j]) {
				highlighted[j+1] = !highlighted[j+1];
				this.setState({highlighted: highlighted});
			}
		}
    if (!removeCoreValue) {
      newCoreValues.push(e.target.id);
      this.setState({core_values: newCoreValues});
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="underHeader registerFields">
          
          <div className="coreValuesTableTitle">
            Core Values (Select all that apply)
            <table className="coreValuesTable">
              <tr>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[1] ? 'highlight' : ''} id="Advocacy & Human Rights">Advocacy & Human Rights</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[3] ? 'highlight' : ''} id="Animals">Animals</td> 
                <td onClick={this.coreValueSelect} className={this.state.highlighted[5] ? 'highlight' : ''} id="Arts & Culture">Arts & Culture</td>
              </tr>
              <tr>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[7] ? 'highlight' : ''} id="Board Development">Board Development</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[9] ? 'highlight' : ''} id="Children & Youth">Children & Youth</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[11] ? 'highlight' : ''} id="Community">Community</td>
              </tr>
              <tr>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[13] ? 'highlight' : ''} id="Computers & Technology">Computers & Technology</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[15] ? 'highlight' : ''} id="Crisis Support">Crisis Support</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[17] ? 'highlight' : ''} id="Disaster Relief">Disaster Relief</td>
              </tr>
              <tr>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[19] ? 'highlight' : null} id="Education & Literacy">Education & Literacy</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[21] ? 'highlight' : null} id="Emergency & Safety">Emergency & Safety</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[23] ? 'highlight' : null} id="Employement">Employement</td>
              </tr>
              <tr>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[25] ? 'highlight' : null} id="Environment">Environment</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[27] ? 'highlight' : null} id="Faith-Based">Faith-Based</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[29] ? 'highlight' : null} id="Health & Medicine">Health & Medicine</td>
              </tr>
              <tr>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[31] ? 'highlight' : null} id="Homeless & Housing">Homeless & Housing</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[33] ? 'highlight' : null} id="Hunger">Hunger</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[35] ? 'highlight' : null} id="Immigrants & Refugees">Immigrants & Refugees</td>
              </tr>
              <tr>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[37] ? 'highlight' : null} id="International">International</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[39] ? 'highlight' : null} id="Justice & Legal">Justice & Legal</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[41] ? 'highlight' : null} id="LGBT">LGBT</td>
              </tr>
              <tr>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[43] ? 'highlight' : null} id="Media & Broadcasting">Media & Broadcasting</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[45] ? 'highlight' : null} id="People with Disabilities">People with Disabilities</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[47] ? 'highlight' : null} id="Politics">Politics</td>
              </tr>
              <tr>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[49] ? 'highlight' : null} id="Race & Ethnicity">Race & Ethnicity</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[51] ? 'highlight' : null} id="Seniors">Seniors</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[53] ? 'highlight' : null} id="Sports & Recreation">Sports & Recreation</td>
              </tr>
              <tr>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[55] ? 'highlight' : null} id="Veterans & Military Families">Veterans & Military Families</td>
                <td onClick={this.coreValueSelect} className={this.state.highlighted[57] ? 'highlight' : null} id="Women">Women</td>
              </tr>
            </table>
						<br/>
            <span className={!this.state.missing_core_value ? 'showWarning' : 'hideWarning'} >
              Please choose at least one core value!
            </span>
						<button 
              className="fieldOrButton registerButton" 
              onClick={this.updateCoreValues}>
                Apply
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CoreValuesVolunteer;