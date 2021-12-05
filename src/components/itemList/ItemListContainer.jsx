import { NavLink } from 'react-router-dom'; 
import { getFirestore } from '../../service/getFirestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
import './itemListContainer.scss';
 
const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categorieId } = useParams();

    useEffect(() => {
        const db = getFirestore();
            const dbQuery = 
                categorieId === undefined
                    ? db.collection('products')
                    : db.collection('products').where('category', '==', categorieId)
                dbQuery
                    .get()
                    .then(resp => setData( resp.docs.map( prod => ({ id:prod.id, ...prod.data() }))))
                    .catch((err) => console.log(err))
                    .finally(setTimeout(() => {setLoading(false)}, 2200));
    }, [categorieId]);

    return (
        <>
            <h2 className='titulo'>{greeting}</h2>
            
            <div className='categories'>
                <NavLink to='/' className={({isActive}) => `categories__item ${ isActive ? 'categories__item--selected' : ''}`}>
                    Todas
                </NavLink> 
                
                <NavLink to='/notebooks' className={({isActive}) => `categories__item ${ isActive ? 'categories__item--selected' : ''}`}>
                    Para Notebooks
                </NavLink>
                
                <NavLink to='/viajes' className={({isActive}) => `categories__item ${ isActive ? 'categories__item--selected' : ''}`}>
                    Para viajar
                </NavLink>
                
                <NavLink to='/urbanas' className={({isActive}) => `categories__item ${ isActive ? 'categories__item--selected' : ''}`}>
                    Urbanas
                </NavLink>  
            </div> 

            <ItemList products={data} loading={loading}/>
        </>
    );
};

export default ItemListContainer;
