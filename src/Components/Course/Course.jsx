import React from "react";
import PropTypes from "prop-types";
import { BsCurrencyDollar, BsFillBookFill } from "react-icons/bs";

const Course = ({ course }) => {
  const {id, img, course_name, Course_price, course_credit, course_details} =
    course;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-semibold text-base">{course_name}</h2>
          <p>{course_details}</p>
          <div className="flex flex-row items-center justify-center">
            <span className="text-lg"><BsCurrencyDollar /></span>
            <p className="pr-3 pl-2">Price:{Course_price}</p>
            <span className="pr-3"><BsFillBookFill /></span>
            <p>Credit:{course_credit}hr</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-wide btn-primary font-semibold text-lg">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
