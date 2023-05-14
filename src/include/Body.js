const Body = () => {
    return(
        <>
        <article className="slider">
            <img src="images/p-images/slide01.jpg" alt=""/>
        </article>
        <section className="content">

            <section className="display-section">
                <div className="container">
                    <h2 className="sec-tit">WE ARE</h2>
                    <p className="desc">
                    Adipisicing dolor minim ipsum non sit officia commodo labore nostrud deserunt laborum commodo. <br/>Amet magna pariatur irure duis. Cupidatat anim elit nulla anim amet ex velit ea.
                    </p>
                </div>    
            </section>

            <section className="promotion-section">
                <div className="container">
                    <ul class="promo-list">
                        
                        <li>
                            <a href="#">
                                <img src="images/s-images/promo01.png" alt=""/>
                                <h3>HOME</h3>
                                <p>Ut nulla mollit et cupidatat consectetur tempor consectetur tempor dolore ea aute amet Lorem adipisicing.</p>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="images/s-images/promo02.png" alt=""/>
                                <h3>WE ARE</h3>
                                <p>Ut nulla mollit et cupidatat consectetur tempor consectetur tempor dolore ea aute amet Lorem adipisicing.</p>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="images/s-images/promo03.png" alt=""/>
                                <h3>WORK</h3>
                                <p>Ut nulla mollit et cupidatat consectetur tempor consectetur tempor dolore ea aute amet Lorem adipisicing.</p>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="images/s-images/promo04.png" alt=""/>
                                <h3>BLOG</h3>
                                <p>Ut nulla mollit et cupidatat consectetur tempor consectetur tempor dolore ea aute amet Lorem adipisicing.</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <hr className="divider"/>

            <section className="work-section cfixed">
                <h2 className="sec-tit">work</h2>
                <ul className="work-list">
                
                <li>
                    <a href="#">
                        <div className="info">
                            <h3>Running</h3>
                            <span>web/print</span>
                        </div>
                        <img src="images/p-images/work01.jpg" alt=""/>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <div className="info">
                            <h3>Rugby</h3>
                            <span>web/print</span>
                        </div>
                        <img src="images/p-images/work02.jpg" alt=""/>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <div className="info">
                            <h3>Weight</h3>
                            <span>web/print</span>
                        </div>
                        <img src="images/p-images/work03.jpg" alt=""/>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <div className="info">
                            <h3>Marathon</h3>
                            <span>web/print</span>
                        </div>
                        <img src="images/p-images/work04.jpg" alt=""/>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <div className="info">
                            <h3>Boxing</h3>
                            <span>web/print</span>
                        </div>
                        <img src="images/p-images/work05.jpg" alt=""/>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <div className="info">
                            <h3>Ice hockey</h3>
                            <span>web/print</span>
                        </div>
                        <img src="images/p-images/work06.jpg" alt=""/>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <div className="info">
                            <h3>Skate Board</h3>
                            <span>web/print</span>
                        </div>
                        <img src="images/p-images/work07.jpg" alt=""/>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <div className="info">
                            <h3>Basketball</h3>
                            <span>web/print</span>
                        </div>
                        <img src="images/p-images/work08.jpg" alt=""/>
                    </a>
                </li>

                </ul>
            </section>

            <hr class="m-divider"/>

            <section className="blog-section">
                <div className="container">
                    <h2 className="sec-tit">
                    Blog
                    </h2>
                    <ul className="blog-list">

                        <li>
                            <a href="#">
                                <img src="images/p-images/blog01.jpg" alt=""/>
                            </a>
                            <time datetime="2016-10-30">oct 30, 2016</time>
                            <a href="#">
                                <h3>Incididunt eu consequat enim minim esse adipisicing ipsum veniam sit.</h3>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="images/p-images/blog02.jpg" alt=""/>
                            </a>
                            <time datetime="2016-10-30">oct 30, 2016</time>
                            <a href="#">
                                <h3>Incididunt eu consequat enim minim esse adipisicing ipsum veniam sit.</h3>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="images/p-images/blog03.jpg" alt=""/>
                            </a>
                            <time datetime="2016-10-30">oct 30, 2016</time>
                            <a href="#">
                                <h3>Incididunt eu consequat enim minim esse adipisicing ipsum veniam sit.</h3>
                            </a>
                        </li>


                    </ul>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <h2 className="sec-tit">CONTACT</h2>
                    <div className="form-box">
                        <form action="" method="post">
                            <fieldset className="cfixed">
                                <legend className="blind">
                                    contact us
                                </legend>

                                <div className="form">

                                    <label for="name" className="blind">
                                        name
                                    </label>
                                    <input type="text" id="name" placeholder="Name"/>

                                    <label for="phone" className="blind">
                                        phone
                                    </label>
                                    <input type="text" id="phone" placeholder="phone"/>

                                    <label for="email" className="blind">
                                        email
                                    </label>
                                    <input type="email" id="email" placeholder="email"/>

                                </div>

                                <div className="textarea">
                                    <label for ="message" className="blind">
                                        message
                                    </label>
                                    <textarea name="message" id="message" placeholder="message"></textarea>
                                </div>
                            </fieldset>
                            <div className="send-btn">
                                <button>send massage</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </section>
        </>
    )
}
export default Body;