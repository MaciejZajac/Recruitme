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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='field'>
                                <label className='label'>Imię</label>
                                <div className='control'>
                                    <input
                                        name='name'
                                        className='input'
                                        type='text'
                                        placeholder='Imię'
                                        ref={register({ required: true, pattern: /^[A-Za-z]+$/i, maxLength: 30 })}
                                    />
                                </div>
                            </div>
                            <div className='field'>
                                <label className='label'>Nazwisko</label>
                                <div className='control'>
                                    <input
                                        name='surname'
                                        className='input'
                                        type='text'
                                        placeholder='Nazwisko'
                                        ref={register({ required: true, pattern: /^[A-Za-z]+$/i, maxLength: 30 })}
                                    />
                                </div>
                            </div>
                            <div class='field'>
                                <label class='label'>Wiadomość</label>
                                <div class='control'>
                                    <textarea
                                        name='message'
                                        class='textarea'
                                        placeholder='Wiadomość...'
                                        ref={register({ required: true })}
                                    ></textarea>
                                </div>
                            </div>

                            {errors.exampleRequired && <span>This field is required</span>}

                            <button type='submit' class='button is-primary'>
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
