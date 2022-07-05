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
                                    <p>Raspberry Leaf - это стильные подарочные наборы для малышей и их родителей.</p>
                                    <p>В нашей мастерской вы найдёте уникальные и неповторимые комплекты ручной работы. Наборы состоят из натуральных и экологичных материалов.
                                        Игрушки, грызунки, пелёнки и прочие элементы создаются мастером с опытом работы более 35 лет. Она разрабатывает выкройки, шьёт комплекты, проверяет все строчки, следит за качеством тканей и наполнителей, а также вышивает в ручную каждого зайчонка.
                                    </p>
                                    <p>С Raspberry Leaf вы подарите не просто комплект для новорождённого, но и впечатление на долгие годы.</p>
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