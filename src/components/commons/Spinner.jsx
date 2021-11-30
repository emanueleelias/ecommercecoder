import './spinner.scss';

const Spinner = () => {
    return (  
      <>      
        <div className="containerSk-chase">
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
          <p>Cargando...</p>
        </div>
        
      </>
    );
};
  
export default Spinner;
  