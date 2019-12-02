import React from 'react';
import './styles/PokeCell.css';
import sprites from '../assets/sprites.png';

const PokeCell = ({ pokeClass }) => {
    const { id, backgroundPosition } = pokeClass;
  return <button className="poke-cell"></button>
};


export default PokeCell;