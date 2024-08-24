import React from "react";

const BlogSingle = () => {
  return (
    <>
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
      {/* ======= Header/Navbar ======= */}
      <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <a className="navbar-brand text-brand" href="index.html">
            Estate<span className="color-b">Agency</span>
          </a>
          <div
            className="navbar-collapse collapse justify-content-center"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="property-grid.html">
                  Property
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="blog-grid.html">
                  Blog
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item " href="property-single.html">
                    Property Single
                  </a>
                  <a className="dropdown-item active" href="blog-single.html">
                    Blog Single
                  </a>
                  <a className="dropdown-item " href="agents-grid.html">
                    Agents Grid
                  </a>
                  <a className="dropdown-item " href="agent-single.html">
                    Agent Single
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
          >
            <i className="bi bi-search" />
          </button>
        </div>
      </nav>
      {/* End Header/Navbar */}
      <main id="main">
        {/* ======= Intro Single ======= */}
        <section className="intro-single">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="title-single-box">
                  <h1 className="title-single">Book Cover Deisgn</h1>
                  <span className="color-text-a">News Single.</span>
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
                      Book Cover Deisgn
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* End Intro Single*/}
        {/* ======= Blog Single ======= */}
        <section className="news-single nav-arrow-b">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="news-img-box">
                  <img
                    src="assets/img/slide-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <div className="post-information">
                  <ul className="list-inline text-center color-a">
                    <li className="list-inline-item mr-2">
                      <strong>Author: </strong>
                      <span className="color-text-a">Morgan Jimenez</span>
                    </li>
                    <li className="list-inline-item mr-2">
                      <strong>Category: </strong>
                      <span className="color-text-a">Travel</span>
                    </li>
                    <li className="list-inline-item">
                      <strong>Date: </strong>
                      <span className="color-text-a">19 Apr. 2017</span>
                    </li>
                  </ul>
                </div>
                <div className="post-content color-text-a">
                  <p className="post-intro">
                    Sed porttitor lectus nibh. Lorem ipsum dolor sit amet,
                    consectetur
                    <strong>adipiscing</strong> elit. Vestibulum ac diam sit
                    amet quam vehicula elementum sed sit amet dui. Praesent
                    sapien massa, convallis a pellentesque nec, egestas non
                    nisi.
                  </p>
                  <p>
                    Proin eget tortor risus. Donec sollicitudin molestie
                    malesuada. Cras ultricies ligula sed magna dictum porta.
                    Pellentesque in ipsum id orci porta dapibus. Vestibulum ac
                    diam sit amet quam vehicula elementum sed sit amet dui.
                    Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Pellentesque in ipsum id orci porta dapibus. Curabitur non
                    nulla sit amet nisl tempus convallis quis ac lectus.
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Proin eget tortor risus. Curabitur non nulla sit
                    amet nisl tempus convallis quis ac lectus. Donec rutrum
                    congue leo eget malesuada. Quisque velit nisi.
                  </p>
                  <blockquote className="blockquote">
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                      <strong>Albert Vargas</strong>
                      <cite title="Source Title">Author</cite>
                    </footer>
                  </blockquote>
                  <p>
                    Donec rutrum congue leo eget malesuada. Curabitur aliquet
                    quam id dui posuere blandit. Vivamus suscipit tortor eget
                    felis porttitor volutpat. Quisque velit nisi, pretium ut
                    lacinia in, elementum id enim.
                  </p>
                </div>
                <div className="post-footer">
                  <div className="post-share">
                    <span>Share: </span>
                    <ul className="list-inline socials">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="bi bi-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="bi bi-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="bi bi-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                <div className="title-box-d">
                  <h3 className="title-d">Comments (4)</h3>
                </div>
                <div className="box-comments">
                  <ul className="list-comments">
                    <li>
                      <div className="comment-avatar">
                        <img src="assets/img/author-2.jpg" alt="" />
                      </div>
                      <div className="comment-details">
                        <h4 className="comment-author">Emma Stone</h4>
                        <span>18 Sep 2017</span>
                        <p className="comment-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolores reprehenderit, provident cumque ipsam
                          temporibus maiores quae natus libero optio, at qui
                          beatae ducimus placeat debitis voluptates amet
                          corporis.
                        </p>
                        <a href={3}>Reply</a>
                      </div>
                    </li>
                    <li className="comment-children">
                      <div className="comment-avatar">
                        <img src="assets/img/author-1.jpg" alt="" />
                      </div>
                      <div className="comment-details">
                        <h4 className="comment-author">Oliver Colmenares</h4>
                        <span>18 Sep 2017</span>
                        <p className="comment-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolores reprehenderit, provident cumque ipsam
                          temporibus maiores quae.
                        </p>
                        <a href={3}>Reply</a>
                      </div>
                    </li>
                    <li>
                      <div className="comment-avatar">
                        <img src="assets/img/author-2.jpg" alt="" />
                      </div>
                      <div className="comment-details">
                        <h4 className="comment-author">Emma Stone</h4>
                        <span>18 Sep 2017</span>
                        <p className="comment-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolores reprehenderit, provident cumque ipsam
                          temporibus maiores quae natus libero optio.
                        </p>
                        <a href={3}>Reply</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="form-comments">
                  <div className="title-box-d">
                    <h3 className="title-d"> Leave a Reply</h3>
                  </div>
                  <form className="form-a">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="inputName">Enter name</label>
                          <input
                            type="text"
                            className="form-control form-control-lg form-control-a"
                            id="inputName"
                            placeholder="Name *"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="inputEmail1">Enter email</label>
                          <input
                            type="email"
                            className="form-control form-control-lg form-control-a"
                            id="inputEmail1"
                            placeholder="Email *"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <label htmlFor="inputUrl">Enter website</label>
                          <input
                            type="url"
                            className="form-control form-control-lg form-control-a"
                            id="inputUrl"
                            placeholder="Website"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <label htmlFor="textMessage">Enter message</label>
                          <textarea
                            id="textMessage"
                            className="form-control"
                            placeholder="Comment *"
                            name="message"
                            cols={45}
                            rows={8}
                            required=""
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-a">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Blog Single*/}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <section className="section-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">EstateAgency</h3>
                </div>
                <div className="w-body-a">
                  <p className="w-text-a color-text-a">
                    Enim minim veniam quis nostrud exercitation ullamco laboris
                    nisi ut aliquip exea commodo consequat duis sed aute irure.
                  </p>
                </div>
                <div className="w-footer-a">
                  <ul className="list-unstyled">
                    <li className="color-a">
                      <span className="color-text-a">Phone .</span>{" "}
                      contact@example.com
                    </li>
                    <li className="color-a">
                      <span className="color-text-a">Email .</span> +54 356
                      945234
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">The Company</h3>
                </div>
                <div className="w-body-a">
                  <div className="w-body-a">
                    <ul className="list-unstyled">
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right" />{" "}
                        <a href="#">Site Map</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right" />{" "}
                        <a href="#">Legal</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right" />{" "}
                        <a href="#">Agent Admin</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right" />{" "}
                        <a href="#">Careers</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right" />{" "}
                        <a href="#">Affiliate</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right" />{" "}
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">International sites</h3>
                </div>
                <div className="w-body-a">
                  <ul className="list-unstyled">
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="#">Venezuela</a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="#">China</a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="#">Hong Kong</a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="#">Argentina</a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="#">Singapore</a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right" />{" "}
                      <a href="#">Philippines</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="nav-footer">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">About</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Property</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Blog</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="socials-a">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="bi bi-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="bi bi-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="bi bi-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="bi bi-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright-footer">
                <p className="copyright color-text-a">
                  © Copyright
                  <span className="color-a">EstateAgency</span> All Rights
                  Reserved.
                </p>
              </div>
              <div className="credits">
                {/*
      All the links in the footer should remain intact.
      You can delete the links only if you purchased the pro version.
      Licensing information: https://bootstrapmade.com/license/
      Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=EstateAgency
    */}
                Designed by{" "}
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End  Footer */}
      {/*  <div id="preloader" /> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
    </>
  );
};

export default BlogSingle;
