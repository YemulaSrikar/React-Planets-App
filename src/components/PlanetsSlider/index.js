// Write your code here

import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    return (
      <div className="carousel-container" testid="planets">
        <div className="heading-container">
          <h1 className="planets-heading">PLANETS</h1>
        </div>
        <div className="slider-container">
          <Slider>
            {planetsList.map(planets => (
              <PlanetItem planets={planets} key={planets.id} />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}

export default PlanetsSlider
