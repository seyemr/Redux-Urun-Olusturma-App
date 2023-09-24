import React from 'react'
import { MdPostAdd } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux/modalSlice'
import { searchDataFunc, sortingDataFunc } from '../redux/data.Slice'

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className='d-flex justify-content-between bg-success text-white p-2 align-items-center' >
            <div className='fs-'>REACT-REDUX UYGULAMA</div>
            <div className='d-flex items-center gap-5'>
                <div>
                    <select onChange={e => dispatch(sortingDataFunc(e.target.value))} className='rounded-3 border-0 py-3' name="" id="">
                        <option value="asc">ARTAN</option>
                        <option value="desc">AZALAN</option>
                    </select>
                </div>
                <input onChange={e => dispatch(searchDataFunc(e.target.value))} className='rounded-3 border-0 ' type="text" placeholder='Arama yapınız...' />
                <div onClick={()=>dispatch((modalFunc()))} className="bg-dark p-2 m-2  bg-opacity-50 rounded-4 d-flex justify-content-center aling-items-center" style={{cursor:"pointer"}}>
                    <MdPostAdd  size={24}/>
                </div>
            </div>
        </div>
    )
}

export default Header
