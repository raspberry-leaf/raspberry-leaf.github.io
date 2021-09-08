import React from "react";
import PopularItems from "../components/PopularItems";

const Home = () => {
    return (
        <div className="home">
            <div >
                <div className="hero-wrap js-fullheight bgMain"></div>
                <section className="ftco-section ftco-no-pb ftco-no-pt bg-light homeSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-md py-3 wrap-about pb-md-3">
                                <div className="heading-section-bold mb-3 mt-md-3 mb-3">
                                    <div className="ml-md-0">
                                        <h2 className="mb-4">Raspberry <br/>Leaf <br/> <span>онлайн магазин</span></h2>
                                    </div>
                                </div>
                                <div className="pb-md-5">
                                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it
                                        came from it would have been rewritten a thousand times and everything that was
                                        left from its origin would be the word "and" and the Little Blind Text should
                                        turn around and return to its own, safe country. But nothing the copy said could
                                        convince her and so it didn’t take long until a few insidious Copy Writers
                                        ambushed her, made her drunk with Longe and Parole and dragged her into their
                                        agency, where they abused her for their.</p>
                                    <p>When she reached the first hills of the Italic Mountains, she had a last view
                                        back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet
                                        Village and the subline of her own road, the Line Lane. Pityful a rethoric
                                        question ran over her cheek, then she continued her way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <PopularItems/>
            </div>
        </div>
    );
}

export default Home;