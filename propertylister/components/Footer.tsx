import { Divider } from 'antd'
import React from 'react'

const Footer = ():React.ReactElement => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <div className="footer">
            <div className="container">
                <Divider/>
                <p className="footer-text">
                        Easy Home @copy; {currentYear} All rights Reseverd
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer