const { default: Link } = require('next/link')

const Offer = ({ item }) => {
    let wynagrodzenie = ''
    if (item.salaryFrom) {
        wynagrodzenie += 'Od ' + item.salaryFrom + ' zł '
    }
    if (item.salaryTo) {
        wynagrodzenie += 'do ' + item.salaryTo + ' zł'
    }

    return (
        <Link href="/offer/[id]" as={`/offer/${item.id}`}>
            <a className="column is-half-tablet is-one-third-desktop">
                <div>
                    <div className="offer">
                        <strong>Pozycja:</strong> {item.position}
                        <br />
                        <strong>Wynagrodzenie:</strong> {wynagrodzenie}
                        <br />
                        <strong>Doświadczenie:</strong> {item.experience} rok
                        <br />
                        <strong>Lokalizacja:</strong> {item.city}
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Offer
