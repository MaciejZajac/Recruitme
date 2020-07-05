const { default: OfferList } = require('./OfferList');

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
    {
        position: 'Back-end developer',
        mainTech: ['Java', 'Spring', 'Hibernate'],
        salaryFrom: 6500,
        salaryTo: 11000,
        city: 'Kraków',
        experience: 2.5,
        id: 7,
    },
    {
        position: 'DevOps Engineer',
        salaryFrom: 8000,
        salaryTo: 14000,
        city: 'Kraków',
        experience: 3,
        id: 8,
    },
    {
        position: 'UX/UI designer',
        salaryFrom: 4500,
        salaryTo: 7800,
        city: 'Kraków',
        experience: 1,
        id: 9,
    },
    {
        position: 'Project Manager',
        salaryFrom: 8000,
        salaryTo: 15000,
        city: 'Kraków',
        experience: 3,
        id: 10,
    },
    {
        position: 'QA Tester',
        salaryFrom: 6000,
        salaryTo: 90000,
        city: 'Kraków',
        experience: 1.5,
        id: 11,
    },
    {
        position: 'Back-end developer',
        mainTech: ['Java', 'Spring', 'Hibernate'],
        salaryFrom: 6500,
        salaryTo: 11000,
        city: 'Kraków',
        experience: 2.5,
        id: 12,
    },
    {
        position: 'DevOps Engineer',
        salaryFrom: 8000,
        salaryTo: 14000,
        city: 'Kraków',
        experience: 3,
        id: 13,
    },
    {
        position: 'UX/UI designer',
        salaryFrom: 4500,
        salaryTo: 7800,
        city: 'Kraków',
        experience: 1,
        id: 14,
    },
    {
        position: 'Project Manager',
        salaryFrom: 8000,
        salaryTo: 15000,
        city: 'Kraków',
        experience: 3,
        id: 15,
    },
    {
        position: 'QA Tester',
        salaryFrom: 6000,
        salaryTo: 90000,
        city: 'Kraków',
        experience: 1.5,
        id: 16,
    },
    {
        position: 'UX/UI designer',
        salaryFrom: 4500,
        salaryTo: 7800,
        city: 'Kraków',
        experience: 1,
        id: 17,
    },
    {
        position: 'Project Manager',
        salaryFrom: 8000,
        salaryTo: 15000,
        city: 'Kraków',
        experience: 3,
        id: 18,
    },
    {
        position: 'QA Tester',
        salaryFrom: 6000,
        salaryTo: 90000,
        city: 'Kraków',
        experience: 1.5,
        id: 19,
    },
    {
        position: 'Project Manager',
        salaryFrom: 8000,
        salaryTo: 15000,
        city: 'Kraków',
        experience: 3,
        id: 20,
    },
];