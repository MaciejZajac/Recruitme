import Offer from './Offer';

const OfferList = ({ list }) => {
    return (
        <div className='columns'>
            <div className='column'>
                <div className='columns is-multiline'>
                    {list?.map((item) => {
                        return <Offer item={item} key={item.id} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default OfferList;
