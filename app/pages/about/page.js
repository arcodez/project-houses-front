import Layout from "@/app/components/Layout";
import React from "react";

const About = () => {
  return (
    <Layout>
      {/* ======= Property Search Section ======= */}
      <div className="click-closed" />
      {/*/ Form Search Star /*/}
      <div className="box-collapse">
        <div className="title-box-d">
          <h3 className="title-d">Search Property</h3>
        </div>
        <span className="close-box-collapse right-boxed bi bi-x" />
        <div className="box-collapse-wrap form">
          <form className="form-a">
            <div className="row">
              <div className="col-md-12 mb-2">
                <div className="form-group">
                  <label className="pb-2" htmlFor="Type">
                    Keyword
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-a"
                    placeholder="Keyword"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="Type">
                    Type
                  </label>
                  <select
                    className="form-control form-select form-control-a"
                    id="Type"
                  >
                    <option>All Type</option>
                    <option>For Rent</option>
                    <option>For Sale</option>
                    <option>Open House</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="city">
                    City
                  </label>
                  <select
                    className="form-control form-select form-control-a"
                    id="city"
                  >
                    <option>All City</option>
                    <option>Alabama</option>
                    <option>Arizona</option>
                    <option>California</option>
                    <option>Colorado</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="bedrooms">
                    Bedrooms
                  </label>
                  <select
                    className="form-control form-select form-control-a"
                    id="bedrooms"
                  >
                    <option>Any</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="garages">
                    Garages
                  </label>
                  <select
                    className="form-control form-select form-control-a"
                    id="garages"
                  >
                    <option>Any</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="bathrooms">
                    Bathrooms
                  </label>
                  <select
                    className="form-control form-select form-control-a"
                    id="bathrooms"
                  >
                    <option>Any</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="form-group mt-3">
                  <label className="pb-2" htmlFor="price">
                    Min Price
                  </label>
                  <select
                    className="form-control form-select form-control-a"
                    id="price"
                  >
                    <option>Unlimite</option>
                    <option>$50,000</option>
                    <option>$100,000</option>
                    <option>$150,000</option>
                    <option>$200,000</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-b">
                  Search Property
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End Property Search Section */}&gt;
      <main id="main">
        {/* =======Intro Single ======= */}
        <section className="intro-single">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="title-single-box">
                  <h1 className="title-single">Our Amazing Agents</h1>
                  <span className="color-text-a">Grid Properties</span>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <nav
                  aria-label="breadcrumb"
                  className="breadcrumb-box d-flex justify-content-lg-end"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Agents Grid
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* End Intro Single*/}
        {/* ======= Agents Grid ======= */}
        <section className="agents-grid grid">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img
                      src="assets/img/agent-4.jpg"
                      alt=""
                      className="img-d img-fluid"
                    />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="#" className="link-two">
                            Margaret Sotillo
                            <br /> Escala
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed
                        magna dictum porta two.
                      </p>
                      <div className="info-agents color-a">
                        <p>
                          <strong>Phone: </strong> +54 356 945234
                        </p>
                        <p>
                          <strong>Email: </strong> agents@example.com
                        </p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-instagram"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-linkedin"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img
                      src="assets/img/agent-2.jpg"
                      alt=""
                      className="img-d img-fluid"
                    />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="#" className="link-two">
                            Margaret Sotillo
                            <br /> Escala
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed
                        magna dictum porta two.
                      </p>
                      <div className="info-agents color-a">
                        <p>
                          <strong>Phone: </strong> +54 356 945234
                        </p>
                        <p>
                          <strong>Email: </strong> agents@example.com
                        </p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-instagram"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-linkedin"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img
                      src="assets/img/agent-3.jpg"
                      alt=""
                      className="img-d img-fluid"
                    />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="#" className="link-two">
                            Margaret Sotillo
                            <br /> Escala
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed
                        magna dictum porta two.
                      </p>
                      <div className="info-agents color-a">
                        <p>
                          <strong>Phone: </strong> +54 356 945234
                        </p>
                        <p>
                          <strong>Email: </strong> agents@example.com
                        </p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-instagram"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-linkedin"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img
                      src="assets/img/agent-5.jpg"
                      alt=""
                      className="img-d img-fluid"
                    />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="#" className="link-two">
                            Margaret Sotillo
                            <br /> Escala
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed
                        magna dictum porta two.
                      </p>
                      <div className="info-agents color-a">
                        <p>
                          <strong>Phone: </strong> +54 356 945234
                        </p>
                        <p>
                          <strong>Email: </strong> agents@example.com
                        </p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-instagram"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-linkedin"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img
                      src="assets/img/agent-1.jpg"
                      alt=""
                      className="img-d img-fluid"
                    />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="#" className="link-two">
                            Margaret Sotillo
                            <br /> Escala
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed
                        magna dictum porta two.
                      </p>
                      <div className="info-agents color-a">
                        <p>
                          <strong>Phone: </strong> +54 356 945234
                        </p>
                        <p>
                          <strong>Email: </strong> agents@example.com
                        </p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-instagram"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-linkedin"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img
                      src="assets/img/agent-6.jpg"
                      alt=""
                      className="img-d img-fluid"
                    />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="#" className="link-two">
                            Margaret Sotillo
                            <br /> Escala
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed
                        magna dictum porta two.
                      </p>
                      <div className="info-agents color-a">
                        <p>
                          <strong>Phone: </strong> +54 356 945234
                        </p>
                        <p>
                          <strong>Email: </strong> agents@example.com
                        </p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-instagram"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i
                                className="bi bi-linkedin"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <nav className="pagination-a">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1}>
                        <span className="bi bi-chevron-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item next">
                      <a className="page-link" href="#">
                        <span className="bi bi-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* End Agents Grid*/}
      </main>
      {/* End #main */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
    </Layout>
  );
};

export default About;
