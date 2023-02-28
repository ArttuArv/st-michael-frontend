import React from 'react'
import './styles.css'

const FrontPageProductMenu = ({ beer }) => {


  return (
    <>
      {/* <div className="menu-page-container">
        <h2>Menu</h2>
        <div className='menu-container'>
          {beer.map(category => (
            <div className='menu-box' key={category.id}>
              <h4>{category.name}</h4>
              {category.products.map(beer => (
                <div className='menu-content' key={beer.id}>
                  <h5>{beer.name}</h5>
                  <p>{beer.style}</p>
                  <p>{beer.country}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div> */}
      <div className="menu-page-wrapper">
        <div>
          {beer.map(category => (
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