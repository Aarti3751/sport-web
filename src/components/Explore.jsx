import '../components/Explore.css';
import img from '../BS-1210GSEngraver2.02.webp';
import img1 from '../shoes.jpg';
import img2 from '../oslar.jpg';
// import img3 from  '../JG-1435BK_Offroad_2.webp'
import Jerseys1 from '../portugal.jpg';
import Jerseys2 from '../italy.jpg';
import Jerseys3 from '../real mardrid.jpg';
import b1 from '../euro.jpg';
import b2 from '../badmintos.jpg';
import b3 from '../Basketball.jpg';

import bann from '../Footwear_main_Shoes_category-banner.webp'


const Explore = () => {
    return (
        <>
            <img src={bann} className='bann' alt='shoes banner' />

            <h1 className="hone">Footwear</h1>
            <div id="card1">
                <div id='card'>
                    <img className='frame' src={img} alt='crick' />
                    <figcaption>Crick</figcaption>
                    <div className='price'>$80.00</div>
                    <button id='btn'>Add to Cart</button>
                </div>
                <div id='card'>

                    <img className='frame' src={img1} alt='oslar' />
                    <figcaption>Oslar</figcaption>
                    <div className='price'>$90.00</div>
                    <button id='btn'>Add to Cart</button>
                </div>

                <div id='card'>
                    <img className='frame' src={img2} alt='Stride 2.0' />
                    <figcaption>Stride 2.0</figcaption>
                    <div className='price'>$100.00</div>
                    <button id='btn'>Add to Cart</button>
                </div>



                {/* <div id='card'>
                    <img className='frame' src={img3} alt='COMBAT 2.0' />
                    <figcaption>COMBAT 2.0
                    </figcaption>
                    <div className='price'>$200.00</div> 
                    <button id='btn'>Add to Cart</button>
                </div> */}
            </div>

            <h1 className="hone"> Jerseys</h1>
            <div id="card1">
                <div id='card'>
                    <img className='frame' src={Jerseys1} alt='crick' />
                    <figcaption>Portugal Home 24/25 Fan Edition</figcaption>
                    <div className='price'>₹1,299
                    </div>
                    <button id='btn'>Add to Cart</button>
                </div>
                <div id='card'>
                    <img className='frame' src={Jerseys2} alt='crick' />
                    <figcaption>Italy x Versace Special Edition</figcaption>
                    <div className='price'>₹1,599
                    </div>
                    <button id='btn'>Add to Cart</button>
                </div>
                <div id='card'>
                    <img className='frame' src={Jerseys3} alt='crick' />
                    <figcaption>Real Madrid Away 24/25 Fan Edition</figcaption>
                    <div className='price'>₹1,299
                    </div>
                    <button id='btn'>Add to Cart</button>
                </div>
            </div>


            <h1 className="hone"> sports equipment</h1>
            <div id="card1">
                <div id='card'>
                    <img className='frame' src={b1} alt='crick' />
                    <figcaption>Fussballliebe Mini Ball</figcaption>
                    <div className='price'>₹1,299
                    </div>
                    <button id='btn'>Add to Cart</button>
                </div>
                <div id='card'>
                    <img className='frame' src={b2} alt='crick' />
                    <figcaption>Badminton Racket</figcaption>
                    <div className='price'>₹1,599
                    </div>
                    <button id='btn'>Add to Cart</button>
                </div>
                <div id='card'>
                    <img className='frame' src={b3} alt='crick' />
                    <figcaption>Basketball</figcaption>
                    <div className='price'>₹1,299
                    </div>
                    <button id='btn'>Add to Cart</button>
                </div>
            </div>





        </>
    );
}
export default Explore;