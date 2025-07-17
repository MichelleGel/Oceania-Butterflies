import "./Button.css";

let Button = ({ title, onClick, tooltip }) => {

    const handleClick = () => {
        //console.log("test" + title);
        if (onClick) {
            onClick();
        }
    };

    return (
        <>
            <button title={tooltip} type="button" onClick={handleClick}>{title}</button>
        </>
    )
}

export default Button