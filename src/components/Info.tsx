import React from 'react';

import AuthorLogo from './../assets/images/user.png';

const Info = () => {
    return (
        <div className='info-container'>
            <h2 className='section-header'>Personal</h2>
            <section className='info-image-section'>
                <img src={AuthorLogo} alt='Author Logo'  />
            </section>
            <section className='info-detail-section'>
                <article className='info-detail'>
                    <h4>Name:</h4>
                    <p>Foster Z</p>
                </article>
                <article className='info-detail'>
                    <h4>Age:</h4>
                    <p>Foster Z</p>
                </article>
                <article className='info-detail'>
                    <h4>Address:</h4>
                    <p>Foster Z</p>
                </article>
                <article className='info-detail'>
                    <h4>Email:</h4>
                    <p>fosterunlimited0123@gmail.com</p>
                </article>
            </section>
        </div>
    )
}
export default Info;