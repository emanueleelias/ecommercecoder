import { useMemo } from 'react';
import { useTable } from 'react-table';
import { AiTwotoneDelete } from 'react-icons/ai';
import './tableCart.scss';

function useColumns() {
    const columns = useMemo(
        () => [
            {
            Header: 'Imagen',
            accessor: 'image'
            },
            {
            Header: 'Producto',
            accessor: 'title'
            },
            {
            Header: 'Precio Unitario',
            accessor: 'unitPrice'
            },
            {
            Header: 'Cantidad',
            accessor: 'quantity'
            },
            {
                Header: 'Precio',
                accessor: 'price'
            },
            {
                Header: '',
                accessor: 'delete'
            }
        ],
        []
    );
   
    return columns;
}

function useRows(listaProducts, removeItem) {
    const rows = 
        listaProducts.map( (p) => {
            return (
                {
                    image: <img src={p.image} alt={p.altImg} width='88px' height='100px' />,
                    title: p.title,
                    unitPrice: `$ ${p.price}`,
                    quantity: `${p.amount} unidades`,
                    price: `$ ${p.amount * p.price}`,
                    delete: <AiTwotoneDelete className='iconDelete' onClick={ () => removeItem(p.id) }/>
                }
            )
        }) 
    return rows;
}

export const TableCart = ({ clearCart, cartList, priceTotal, removeItem }) => {
    const columns = useColumns();
    const data = useRows(cartList, removeItem);
    const table = useTable({ columns, data }); 
        
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = table; 

    return (
        <div className='containerCartTable'>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {
                                        column.render('Header')
                                    }
                                </th>
                                ))
                            }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            );})
                                    }
                                </tr>
                            );
                        }) 
                    }
                    <tr className='total'>
                        <td colSpan='4'>Precio Total</td>
                        <td>{`$ ${priceTotal()}`}</td> 
                        <td>
                            <a id='deleteAll' onClick={clearCart}>
                                <span>Eliminar carrito</span>
                            </a>
                        </td>               
                    </tr> 
                </tbody> 
                
            </table>                
        </div>
    )
}

export default TableCart; 
