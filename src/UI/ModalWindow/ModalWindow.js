/**
 * project wiz-battles
 */
import React from 'react';
import './modalWindow.scss';

class ModalWindow extends React.Component {
    /**
     * This component designed to wrap modal content and used to show HeroAchievements and HeroMenu
     */
    closeWindow() {
        this.props.onClick();
    }
    render() {
       const { ModalContent } = this.props;
       return (
           <div className="modal-window">
               <div className="modal-window-header">
                   <button className="modal-window-close" onClick={this.closeWindow}>&times;</button>
               </div>
               <ModalContent />
           </div>
       );
    }
}

export default ModalWindow;
