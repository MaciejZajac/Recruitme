import { useEffect } from 'react'

const Filters = () => {
    const [activefilter, setActiveFilter] = React.useState('')
    useEffect(() => {
        console.log('activefilter', activefilter)
    }, [activefilter])

    return (
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
                                transform: item.type === activefilter.type ? 'scale(1.05)' : '',
                            }}
                        >
                            {item.type}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

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

export default Filters
