import './cardlanguages.css'

const CardLanguages = (props) =>{

    const {srcImg, altImg, text} = props;

    return(
        <div className="items">
            <img src={srcImg} alt={altImg} />
            <p>{text}</p>
        </div>
    )
}

export default CardLanguages;