import './hero.css'
import logoreact from '../assets/react.svg'
import logohtml from '../assets/html.svg'
import logocss from '../assets/css.svg'
import logojs from '../assets/js.svg'
import CardLanguages from './CardLanguages';




const Hero = () =>{
    return(
        <>  
            <section className="hero-container">
                <article className="hero-content">
                    <div className="content-txt">
                        <h1><span>C</span>odeart<span>JC</span></h1>
                        <h3>Aprendiendo Programacion</h3>
                        <p>Cursos 100% gratis de tus lenguajes favoritos</p>
                    </div>
                    <div className="content-items">
                        <CardLanguages 
                            srcImg={logohtml} 
                            altImg='' 
                            text='Curso Html' 
                        />
                        <CardLanguages 
                            srcImg={logocss} 
                            altImg='' 
                            text='Curso Css' 
                        />
                        <CardLanguages 
                            srcImg={logojs} 
                            altImg='' 
                            text='Curso JavaScript' 
                        />
                        <CardLanguages 
                            srcImg={logoreact} 
                            altImg='' 
                            text='Curso de React' 
                        />
                    </div>
                </article>
                
            </section>
        </>
    )
}

export default Hero;