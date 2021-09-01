import React from 'react';
import './SignUpFooter.css';
import { Link } from 'react-router-dom';

function SignUpFooter() {
  return (
    <div className='footer-container-a'>
      <section className='footer-subscription-a'>
        <p className='footer-subscription-heading-a'>
        Why GHUMO?


        </p>
        <p className='footer-subscription-text-a'>
        Established in 2010, GHUMO has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers’ evolving needs and demands.
        </p>
       
      </section>
      
      <section class='social-media-a'>
        <div class='social-media-wrap-a'>
          <div class='footer-logo-a'>
            <Link to='/' className='social-logo-a'>
            GHUMO &nbsp;
            <i class="fas fa-globe-americas"></i>
            </Link>
          </div>
         
            
            
            
          
        </div>
      </section>
    </div>
  );
}

export default SignUpFooter;