import { useState } from 'react';
import Button from '../../components/buttons/Button';
import '../../App.css';

const ForgotPopUp = () => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const handleOverlayClick = () => {
    closeModal();
  };

  return (
    <div>
      <div className=' flex justify-center mt-3'><span className=' cursor-pointer' onClick={openModal}>Forgot Password</span></div>
      <div className={`modal ${modalActive ? 'active' : ''}`}>
        <div className="modal-header">
          <button data-close-button onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <h1 className=' text-[21.2836px] mb-2 -pt-2'>Forgot Password</h1>
          <div className='text-justify'>Enter your email address and we'll send you an email with the verification or confirmation email.</div>
          <div className="mt-4">
            <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="email" id="Email" placeholder="Enter Email" required />
          </div>
          <div className="mt-6 flex justify-center">
            <Button value='Conformed'/>
          </div>
        </div>
      </div>
      <div id="overlay" className={modalActive ? 'active' : ''} onClick={handleOverlayClick}></div>
    </div>
  );
};

export default ForgotPopUp;