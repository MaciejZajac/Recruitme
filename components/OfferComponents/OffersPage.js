import { offerArr } from './ExampleRes'
import OfferList from './OfferList'
import Hero from '../Hero'
// import Filters from './Filters'

const OffersPage = () => {
    const [activefilter, setActiveFilter] = React.useState('')
    return (
        <>
            <div className="home home--30" />
            <Hero />
            {/* <Filters /> */}
            <section className="container">
                <div className="flex">
                    {filterArr.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => setActiveFilter(item)}
                                style={{
                                    padding: '15px',
                                    border: '1px solid black',
                                    margin: '0 10px',
                                    cursor: 'pointer',
                                    transform: item.type === activefilter.type ? 'scale(1.05)' : '',
                                }}
                            >
                                {item.type}
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="section">
                <OfferList list={offerArr} />
            </section>
        </>
    )
}

export default OffersPage

const filterArr = [
    {
        type: 'React',
    },
    {
        type: 'Angular',
    },
    {
        type: 'Vue',
    },
    {
        type: 'Java',
    },
]
