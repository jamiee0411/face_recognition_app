import React from 'react'; 
import brain from './pink-brain.png';
import './Logo.css';


 
const Logo = () => {
  return (
    <div className='Tilt-outer ma4 mt0'>
      <img className='brainImg' style={{padding:'5px'}} src={brain} alt='logo'/>  
    </div>
  )
}

export default Logo;