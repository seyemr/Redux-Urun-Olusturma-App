import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Button from '../components/Button';
import { modalFunc } from '../redux/modalSlice';
import { createDataFunc, updateDataFunc } from "../redux/data.Slice";
import { useLocation, useNavigate } from 'react-router-dom';

const Product = ({ }) => {
    const { modal } = useSelector(state => state.modal);
    const { data, keyword } = useSelector(state => state.data);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" });

    const onChangeFunc = (e, type) => {
        if (type === "url") {
            setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }));
        } else {
            setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
        }
    };

    let loc = location?.search.split("=")[1]

    useEffect(() => {
        if (loc) {
            setProductInfo(data.find(dt => dt.id == loc))
        }
    }, [loc])

    console.log(location?.search.split("=")[1], "location")
    const buttonFunc = () => {
        dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
        dispatch(modalFunc());
    };

    const buttonUpdateFunc = () => {
        dispatch(updateDataFunc({ ...productInfo, id: loc }))
        dispatch(modalFunc());
        navigate("/")
    }

    const contentModal = (
        <div className='container'>
            <div className='row p-4'>
                <div className='col-md-4 offset-md'>
                    <form>
                        <div className='form-group p-2 '>
                            <label htmlFor='name'></label>
                            <Input
                                value={productInfo.name}
                                type='text'
                                name='name'
                                id='name'
                                onChange={e => onChangeFunc(e, 'name')}
                                placeholder='Ürün Ekle'
                                className='form-control'
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor='price'></label>
                            <Input
                                value={productInfo.price}
                                type='number'
                                name='price'
                                id='price'
                                onChange={e => onChangeFunc(e, 'price')}
                                placeholder='Fiyat Ekle'
                                className='form-control'
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor='url'></label>
                            <Input
                                type='file'
                                name='url'
                                id='url'
                                onChange={e => onChangeFunc(e, 'url')}
                                placeholder='Resim Seç'
                                className='form-control-file'
                            />
                        </div>
                        <div className='d-flex m-3 mt-3'>
                            <Button
                                btnText={loc ? ' Güncelle' : 'Oluştur'}
                                onClick={loc ? buttonUpdateFunc : buttonFunc}
                                className='btn btn-primary'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );

    const filteredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword))

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {
                        filteredItems?.map((dt, i) => (
                            <ProductCard key={i} dt={dt} />
                        ))
                    }
                </div>
            </div>

            {modal && <Modal content={contentModal} title={loc ? "Ürünü Güncelle" : "Ürün Oluştur"} />}
        </div>
    );
};

export default Product;
