import React from "react";

const Crausol = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              height="300"
              width="1200"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FY6SRsC6SZmKT3i2DOlSLMcqKu8q4IL_vg&usqp=CAU"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h2>Welcome </h2>
              <p>
                new cat
              </p>
              <button className="btn btn-danger ">Technology</button>
              <button className="btn btn-primary ">Web</button>
              <button className="btn btn-success ">techfun</button>
            </div>
          </div>
          <div class="carousel-item">
            <img
            height="300"
              width="1200"
              src="https://www.thoughtco.com/thmb/G9vU9zzR6Gffq9rpvJVeZ2YfO28=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/warning--data-transfer-in-progress-507065943-59c6d2a70d327a001141794d-5bb792f246e0fb0051a88f9c.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
            <h2>Welcome </h2>
              <p>
                new cat
              </p>
              <button className="btn btn-danger">Technology</button>
              <button className="btn btn-primary">Web</button>
              <button className="btn btn-success">techfun</button>
            </div>
          </div>
          <div class="carousel-item">
            <img
            height="300"
              width="1200"
              src="https://static.javatpoint.com/computer/images/what-is-computer-programming.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
            <h2>Welcome </h2>
              <p>
                new cat
              </p>
              <button className="btn btn-danger">Technology</button>
              <button className="btn btn-primary">Web</button>
              <button className="btn btn-success">techfun</button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Crausol;