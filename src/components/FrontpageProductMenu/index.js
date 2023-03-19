import React from 'react'
import './styles.css'

const FrontPageProductMenu = ({ beer }) => {

  // Alphabetically sorted beers and whiskies
  const sortedBeers = beer.map(beer => {
    beer.products.sort((a, b) => a.name.localeCompare(b.name))
    return beer
  })

  // Sort categories Seasonal Draughts, Seasonal Bottles, Regular Draughts, Regular Bottles
  sortedBeers.sort((a, b) => {
    if (a.name === 'Seasonal Draughts') return -1
    if (b.name === 'Seasonal Draughts') return 1
    if (a.name === 'Seasonal Bottles') return -1
    if (b.name === 'Seasonal Bottles') return 1
    if (a.name === 'Regular Draughts') return -1
    if (b.name === 'Regular Draughts') return 1
    if (a.name === 'Regular Bottles') return -1
    if (b.name === 'Regular Bottles') return 1
    return 0
  })


  return (
    <>
      <div className="menu-page-wrapper">
        <div>
          {sortedBeers.map(category => (
            <div className='menu-grid-wrapper' key={category.id}>
              <h4>{category.name}</h4>
              <div className='menu-container-grid'>              
                {category.products.map(beer => (
                  <div className='menu-grid-item' key={beer.id}>
                    <h5>{beer.name}</h5>
                    <p>{beer.style}</p>
                    <p>{beer.country}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FrontPageProductMenu