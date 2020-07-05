import Offer from './Offer';
import Link from 'next/link';
import OfferList from './OfferList';

const OfferSection = () => {
    return (
        <section className='section'>
            <OfferList list={offerArr} />
            <div className='flex pb-6'>
                <div className='home__button'>
                    <Link href='/offers'>
                        <a>
                            <button className='btn btn--black'>Więcej ofert</button>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;

const offerArr = [
    {
        position: 'Front-end developer',
        salaryFrom: 5000,
        salaryTo: 10000,
        city: 'Kraków',
        experience: 2,
        id: 1,
    },
    {
        position: 'Back-end developer',
        salaryFrom: 6500,
        salaryTo: 11000,
        city: 'Kraków',
        experience: 2.5,
        id: 2,
    },
    {
        position: 'DevOps Engineer',
        salaryFrom: 8000,
        salaryTo: 14000,
        city: 'Kraków',
        experience: 3,
        id: 3,
    },
    {
        position: 'UX/UI designer',
        salaryFrom: 4500,
        salaryTo: 7800,
        city: 'Kraków',
        experience: 1,
        id: 4,
    },
    {
        position: 'Project Manager',
        salaryFrom: 8000,
        salaryTo: 15000,
        city: 'Kraków',
        experience: 3,
        id: 5,
    },
    {
        position: 'QA Tester',
        salaryFrom: 6000,
        salaryTo: 90000,
        city: 'Kraków',
        experience: 1.5,
        id: 6,
    },
];
