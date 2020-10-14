import React from 'react'
import style from './footer.css'
import Route, {Link} from 'react-router-dom'

function Footer(){
    return(
        <div className='Footer'>
            {/* <div className='divider'></div> */}
            <div className='content'>
                <p className='text'>DROPSHIP LITE - A PROJECT BY IRFAN ZAHIR</p>
                <div className='divider'></div>
                <div className='pengemis'>
                    <Link to='/donate'>I'm a student that need money to maintain this application</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer