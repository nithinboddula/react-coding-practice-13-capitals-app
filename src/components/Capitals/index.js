import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeElementId: 'NEW_DELHI'}

  onClick = event => {
    const capitalId = event.target.value
    this.setState({activeElementId: capitalId})
  }

  render() {
    const {activeElementId} = this.state
    const countryObject = countryAndCapitalsList.filter(
      eachItem => eachItem.id === activeElementId,
    )

    return (
      <div className="bg-container">
        <div className="container">
          <div className="card">
            <h1 className="main-heading">Countries And Capitals</h1>
            <div>
              <select
                className="select-container"
                id="capitals"
                onClick={this.onClick}
              >
                {countryAndCapitalsList.map(eachItem => (
                  <option
                    key={eachItem.id}
                    value={eachItem.id}
                    className="option"
                  >
                    {eachItem.capitalDisplayText}
                  </option>
                ))}
              </select>
              <label htmlFor="capitals" className="label-element">
                is capital of which country?
              </label>
            </div>
            <h1 className="country-name">{countryObject[0].country}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
