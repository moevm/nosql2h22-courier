
import CenterPage from '../../templateStyle/CenterPage';
import OverlayingPopup from './OverlayingPopup';
import Button from '../../Button';
import Container from '../../templateStyle/Container';


function OrderPopup(props) {
    const {
        isOpened,
        onClose,
        children
    } = props;


    return (
        <OverlayingPopup isOpened={isOpened} onClose={onClose}>
                <div className='popup_container__info'>
                    <div className='container__wrapped'>Информация</div>

                    {children}
                </div>
        </OverlayingPopup>

    )
}

export default OrderPopup