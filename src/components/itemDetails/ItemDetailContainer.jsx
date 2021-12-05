import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../itemDetails/ItemDetail';
import { getFirestore } from '../../service/getFirestore';

const ItemDetailContainer = () => {

    const [dataDetail, setDataDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    
   
    useEffect(() => {
        const db = getFirestore();
        const dbQuery = db.collection('products').doc(productId).get();
        dbQuery
            .then(resp => setDataDetail({ id: resp.id, ...resp.data()}))
            .catch((err) => console.log(err))
            .finally(setTimeout(() => {setLoading(false)}, 1500))
    }, [productId]); 

    return (
        <div className='container'>          
            <ItemDetail product={dataDetail} loading={loading}/>    
        </div>
    )
};

export default ItemDetailContainer;
