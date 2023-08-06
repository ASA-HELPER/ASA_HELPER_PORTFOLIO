import React,{useState} from 'react'
import Home from '../../pages/Home/Home'
import {FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa';
import './Layout.css'
import Menus from '../../Menus/Menus';

const Layout = () => {
    const [toggle,setToggle] = useState(false)
    const handleToggle = ()=>{
        setToggle(!toggle)
    }
  return (
    <>
        <div className='sidebar-section'>
            <div className={toggle?'sidebar':'sidebar-toggle'}>
                <div className='sidebar-toggle-icons'>
                    <Menus toggle={toggle}/>
                    <p>
                        {
                            toggle?(
                                <FaAngleDoubleRight size={30} onClick={handleToggle}/>
                            ):(
                                <FaAngleDoubleLeft size={30} onClick={handleToggle}/>
                            )
                        }
                    </p>
                </div>
            </div>
            <div className='container'>
                <Home/>
            </div>
        </div>
    </>
  )
}

export default Layout