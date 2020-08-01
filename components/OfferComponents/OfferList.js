import Offer from './Offer'

const OfferList = ({ list, filter }) => {
    return (
        <div className="columns">
            <div className="column">
                <div className="columns is-multiline">
                    {list?.map(item => {
                        if (!filter) return <Offer item={item} key={item.id} />

                        if (item.tech === filter) {
                            return <Offer item={item} key={item.id} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default OfferList
