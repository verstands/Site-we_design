
import Service from '../Components/Service/Service'
import About from '../Components/About/About'
import Slider from '../Components/Slider/Slider'
import Equipe from '../Components/Equipe/Equipe'
import Contact from '../Components/Contact/Contact'
import Categorie from '../Components/Categorie/Categorie'


const Home = () => {
    return (
        <>
            <Slider />
            <main id="main">
            <About />
            <Service />
            <Categorie />
            <Equipe />
            <Contact />
            </main>
        </>
    )
}

export default Home