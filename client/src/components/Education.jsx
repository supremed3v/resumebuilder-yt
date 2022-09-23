import React from "react";

const Education = ({ formData, setFormData }) => {
  // edu1_school: "",
  //   edu1_year: "",
  //   edu1_qualification: "",
  //   edu1_desc: "",
  //   edu2_school: "",
  //   edu2_year: "",
  //   edu2_qualification: "",
  //   edu2_desc: "",
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your First Institute name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.edu1_school}
            onChange={(e) => {
              setFormData({ ...formData, edu1_school: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="Email" className="form-label">
            Year you graduated
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={formData.edu1_year}
            onChange={(e) => {
              setFormData({ ...formData, edu1_year: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="phone" className="form-label">
            Degree you pursued
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.edu1_qualificatin}
            onChange={(e) => {
              setFormData({ ...formData, edu1_qualificatin: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu1_desc" className="form-label">
            Enter a short description
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.edu1_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu1_desc: e.target.value });
            }}
          />
        </div>
        <hr />
        <div className="col-md-6">
          <label for="name" className="form-label">
            Enter your Second Institute name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.edu2_school}
            onChange={(e) => {
              setFormData({ ...formData, edu2_school: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="Email" className="form-label">
            Year you graduated from your second institute
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={formData.edu2_year}
            onChange={(e) => {
              setFormData({ ...formData, edu2_year: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="phone" className="form-label">
            Degree you pursued
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.edu2_qualificatin}
            onChange={(e) => {
              setFormData({ ...formData, edu2_qualificatin: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu1_desc" className="form-label">
            Enter a short description
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.edu2_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu2_desc: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
