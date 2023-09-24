import React from 'react'
import { GrClose } from "react-icons/gr"
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux/modalSlice';

const Modal = ({ title, content, btnText, btnFunc }) => {
    const dispatch = useDispatch();

    return (
        <div className='Modal'>
            <div className='Modal-1'>
                <div className='py-3 d-flex justify-content-between'>
                    <div className=' d-flex '>{title}</div>
                    <GrClose className='' onClick={() => dispatch(modalFunc())} size={24} />
                </div>
                {content}
            </div>
        </div>
    )
}

export default Modal;
