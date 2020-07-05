const OfferPage = ({ obj }) => {
    return (
        <>
            <div className='home home--30' />
            <section className='section'>
                <div className='columns' style={{ marginTop: '-120px' }}>
                    <div className='column'>
                        <div className='box'>
                            <article className='media'>
                                <div className='media-content'>
                                    <div className='content'>
                                        <p>
                                            <strong>{obj.position}</strong>
                                            <br />
                                            do 115 PLN/h (B2B) do 14500 PLN
                                            (UOP)
                                        </p>
                                    </div>
                                    <nav className='level is-mobile'>
                                        <div className='level-left'>
                                            <span className='icon is-small'>
                                                <i
                                                    className='fas fa-map-marker-alt'
                                                    aria-hidden='true'
                                                ></i>
                                            </span>
                                            Kraków
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className='column'></div>
                </div>
                <div className='columns '>
                    <div className='column'>
                        <div className='container pb-6'>
                            <h1 className='title'>Project</h1>
                            <p>
                                Developing modules and algorithms that collect
                                and process data for autonomous driving systems
                                e.g. sensing and perception, calibration of
                                sensing setup, motion controller, trajectory
                                planning, ODD implementation, driver state,
                                degradation modes, various algorithms
                                optimization and adjustment.
                            </p>
                        </div>

                        <div className='container pb-6'>
                            <h1 className='title'>Must have</h1>
                            <ul className='offer__list'>
                                <li>
                                    MSc degree in Electronics or Computer
                                    Science or related
                                </li>
                                <li>
                                    Very good knowledge in C programming
                                    language
                                </li>
                                <li>
                                    Minimum 2 years of experience on similar
                                    position and minimum 5 years for senior
                                    position
                                </li>
                                <li>
                                    Ability to speak, read, and write English
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='container pb-6'>
                            <h1 className='title'>Responsibilities</h1>
                            <ul className='offer__list'>
                                <li>
                                    Implementation, configuration and
                                    maintenance of embedded software
                                </li>
                                <li>
                                    Collecting and analyzing software
                                    requirements, preparing software design
                                    documentation, programming software modules,
                                    preparing and performing tests to verify
                                    software work products
                                </li>
                                <li>Troubleshooting</li>
                                <li>
                                    Continuous development of professional
                                    qualifications
                                </li>
                                <li>
                                    Co-operation with local and remote teams
                                </li>
                                <li>
                                    Follow existing standards in software
                                    development process
                                </li>
                            </ul>
                        </div>
                        <div className='container pb-6'>
                            <h1 className='title'>Nice to have</h1>
                            <ul className='offer__list'>
                                <li>
                                    Prior experience in designing and
                                    programming microcontrollers and processors
                                </li>
                                <li>
                                    Knowledge of SW engineering tools supporting
                                    software production process
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OfferPage;
