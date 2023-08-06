import React from 'react'
import './Menus.css'
import Logo from '../assets/images/MyLogo.PNG'
import {AiTwotoneHome,AiFillProject} from 'react-icons/ai'
import {BsPersonBoundingBox} from 'react-icons/bs'
import {MdWork,MdComputer} from 'react-icons/md'
import {BiBookReader,BiSolidContact} from 'react-icons/bi'
import {FaNewspaper} from 'react-icons/fa'
const Menus = ({toggle}) => {
  return (
    <>
        <div className='navbar-profile-pic'>
            {
                !toggle?(
                    <div className='nav-items'>
                        <div className='nav-item'>
                            <img src={Logo} alt='ASA_HELPER'/>
                            <div className='nav-link'><AiTwotoneHome color='red'/> Home</div>
                            <div className='nav-link'><BsPersonBoundingBox color='red'/> About</div>
                            <div className='nav-link'><MdWork color='red'/> Work Experience</div>
                            <div className='nav-link'><MdComputer color='red'/> Tech Stack</div>
                            <div className='nav-link'><BiBookReader color='red'/> Education</div>
                            <div className='nav-link'><AiFillProject color='red'/> Projects</div>
                            <div className='nav-link'><FaNewspaper color='red'/> Testimonial</div>
                            <div className='nav-link'><BiSolidContact color='red'/> Contact</div>
                        </div>
                    </div>
                ):(
                    <div className='nav-items'>
                        <div className='nav-item'>
                            <img src={Logo} alt='ASA_HELPER' className='imgtoggle'/>
                            <div className='nav-link'><AiTwotoneHome color='red' title='Home'/></div>
                            <div className='nav-link'><BsPersonBoundingBox color='red' title='Home'/></div>
                            <div className='nav-link'><MdWork color='red' title='Home'/></div>
                            <div className='nav-link'><MdComputer color='red' title='Home'/></div>
                            <div className='nav-link'><BiBookReader color='red' title='Home'/></div>
                            <div className='nav-link'><AiFillProject color='red' title='Home'/></div>
                            <div className='nav-link'><FaNewspaper color='red' title='Home'/></div>
                            <div className='nav-link'><BiSolidContact color='red' title='Home'/></div>
                        </div>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default Menus