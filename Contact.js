import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <div className="container mb-4">
        <h2>Contact Us</h2>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Elaborate your concern
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="row mb-3">
          Are you member?
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1" />
              <label class="form-check-label" for="gridCheck1">
                yes
              </label>
            </div>
          </div>
        </div>
        <select class="form-select" aria-label="Default select example">
          <option selected>select your query</option>
          <option value="1">Web</option>
          <option value="2">Technology</option>
          <option value="3">Stack</option>
          <option value="3">Others</option>
        </select>
        <button type="submit" class="btn btn-primary mt-3">
          Submit
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
