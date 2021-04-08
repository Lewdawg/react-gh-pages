//import images from '../../images'
import laptop from '../../images/laptop.png'

const Home = () => {

    return (

        <div className="title">

            <h1>Home</h1>
            <h1 className='homeLogo'>The Laptop Shop</h1>

            <h2>Welcome to your one stop shop for all your <b>Laptops</b> wants and needs!</h2>

            <img src={laptop} alt="" />
            <img src={laptop} alt="" />
            <img src={laptop} alt="" />
            <img src={laptop} alt="" />

        </div>
    );
}

export default Home;


