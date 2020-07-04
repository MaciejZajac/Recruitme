import Link from 'next/link';

const AboutPage = () => {
    return (
        <>
            <div className='home home--30'>
                <div className='about__container'>
                    <h2 className='about__title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                </div>
            </div>
            <section className='section'>
                <div className='columns'>
                    <div className='column'>
                        <div className='container'>
                            <h1 className='title'>Kim jesteśmy ?</h1>
                            <h2 className='subtitle'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel pretium turpis, vitae
                                blandit ex. Quisque sodales velit nec enim consequat consectetur. Cras lacinia rhoncus
                                purus, at lobortis velit ornare luctus. Duis semper odio neque, a vulputate velit
                                commodo quis. Morbi auctor pharetra risus, sodales pulvinar metus auctor ac.
                            </h2>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='about__image' />
                    </div>
                </div>
            </section>
            {/* <div className='home home--30'>
                <div className='about__container'>
                    <h2 className='about__title'>Skąd pomysł na taki biznes?</h2>
                    <div className=''>
                        <h1 className='title'>Kim jesteśmy ?</h1>
                        <h2 className='subtitle'>
                            Działamy w branży IT od 2005 roku. Współpracujemy z globalnymi korporacjami, a także innymi
                            firmami, głównie z Europy. Specjalizujemy się w tworzeniu oprogramowania, ale mamy również
                            duże doświadczenie w outsourcingu specjalistów i zespołów IT, a także w modelu
                            Build-Operate-Transfer.
                            <br />
                            Jesteśmy aktywnym członkiem rynku IT w Krakowie i Polsce, uczestniczymy w wydarzeniach
                            branżowych jak i sami je organizujemy.
                        </h2>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default AboutPage;
