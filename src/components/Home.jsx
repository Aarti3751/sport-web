import { Link } from "react-router-dom";
import banner from '../banner.jpg';
import '../components/Home.css';
import img from '../special editions.jpg';
import img2 from '../jerseys.jpg';
import img3 from '../teams.jpg';
import img4 from '../arrivals.jpg';

const Home = () => {
    return (
        <>
            <div className="home-page">

                <div className="banner">
                    <img src={banner} alt="Sports Banner" className="banner-image" />
                    <div className="banner-text">
                        <h1 >Welcome to Sports Gear Hub</h1>
                        <p>Your one-stop shop for all sports apparel and footwear!</p>
                        <Link to="/explore" className="explore-button">Explore Products</Link>
                    </div>
                </div>
            </div>
            <h1 className="heading">Top categories</h1>
            <div id="cd">
                <div id="cd1">
                    <img className='im' src={img} alt='Special Editions' />
                    <figcaption>Special Editions</figcaption>
                </div>

                <div id="cd1">
                    <img className='im' src={img2} alt='International Jerseys
' />
                    <figcaption>International Jerseys
                    </figcaption>
                </div>

                <div id="cd1">
                    <img className='im' src={img3} alt='Shop By Teams' />
                    <figcaption>Shop By Teams</figcaption>
                </div>

                <div id="cd1">
                    <img className='im' src={img4} alt='New Arrivals' />
                    <figcaption>New Arrivals</figcaption>
                </div>
            </div>
        </>

    );

}
export default Home;