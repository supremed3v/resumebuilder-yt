import React from "react";

const PersonalDetails = ({ formData, setFormData }) => {
  // name: "",
  // email: "",
  // phone: "",
  // linkedin: "",
  // github: "",
  // skills: "",
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="Email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="github" className="form-label">
            Github
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            placeholder="https://github/YOURUSERNAME"
            value={formData.github}
            onChange={(e) => {
              setFormData({ ...formData, github: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label for="LinkedIn" className="form-label">
            LinkedIn
          </label>
          <input
            type="text"
            className="form-control"
            id="LinkedIn"
            placeholder="https://linkedIn/YOURUSERNAME"
            value={formData.linkedin}
            onChange={(e) => {
              setFormData({ ...formData, linkedin: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label for="Skills" className="form-label">
            Skills
          </label>
          <input
            type="text"
            className="form-control"
            id="Skills"
            placeholder="Enter skills and separate each of them with a comma "
            value={formData.skills}
            onChange={(e) => {
              setFormData({ ...formData, skills: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
