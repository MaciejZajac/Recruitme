import { offerArr } from './ExampleRes';
import OfferList from './OfferList';

const OffersPage = () => {
    return (
        <>
            <div className='home home--30'></div>
            <section className='section'>
                <OfferList list={offerArr} />
            </section>
        </>
    );
};

export default OffersPage;
