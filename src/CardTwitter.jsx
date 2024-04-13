
const CardTwitter = ({ name, username, isFollowing }) => {

    const addAt = (username) => {
        return `@${username}`
    }

    const imgUrl = `https://unavatar.io/github/${name}`  

    return (
        <header>
            <section className='twitterCard-container'>
                <div className="twitterCard">
                    <img src={imgUrl} alt="" />
                    <div className="twitterCard-user">
                        <strong>{name}</strong>
                        <span>{addAt(username)}</span>
                    </div>
                </div>
                
                <aside>
                    <button className='button'>Seguir</button>
                </aside>
                
            </section>
        </header>
    );
};

export default CardTwitter ; // Exporta el componente TwiterCard
