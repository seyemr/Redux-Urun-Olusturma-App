import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteDataFunc, updateDataFunc } from '../redux/data.Slice';
import { modalFunc } from '../redux/modalSlice';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const updateDataFunc = () => {
    dispatch(modalFunc())
    setOpenEdit(false)
    navigate(`/?update=${dt?.id} `)
    // dispatch(updateDataFunc(dt))
  }
  return (
    <div className='m-0  grid ' style={{ width:"80%"}}>
      <div className="card col-md" style={{margin:"50px"  }}>
        <img src={dt?.url} className='card-img-top ' alt="" />
        <div className="card-body bg-success text-white">
          <h5 className="card-title">{dt?.name}</h5>
          <p className="card-text">{dt?.price} £</p>
        </div>
        <div onClick={() => setOpenEdit(!openEdit)} style={{ cursor: "pointer" }} className=" position-absolute top-0 right-2">
          <BsThreeDots color='white' size={34} />
        </div>
        {
          openEdit && (
            <div className='bg-success border border-white text-white position-absolute mt-4 p-3 rounded '>
              <div onClick={() => dispatch(deleteDataFunc(dt?.id))} style={{ cursor: "pointer" }}>Sil</div>
              <div onClick={updateDataFunc} style={{ cursor: "pointer" }}>Güncelle</div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ProductCard;
