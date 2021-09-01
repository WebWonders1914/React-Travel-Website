import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> EPIC Destinations are waitng for YOU!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
               src='images/wtrfl.jpg'
            
              text='Explore the hidden waterfall deep inside the Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
               src='images/greece.webp'
              text='Go through the masterpiece Architecture of Santorini islands'
              label='Beauty'
              path='/services'
            />
            <CardItem
              src='images/yatch.webp'
              text='Travel through the Islands of Bali in a Yatch'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pizza.jpg'
              text='Grab a Bite of Best Neapolitan Pizza in Italy'
              label='Cuisine'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Sports on Top of the Himilayan Mountains'
              label='Sports'
              path='/products'
            />
            <CardItem
              src='images/desert.webp'
              text='Ride through the Sahara Desert '
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;