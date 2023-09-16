import PropTypes from 'prop-types'
import Cart from '../Cart/Cart'

const Carts = ({ selectCourses,remainingCreditHr, totalCreditHr, totalPriceOf }) => {
  return (
    <div className="w-auto md:w-1/3 ml-2 bg-slate-50 mt-2 pt-4 rounded-lg p-5">
        <h5 className='font-bold text-lg text-blue-700 pb-5'>Credit Hour Reaming : {remainingCreditHr} hr</h5>
        <hr />
        <h5 className='text-start text-xl font-bold py-4'>Course Name</h5>
        <ol className='list-inside list-decimal pb-5'>
        {
            selectCourses.map((selectCourse, idx) => <Cart key={idx} selectCourse={selectCourse}></Cart> )
        }
        </ol>
        <hr className='p-5' />
        <p className='text-base font-semibold pb-5'>Total Credit Hour : {totalCreditHr}</p>
        <hr className='p-5' />
        <p className='text-base font-bold'>Total Price : {totalPriceOf} USD</p>
        <p></p>
    </div>
  )
}

Carts.propTypes = {
  selectCourses: PropTypes.array,
  handleSelectItem: PropTypes.func,
  remainingCreditHr: PropTypes.number,
  totalCreditHr: PropTypes.number,
  totalPriceOf: PropTypes.number,
}

export default Carts