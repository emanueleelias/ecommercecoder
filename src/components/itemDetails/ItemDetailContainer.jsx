import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../itemDetails/ItemDetail';
import { getFirestore } from '../../service/getFirestore';

const ItemDetailContainer = () => {

    const [dataDetail, setDataDetail] = useState({});
    const { productId } = useParams();
    
   
     useEffect(() => {
        const db = getFirestore();

        const dbQuery = db.collection('products').doc(productId).get();
        dbQuery
            .then(resp => setDataDetail({ id: resp.id, ...resp.data()}))
            .catch((err) => console.log(err))
            .finally(console.log('Finalizo'));
    }, [productId]) 

    return (
        <div className='container'>          
            <ItemDetail product={ dataDetail }/>    
        </div>
    )
};

export default ItemDetailContainer;
