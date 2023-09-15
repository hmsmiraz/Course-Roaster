import PropTypes from 'prop-types'

const Cart = ({ selectItem }) => {
    const {course_name} = selectItem;
  return (
    <div>
        <li>{course_name}</li>
    </div>
  )
}

Cart.propTypes = {
    selectItem: PropTypes.object,
}

export default Cart