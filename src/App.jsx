import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Carts from './Components/Carts/Carts'

function App() {
  const [selectItems, setSelectItems] = useState([])

  const handleSelectItem = course => {
    const newSelectItems = [...selectItems, course];
    setSelectItems(newSelectItems);
    console.log(newSelectItems);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex mx-2">
      <Courses handleSelectItem={handleSelectItem}></Courses>
      <Carts selectItems={selectItems}></Carts>
      </div>
    </>
  )
}

export default App
