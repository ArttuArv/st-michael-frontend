import React from 'react'
import './styles.css'

const FrontPageProductMenu = ({ beer }) => {

  // Alphabetically sorted beers and whiskies
  const sortedBeers = beer.map(beer => {
    beer.products.sort((a, b) => a.name.localeCompare(b.name))
    return beer
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