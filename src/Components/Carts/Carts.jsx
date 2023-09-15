import PropTypes from 'prop-types'

const Carts = ({ selectItems}) => {
  return (
    <div className="md:w-1/3 ml-2 bg-slate-50 mt-2 pt-4 w-48 rounded-lg ">
        <h2 className="text-2xl font-bold text-center text-cyan-800 mt-2">Selected Items: {selectItems.length}</h2>
    </div>
  )
}

Carts.propTypes = {
    selectItems: PropTypes.array,
    handleSelectItem: PropTypes.func,
}

export default Carts