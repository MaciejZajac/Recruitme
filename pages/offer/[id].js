import Layout from '../../components/Layout';
import OfferPage from '../../components/OfferComponents/OfferPage';
import { withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { offerArr } from '../../components/OfferComponents/ExampleRes';

const Offer = ({ router }) => {
    const [obj, setObj] = useState({});
    useEffect(() => {
        const id = router.query.id;
        const getOfferDetails = (id) => {
            try {
                const obj = offerArr.find((item) => item.id.toString() === id);
                if (obj) {
                    setObj(obj);
                }
            } catch (err) {
                console.log('err', err);
            }
        };
        getOfferDetails(id);
    }, [router]);
    return (
        <Layout>
            <OfferPage obj={obj} />
        </Layout>
    );
};

export default withRouter(Offer);
