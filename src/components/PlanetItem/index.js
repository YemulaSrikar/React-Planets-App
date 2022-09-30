// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planets} = props
  const {name, imageUrl, description} = planets
  return (
    <div className="carousel-items-container">
      <img src={imageUrl} alt={`planet ${name}`} className="images" />
      <h1 className="image-title">{name}</h1>
      <p className="image-desc">{description}</p>
    </div>
  )
}
export default PlanetItem
