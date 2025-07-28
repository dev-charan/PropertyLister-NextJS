import React from 'react'
import logo from "@/public/images/logo.png"
import { Button, Divider, Flex } from 'antd'
import {GoogleOutlined} from "@ant-design/icons"
import SearchProperties from './SearchProperties'
const Header = (): React.ReactElement => {
  return (
    <nav className='nav'>
            <div className="flex-between" >
                <div className="flex-align-center" style={{
                gap:16
            }}>
                <img src={logo.src} alt="logo"  width={204} className='pointer'/>
                <Button ghost>
                    Properties
                </Button>
                </div>
               <Button icon={<GoogleOutlined/>}>
                Login or Register
               </Button>
            </div>
            <hr />
            <div className="hero">
                <h1 className='hero-title'>Finding your <span className='color-sec'>perfect</span>  home</h1>
                <p className="hero-subtitle">
                    Search for your perfect home in the best location around the world
                </p>
                {/* Search box */}
                <SearchProperties/>
               <Flex justify='center' gap={8}>
                 <Button>
                    Browse Properties
                </Button>
                <Button>
                    List Properties
                </Button>
               </Flex>
            </div>
    </nav>
  )
}

export default Header