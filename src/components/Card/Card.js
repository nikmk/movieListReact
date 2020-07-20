import React from 'react'
import PropTypes from 'prop-types'


const Card = ({movie}) => {
    return (
        <div className='card'>
            <img src={`src/${movie.img.src}`} alt={`src/${movie.img.src}`} className='card-img-top'  width='200'/>
            <div className="card-body">
            <h2 className="card-title">{`#${movie.ranking} - ${movie.title} - ${movie.year}`}</h2>

            <ul className="list-group list-group-flush">
            <li className="list-group-item">
            <p>{`Distributor: ${movie.distributor}`}</p>
            </li>
            <li className="list-group-item">
            <p>{`Amount: ${movie.amount}`}</p>
            </li>

            </ul>

            </div>
        </div>
    )
}
Card.propTypes = {
    movie:  PropTypes.shape({    title: PropTypes.string,     distributor: PropTypes.string,      year: PropTypes.number,      amount: PropTypes.string,      img: PropTypes.shape({        src: PropTypes.string,       alt: PropTypes.string      }),      ranking: PropTypes.number    }).isRequired 
}



export default Card