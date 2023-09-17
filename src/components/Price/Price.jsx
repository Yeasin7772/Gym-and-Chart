import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';


const Price = ({ option }) => {
    const { name, price, features } = option
    return (
        <div className='bg-blue-500 rounded-lg p-4 flex flex-col text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-2xl'>/moth</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-600 w-full
             py-4 font-bold rounded-lg hover:bg-green-300 text-2xl'>Buy Now</button>
        </div>
    );
};

Price.propTypes = {
    option: PropTypes.object
}

export default Price;