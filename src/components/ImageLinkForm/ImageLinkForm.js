import React from 'react'; 
import './ImageLinkForm.css'; 

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  // ties onButtonSubmit to enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        onButtonSubmit()
    }
  };
  return (
    <div>
      <p className='f3 white'>
        {'This Magic Brain will detect faces in your pictures. Give it a try!'}
      </p>
      <div className='center'>
        <div className='form center pa4' onKeyPress={handleKeyPress}>
          <input id='ip1' className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button 
            className='button w-30 grow f4 link ph3 pv2 dib black' 
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
    );
}

export default ImageLinkForm;
