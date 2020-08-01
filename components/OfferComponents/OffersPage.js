import { offerArr } from './ExampleRes'
import OfferList from './OfferList'
import Hero from '../Hero'
// import Filters from './Filters'

const OffersPage = () => {
    const [activefilter, setActiveFilter] = React.useState('')

    const handleChangeFilter = type => {
        if (activefilter === type) {
            setActiveFilter('')
        } else {
            setActiveFilter(type)
        }
    }
    return (
        <>
            <div className="home home--30" />
            <Hero />
            <section className="container">
                <div className="flex flex--wrap">
                    {filterArr.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => handleChangeFilter(item.type)}
                                className={`offer__box ${item.type === activefilter ? 'offer__box--active' : ''}`}>
                                {item.type}
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="section">
                <OfferList list={offerArr} filter={activefilter} />
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
