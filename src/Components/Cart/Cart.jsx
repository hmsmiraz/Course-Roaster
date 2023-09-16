import PropTypes from 'prop-types'

const Cart = ({ selectCourse }) => {
    const {course_name} = selectCourse;
  return (
    <div>
        <li>{course_name}</li>
    </div>
  )
}

Cart.propTypes = {
  selectCourse: PropTypes.object,
}

export default Cart