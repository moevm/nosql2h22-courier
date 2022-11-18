import React from 'react'
import Portal from '../Portal';



function OverlayingPopup(props) {
  const {
    children,
    onClose,
    isOpened
  } = props;

  if (!isOpened) return null;

  return (
    <Portal>
      <div className='popup_container'  role="dialog">
          <div
            className='popup_container__overlay'
            role="button"
            tabIndex={0}
            onClick={onClose}
          />
          {children}
      </div>
    </Portal>
  )
}

export default OverlayingPopup