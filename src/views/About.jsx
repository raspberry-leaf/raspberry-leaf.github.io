import React from "react";
import PageTop from "../components/PageTop";
import ico_truck from "../img/ico_truck.svg"

function About() {
    return (
        <div className="about">
            <PageTop title={"О нас"}
                     imageName={"about"}/>
            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center">
                            <a href="https://vimeo.com/45830194"
                               className="icon popup-vimeo d-flex justify-content-center align-items-center">
                                <span className="icon-play"></span>
                            </a>
                        </div>
                        <div className="col-md-7 py-5 wrap-about pb-md-5 ">
                            <div className="heading-section-bold mb-5 mt-md-5">
                                <div className="ml-md-0">
                                    <h2 className="mb-4">Raspberry <br/>Leaf <br/> <span>онлайн магазин</span></h2>
                                </div>
                            </div>
                            <div className="pb-md-5">
                                <p>Raspberry Leaf - это небольшая творческая мастерская по созданию наборов для новорождённых.</p>
                                <p>Меня зовут Елена и я идейный вдохновитель Raspberry Leaf. Реализацией занимается мастер своего дела со стажем работы более 35 лет. Она создаёт выкройки, шьёт комплекты, проверяет все строчки, следит за качеством тканей и наполнителей, а также вышивает в ручную каждого зайчонка.</p>
                                <p>Вязаные грызунки и погремушки Raspberry Leaf - это моих рук дело. Вязать люблю с детства. Меня этому научила моя бабушка, а я этот навык довела до совершенства. </p>
                                <p>Наши наборы радуют не только малышей, но и их родителей. Мы создаём комплекты высокого качества со всем необходимым в первые месяцы жизни новорождённого. Наборы не только эстетически красивы, но и экологичны и практичны в использовании. </p>
                                <p>С Raspberry Leaf вы можете забыть о дополнительных расходах на доставку. Доставка по России всегда БЕСПЛАТНАЯ.</p>
                                <p>Если появились вопросы, то со мной всегда можно связаться в нашем Instagram или оформив заказ на сайте.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section bg-light ftco-services">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ">
                            <h1 className="big">Наши</h1>
                            <h2>Преимущества</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-4 text-center d-flex align-self-stretch ">
                            <div className="media block-6 services">
                                <div className="icon mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M89.334 47.69 79.145 36.229a2.636 2.636 0 0 0-1.97-.885h-9.356v-6.467c0-3.053-2.1-5.537-4.681-5.537H31.866c-2.581 0-4.681 2.484-4.681 5.537v30.23c0 1.758 1.245 3.188 2.774 3.188h7.277c.563 2.495 2.794 4.365 5.457 4.365s4.893-1.87 5.457-4.365h27.211c.563 2.495 2.794 4.365 5.457 4.365s4.894-1.87 5.457-4.365h1.089A2.64 2.64 0 0 0 90 59.659V49.441c0-.644-.236-1.266-.666-1.751zm-2.561.129H74.619a.463.463 0 0 1-.463-.462v-5.44c0-.255.208-.463.463-.463h6.495l5.659 6.365zM42.693 64.66a3.602 3.602 0 0 1-3.598-3.598c0-1.984 1.614-3.599 3.598-3.599s3.598 1.614 3.598 3.599a3.602 3.602 0 0 1-3.598 3.598zm23.125-4.365H48.232c-.376-2.724-2.713-4.831-5.539-4.831s-5.163 2.107-5.539 4.831h-7.195c-.366 0-.774-.487-.774-1.188v-30.23c0-1.95 1.203-3.537 2.681-3.537h31.272c1.479 0 2.681 1.587 2.681 3.537v31.418zm14.999 4.365a3.603 3.603 0 0 1-3.598-3.598 3.603 3.603 0 0 1 3.598-3.599 3.603 3.603 0 0 1 3.599 3.599 3.602 3.602 0 0 1-3.599 3.598zm6.547-4.365h-1.007c-.376-2.724-2.714-4.831-5.54-4.831s-5.163 2.107-5.539 4.831h-7.46V37.344h9.356c.182 0 .354.078.476.214l1.686 1.896h-4.717a2.466 2.466 0 0 0-2.463 2.463v5.44a2.465 2.465 0 0 0 2.463 2.462H88v9.84a.636.636 0 0 1-.636.636zM21.207 52.942H8.615a1 1 0 1 1 0-2h12.592a1 1 0 1 1 0 2zM21.207 46.031H4.617a1 1 0 0 1 0-2h16.59a1 1 0 0 1 0 2zM21.207 39.121H1a1 1 0 0 1 0-2h20.207a1 1 0 0 1 0 2z" /><path d="m47.407 51.363-.487-.271c-2.198-1.226-5.625-4.11-7.051-5.936-3.075-3.936-3.68-8.629-1.439-11.161 1.085-1.226 2.606-1.933 4.285-1.991 1.646-.06 3.283.522 4.693 1.645 1.41-1.123 3.042-1.717 4.691-1.645 1.679.058 3.2.765 4.286 1.99 2.24 2.532 1.635 7.226-1.439 11.161-1.427 1.826-4.854 4.71-7.051 5.936l-.488.272zM42.935 34l-.151.002c-1.125.039-2.139.507-2.856 1.317-1.576 1.781-.924 5.48 1.518 8.604 1.174 1.504 3.979 3.902 5.962 5.133 1.982-1.231 4.787-3.629 5.962-5.133 2.44-3.125 3.094-6.824 1.518-8.604-.718-.811-1.732-1.278-2.857-1.317-1.348-.036-2.762.554-3.921 1.693l-.701.689-.701-.689C45.59 34.598 44.256 34 42.935 34z" /></svg>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Бесплатная доставка</h3>
                                    <p>Доставка по России всегда бесплатно.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center d-flex align-self-stretch ">
                            <div className="media block-6 services">
                                <div className="icon mb-3">
                                    <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M423.004 48.568c-20.969-10.156-42.5-15.203-63.533-15.203-38.391 0-75.078 16.797-103.469 49.985-28.391-33.172-65.079-49.985-103.47-49.985-21.032 0-42.563 5.047-63.532 15.203C13.608 89.443-22.298 182.664 14.655 280.305c46.813 129.721 216.628 190.424 241.347 198.33 24.719-7.906 194.534-68.609 241.346-198.33 36.955-97.641 1.047-190.862-74.344-231.737zm-93.424 193.83-.016-.016a10.627 10.627 0 0 0 4.406-10.485c-.984-5.797-6.469-9.719-12.281-8.75a10.84 10.84 0 0 0-4.344 1.781c-1.297.906-32.031 22.657-56.656 63.579a232.07 232.07 0 0 0-7.641 13.844c-6.5-8.656-10.703-18.891-12.125-29.906-2.188-16.859 2.313-33.563 12.672-47.032 20.407-26.547 58.016-41.734 85.969-49.813 14.891-4.297 28.736-7.079 39.299-8.829 1 10.438 1.844 24.204 1.563 39.454-.547 29.344-5.516 69.954-26.08 96.672-12.141 15.813-30.563 24.876-50.547 24.876-12.359 0-24.188-3.516-34.484-10.188a199.66 199.66 0 0 1 9.234-17.36c22.234-37.295 50.75-57.623 51.031-57.827zm-110.517 20.516c-4.125-4.766-6.891-7.875-7.156-8.156a10.588 10.588 0 0 0-7.359-3.547c-5.891-.344-10.922 4.156-11.25 10.047a10.624 10.624 0 0 0 2.703 7.719c.219.234 11.204 12.547 22.547 26.344 6.579 7.984 11.36 14.125 14.829 18.828a44.732 44.732 0 0 1-16.157 3.016c-12.156 0-23.532-4.781-32.032-13.484-13.656-13.984-23.203-37.781-27.578-68.813-1.328-9.469-2-18.328-2.297-25.703 9.906.641 22.609 2.016 35.875 4.828 14.11 3.016 26.485 7.188 36.767 12.359a84.64 84.64 0 0 0-8.892 36.562zm271.535-54.86c-.594 21.375-5.047 43.141-13.203 64.704l-.047.156-.063.141c-9.75 27-26.359 52.954-49.375 77.158-19.281 20.266-43.141 39.406-70.893 56.891-39.891 25.141-77.859 40.563-96.328 47.328-12.047-40.969-11.86-80.078.531-116.798a84.628 84.628 0 0 0 42.578 11.47c25.5 0 50.719-11.423 67.471-33.205 46.641-60.656 25.984-173.064 25.984-173.064s-108.955 8.531-157.393 65.642c-36.891-19.516-85.22-21.203-100.798-21.203-3.25 0-5.063.078-5.063.078s-5.641 88.672 35.922 131.236c12.953 13.266 30.125 19.923 47.297 19.923a65.794 65.794 0 0 0 22.688-4.032c-3.172 10.079-5.578 20.345-7.141 30.767-4.047 27.078-2.578 55.172 4.359 83.719-20.454-8.266-50.704-22.047-82.142-41.859-27.75-17.484-51.61-36.625-70.892-56.891-23.016-24.204-39.641-50.158-49.376-77.158l-.063-.141-.047-.156c-8.156-21.563-12.609-43.329-13.203-64.704-.578-20.219 2.281-39.75 8.5-58.048 6.031-17.781 15.063-33.938 26.844-48.031 11.719-14.016 25.844-25.61 41.985-34.423 17.766-8.531 35.86-12.859 53.798-12.859 16.141 0 31.719 3.531 46.313 10.484 15.157 7.219 28.938 18 40.938 32.048l16.219 18.953 16.204-18.953c12.016-14.047 25.797-24.829 40.953-32.048 14.594-6.953 30.172-10.484 46.313-10.484 17.939 0 36.033 4.328 53.799 12.859 16.141 8.813 30.266 20.407 41.984 34.423 11.781 14.094 20.813 30.25 26.844 48.031 6.221 18.296 9.081 37.827 8.503 58.046z"/></svg> </div>
                                <div className="media-body">
                                    <h3 className="heading">Экологичные материалы</h3>
                                    <p>Наборы для малышей создаём только из натуральных материалов.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center d-flex align-self-stretch">
                            <div className="media block-6 services">
                                <div className="icon mb-3">
                                    <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M38.163 58.594c-5.174 0-9.381 3.396-9.381 7.572 0 4.175 4.207 7.572 9.381 7.572 5.172 0 9.379-3.396 9.379-7.572s-4.207-7.572-9.379-7.572zm0 13.107c-4.05 0-7.345-2.481-7.345-5.535 0-3.054 3.295-5.535 7.345-5.535 4.048 0 7.343 2.481 7.343 5.535 0 3.053-3.295 5.535-7.343 5.535zm-7.297-22.263c0-4.175-4.207-7.572-9.381-7.572s-9.381 3.396-9.381 7.572 4.207 7.574 9.381 7.574 9.381-3.399 9.381-7.574zm-9.381 5.537c-4.05 0-7.345-2.483-7.345-5.537 0-3.052 3.295-5.535 7.345-5.535s7.345 2.483 7.345 5.535c0 3.054-3.295 5.537-7.345 5.537zm13.95-16.767c5.174 0 9.381-3.398 9.381-7.574s-4.207-7.572-9.381-7.572-9.381 3.396-9.381 7.572 4.208 7.574 9.381 7.574zm0-13.109c4.05 0 7.345 2.483 7.345 5.535 0 3.054-3.295 5.537-7.345 5.537s-7.345-2.483-7.345-5.537c0-3.052 3.295-5.535 7.345-5.535zm35.935 6.678c0-4.175-4.207-7.574-9.381-7.574-5.172 0-9.379 3.398-9.379 7.574s4.207 7.572 9.379 7.572c5.174 0 9.381-3.396 9.381-7.572zm-16.724 0c0-3.054 3.295-5.537 7.343-5.537s7.345 2.483 7.345 5.537c0 3.052-3.297 5.535-7.345 5.535s-7.343-2.483-7.343-5.535zm39.323-18.771a43.89 43.89 0 0 1-.243-1.074 1.017 1.017 0 0 0-1.933-.203c-.744 1.728-2.573 2.8-4.513 3.937-3.162 1.854-6.98 4.183-5.164 10.106-.001.002-.005.002-.006.004l-.802 1.39C73.244 19.05 60.81 14.203 47.713 14.203 24.161 14.203 5 29.32 5 47.901c0 18.572 19.139 33.678 42.671 33.696l.004.002.022-.001.016.001.003-.001a36.885 36.885 0 0 0 1.661-.05l-1.173 2.409a3.445 3.445 0 0 0 1.37 4.474c.539.31 1.131.457 1.718.457a3.468 3.468 0 0 0 2.883-1.523l5.179-7.668c7.141-2.436 12.585-7.121 12.585-13.531 0-1.298-.476-2.499-1.262-3.529l3.933-5.713a8.619 8.619 0 0 0 4.197 1.093c2.489 0 4.841-1.031 6.271-2.546.002-.002.006-.001.008-.003l.01-.012.013-.011c.002-.002.001-.006.003-.008 4.318-4.346 5.451-11.709 2.876-18.775-.005-.013-.021-.016-.027-.029-.005-.013.005-.027-.001-.04a29.52 29.52 0 0 0-2.123-3.861l.588-1.779 1.02-1.767c2.565-.302 4.545-1.265 5.816-2.95 2.896-3.837 1.472-9.948.708-13.23zM69.196 61.197c-1.22-.899-2.762-1.496-4.474-1.682-.042-.005-.067-.001-.11-.001-.73 0-1.421-.157-2.074-.329l7.83-16.071 8.079 4.644-9.251 13.439zm-10.869-6.433c0-2.593 2.819-4.702 6.283-4.702.037 0 .066.009.103.009l-4.053 8.321c-1.412-.863-2.333-2.16-2.333-3.628zm21.01-8.846-7.817-4.493 10.436-11.684 2.291 1.32-4.91 14.857zm5.975-17.117-.227.396-1.945-1.125.227-.394 1.945 1.123zM52.489 86.228a1.428 1.428 0 0 1-1.899.433 1.394 1.394 0 0 1-.557-1.813l1.694-3.479a36.96 36.96 0 0 0 4.571-.781l-3.809 5.64zm-4.792-6.666C25.274 79.555 7.036 65.354 7.036 47.901c0-17.459 18.247-31.662 40.677-31.662 12.674 0 24.675 4.695 32.36 12.555L69.179 40.987a.91.91 0 0 0-.155.233l-3.362 6.902c-.342-.036-.671-.096-1.052-.096-4.585 0-8.317 3.022-8.317 6.738 0 3.413 3.156 6.21 7.22 6.65.042.005.075.002.118.002 3.464 0 6.272 2.156 6.272 4.748 0 8.382-11.287 13.392-22.206 13.398zm38.385-42.171c2.262 6.235 1.287 12.918-2.436 16.638-.004.004-.002.012-.007.016-.005.005-.012.003-.017.008-1.365 1.465-4.751 2.779-7.847 1.177l4.976-7.228c.056-.08.095-.165.127-.256l4.123-12.483c.395.7.757 1.406 1.081 2.128zm5.553-12.386c-1.018 1.35-2.633 2.088-4.927 2.249l-2.481-1.432c-1.845-4.925.779-6.464 4.084-8.401 1.4-.821 2.831-1.66 3.937-2.802.652 2.978 1.423 7.696-.613 10.386z"/></svg>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Гармония цветовых сочетаний</h3>
                                    <p>Комплекты выполнены в приглушённых цветовых тонах. Все элементы сочетаются между собой.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;