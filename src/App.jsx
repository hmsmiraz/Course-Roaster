import { useState } from 'react'
import './App.css';
import Courses from './Components/Courses/Courses';
import Header from './Components/Header/Header';
import Carts from './Components/Carts/Carts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectCourses, setSelectCourses] = useState([])
  const [remainingCreditHr, setRemainingCreditHr] = useState(0);
  const [totalCreditHr, setTotalCreditHr] = useState(0);
  const [totalPriceOf, setTotalPriceOf] = useState(0);

  const handleSelectItem = (course) => {
    const isExist = selectCourses.find((item) => item.id == course.id);
    let totalCredit = course.course_credit;
    let totalPrice = course.Course_price;
    if(isExist){
        return toast.warn('Already  Enrolled!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else{
      selectCourses.forEach((item) =>{
        totalCredit = totalCredit + item.course_credit;
        totalPrice = totalPrice + item.Course_price;
      })
      if(totalCredit > 20){
          return toast.error("No, You can't add more than 20 Credit Hour", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      else{
        setSelectCourses([...selectCourses, course]);
        const remainCredit = 20 - totalCredit;
        setRemainingCreditHr(remainCredit);
        setTotalCreditHr(totalCredit);
        setTotalPriceOf(totalPrice);
      }
    }
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex mx-2">
      <Courses handleSelectItem={handleSelectItem}></Courses>
      <Carts selectCourses={selectCourses}
      remainingCreditHr={remainingCreditHr}
      totalCreditHr={totalCreditHr}
      totalPriceOf={totalPriceOf}
      ></Carts>
      <ToastContainer />
      </div>
    </>
  )
}

export default App
