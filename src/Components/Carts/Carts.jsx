import PropTypes from 'prop-types'
import Cart from '../Cart/Cart'

const Carts = ({ selectItems}) => {
  return (
    <div className="w-auto md:w-1/3 ml-2 bg-slate-50 mt-2 pt-4 w-48 rounded-lg p-5">
        <h5 className='font-bold text-lg text-blue-700 pb-5'>Credit Hour Reaming{} hr</h5>
        <hr />
        <h5 className='text-start text-xl font-bold py-4'>Course Name</h5>
        <ol className='list-inside list-decimal pb-5'>
        {
            selectItems.map((selectItem, idx) => <Cart key={idx} selectItem={selectItem}></Cart> )
        }
        </ol>
        <hr className='p-5' />
        <p className='text-base font-medium pb-5'>Total Credit Hour : {}</p>
        <hr className='p-5' />
        <p className='text-base font-bold'>Total Price : {} USD</p>
        <p></p>
    </div>
  )
}

Carts.propTypes = {
    selectItems: PropTypes.array,
    handleSelectItem: PropTypes.func,
}

export default Carts