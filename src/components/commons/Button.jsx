import './button.scss';

function Button({title}) {
    return (
        <div>
            <button className="button">{title}</button>
        </div>
    )
}

export default Button;
