
import './App.css'
import LineChart from './components/Chart/LineChart'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import PieItems from './components/Pie/PieItems'

import PriceOption from './components/PriceOption/PriceOption'
import SimpleRadial from './components/SimpleRadial/SimpleRadial'

function App() {


  return (
    <>

      
        <Navbar></Navbar>
      

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>

      <h1 className='text-5xl bg-red-500 text-center py-4 font-semibold'>GYM + GRAPH</h1>
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Phones></Phones>
      <PieItems></PieItems>
      <SimpleRadial></SimpleRadial>



    </>
  )
}

export default App
