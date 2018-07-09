/**
 * project wiz-battles
 */
import React from 'react';
import './modalWindow.scss';

const ModalWindow = props => {
    /**
     * This component designed to wrap modal content and used to show HeroAchievements and HeroMenu
     */
   const { ModalContent, ModalContentProps } = props;
   return (
       <div className="modal-window">
           <button className="modal-window-close" onClick={props.onClick}>&times;</button>
           <ModalContent {...ModalContentProps} />
       </div>
   );
};

export default ModalWindow;
