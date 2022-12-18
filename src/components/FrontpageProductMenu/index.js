import React from 'react'
import './styles.css'

const FrontPageProductMenu = ({ beer }) => {


  return (
    <>
      <div className="menu-page-container">
        <h2>Menu</h2>
        <p>Testiksi jotain tällaistakin näkymää</p>
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
      </div>
    </>
  )
}

export default FrontPageProductMenu