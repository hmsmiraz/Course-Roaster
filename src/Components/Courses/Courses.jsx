import  { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Course from '../Course/Course';


const Courses = ({ handleSelectItem }) => {
    const[courses, setCourses] = useState([]);

    useEffect( ()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:w-2/3 mx-3 mt-5 bg-slate-50">
       {
        courses.map(course => <Course
        key={course.id}
        course={course}
        handleSelectItem={handleSelectItem}
        ></Course>)
       }
    </div>
  )
}

Courses.propTypes = {
    handleSelectItem: PropTypes.func,
}

export default Courses