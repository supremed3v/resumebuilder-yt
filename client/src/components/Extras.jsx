import React from "react";

const Extras = ({ formData, setFormData }) => {
  // extra_1: "",
  //   extra_2: "",
  return (
    <div className="container d-flex justify-content-center">
      <form className="row g-3">
        <h3>Languages you can speak:</h3>
        <div className="col-md-6">
          <label for="name" className="form-label">
            Languages
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.extra_1}
            onChange={(e) => {
              setFormData({ ...formData, extra_1: e.target.value });
            }}
          />
        </div>

        <hr />
        <h3>Things you like to do:</h3>
        <div className="col-md-6">
          <label for="name" className="form-label">
            Hobbies
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.extra_2}
            onChange={(e) => {
              setFormData({ ...formData, extra_2: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Extras;
