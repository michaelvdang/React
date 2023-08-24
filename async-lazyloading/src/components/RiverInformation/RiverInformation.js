import React, {useState, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import {getRiverInformation, getRiverNames} from '../../services/rivers';

// not sure why this doesn't display all the rivers, only one of them
export default function RiverInformation({name}) {
// export default function RiverInformation() {
  const [riverInformation, setRiverInformation] = useState();

  useEffect(() => {
    let mounted = true;
    getRiverInformation(name)
  //  getRiverInformation()
    .then(data => {
      if (mounted) {
        setRiverInformation(data)
      }
    });
    return () => mounted = false;
  }, [name])
  // }, [])
  
  // // retrieve all five rivers' info with Promise.all
  // const [riverInformation, setRiverInformation] = React.useState({});
  // const [riverNames, setRiverNames] = React.useState([]);
  // React.useEffect(() => {
  //   console.log('useEffect');
  //   if (!riverNames.length) {
  //     getRiverNames()
  //       .then((data) => {
  //         setRiverNames(data);
  //       })
  //   }
  //   else {
  //     Promise.all(
  //       riverNames.map((name) => getRiverInformation(name))
  //     ).then((data) => {
  //       const updatedInformation = data.reduce(
  //         (acc, curr, index) => ({
  //           ...acc,
  //           [riverNames[index]]: curr,
  //         }),
  //         {}
  //       );
  //       setRiverInformation(updatedInformation);
  //     });
  //     // riverNames.map((name) => {
  //     //   getRiverInformation(name)
  //     //   .then((data) => {
  //     //     setRiverInformation({...riverInformation, name: data});
  //     //     console.log(riverInformation);
  //     //   })
  //     // })
  //   }
  // }, [riverNames]);
  
  return(
    <div>
      <h2>River Information</h2>
      <ul>
        <li>Continent: {riverInformation?.continent}</li>
        <li>Length: {riverInformation?.length}</li>
        <li>Outflow: {riverInformation?.outflow}</li>
      </ul>
    </div>
    
    // <div>
    //   <h2>River Information</h2>
    //   <h3>All the rivers: </h3>
    //   <p>{riverNames.join(', ')}</p>
    //   {Object.keys(riverInformation).map((name) => {
    //     return (
    //       <ul key={name}>
    //         <li><h2>{name}</h2></li>
    //         <li>Continent: {riverInformation[name].continent} </li>
    //         <li>Length: {riverInformation[name].length}</li>
    //         <li>Outflow: {riverInformation[name].outflow}</li>
    //       </ul>
    //     )
    //   })}
    // </div>
  )
}

RiverInformation.propTypes = {
  name: PropTypes.string.isRequired
 }