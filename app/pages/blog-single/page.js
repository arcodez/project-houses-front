import React from "react";
import Layout from "@/app/components/Layout";

const BlogSingle = () => {
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
      {/*  <div id="preloader" /> */}
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

export default BlogSingle;
