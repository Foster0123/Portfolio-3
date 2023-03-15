import React from 'react';

import GlobalBg from './../assets/images/grid.svg';

const Intro = () => {
    function toggleReadMore() {
        const rms: any = document.getElementById("readmore")
        const rmc: any = document.getElementById("readmore-content")

        rms.classList.toggle("hide-readmore");
        rmc.classList.toggle("hide-readmore-content");
    }
    return (
        <div className="intro-section"  id="intro" style={{backgroundImage: `url('${GlobalBg}')`}}>
            <section className="intro-details-section" >
                <h1 className="intro-title" >I Am Foster Z,</h1>
                <h2><em className="emphasize" ><p>Enthusiastic & Passionate</p></em> Developer</h2>
                <section className="readmore-section" id="readmore">
                    <p className="readmore-content" id="readmore-content">
                        I love building exotic full-stack applications which are performant, scalable, stable, responsive & highly user friendly
                    </p>
                    <button className="readmore-button"  onClick={toggleReadMore}>
                        Read more
                    </button>
                </section>
            </section>
        </div>
    )
}
export default Intro;