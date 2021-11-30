const Header = ({ title }) => {
    return (
        <div >
            <div className='heroImage'>
                <div className='heroContents'>
                    <h1>{title}</h1>
                    <p>Decora con <span>vinilos adhesivos</span></p>
                </div>
            </div>
        
            <main className='mainContent'>
                <h2>Proximamente: Más contenido en la landing</h2>
            </main>
        </div>
    );
};
  
export default Header;
  