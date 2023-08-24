import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css'

export default function AnimalCard({ name, scientificName, size, diet, additional, showAdditional }) {
  // return <>
  //   <h2>{name}</h2>
  //   <div>{scientificName}</div>
  // </>
  return (
    <div className='animal-wrapper'>
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size}kg</h4>
      <div>{diet.join(', ')}</div>
      {additional && additional.notes && <div>{additional.notes}</div>}
      <button onClick={() => showAdditional(additional)}>More Info</button>

    </div>
  )
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
}

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
}