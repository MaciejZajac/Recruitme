import { useForm } from 'react-hook-form';

const ContactPage = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    console.log(watch('example'));

    return (
        <section className='section'>
            <div className='container'>
                <div className='columns'>
                    <div className='column'>
                        <h1 className='title'>Skontaktuj się z nami</h1>
                        <h2 className='subtitle'>
                            Rozumiemy otoczenie biznesowe w którym działamy, dlatego proponujemy i wdrażamy rozwiązania
                            IT najlepsze dla Twoich potrzeb biznesowych.
                        </h2>
                    </div>
                    <div className='column'>
                        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                            <div className='field'>
                                <div className='control'>
                                    <input
                                        name='name'
                                        className={`input ${errors.name ? 'input-error' : null}`}
                                        type='text'
                                        placeholder='Imię'
                                        ref={register({ required: true, pattern: /^[A-Za-z]+$/i, maxLength: 30 })}
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <input
                                        name='surname'
                                        className={`input ${errors.name ? 'input-error' : null}`}
                                        type='text'
                                        placeholder='Nazwisko'
                                        ref={register({ required: true, pattern: /^[A-Za-z]+$/i, maxLength: 30 })}
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <textarea
                                        name='message'
                                        className='textarea'
                                        placeholder='Wiadomość...'
                                        ref={register({ required: true })}
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='checkbox'>
                                    <input
                                        name='agreement'
                                        type='checkbox'
                                        className={`form__checkbox ${errors.agreement ? 'form__checkbox-error' : null}`}
                                        ref={register({ required: true })}
                                    />
                                    *Tak, zapoznałem/am się z <a href='#'>Polityką Prywatności</a>
                                </label>
                            </div>

                            <button type='submit' className='button button--form'>
                                Primary
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
