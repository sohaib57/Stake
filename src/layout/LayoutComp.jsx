import React from 'react';
import {  Stack, Spacer } from '@chakra-ui/react';
import { Button } from 'antd';
import { Layout } from 'antd';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Image } from 'antd';
import Stake from '../assets/images/stake.png';
import 'antd/dist/antd.css';
import './style.css';
import MobileHeader from './MobileHeader';

const { Header, Content } = Layout;

const LayoutComp = ({ children }) => {
  return (
    <Layout
      style={{
        height: '100vh',
      }}
    >
      <Sidebar />
     
      <Layout className="site-layout">
        <Header
          className=".site-header-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Stack direction={'row'} pr={10}>
            <Stack>
              <div>
                <Image src={Stake} alt="stake" width={130} />
              </div>
            </Stack>
            <Spacer />
          
            <div className="button-section">
            <Button type="text">Sign In</Button>

            <Button type="primary">Register</Button>
          </div>
            </Stack>
          
           
        </Header>
        <Content className="site-layout-background">
          <Stack
            style={{
              height: 'calc(100vh - 60px)',
            }}
            overflowY={'auto'}
          >
            {children}
            <Footer />
            <MobileHeader/>
          </Stack>
         
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComp;
