import { NavLink } from 'react-router-dom'; 
import ItemList from './ItemList';
import { getFirestore } from '../../service/getFirestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './itemListContainer.scss';
 
const ItemListContainer = ({ greeting }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categorieId } = useParams();

    useEffect(() => {
        const db = getFirestore();

        if (categorieId) {
            const dbQuery = db.collection('products').where('category', '==', categorieId).get();
            dbQuery
                .then(resp => setData( resp.docs.map( prod => ({ id:prod.id, ...prod.data() }))))
                .catch((err) => console.log(err))
               setLoading(false);
        } else {
            const dbQuery = db.collection('products').get(); 
            dbQuery
                .then(resp => setData( resp.docs.map( prod => ({ id: prod.id, ...prod.data() } ))))
                .catch((err) => console.log(err))
            setLoading(false) 
        }

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
