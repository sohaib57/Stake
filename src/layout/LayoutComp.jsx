import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  StarOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import './style.css';
import SubMenu from 'antd/lib/menu/SubMenu';
import {  Stack } from '@chakra-ui/react';
import { Divider } from 'antd';
import { Select } from 'antd';
import Footer from './Footer'
const { Header, Sider, Content } = Layout;

const { Option } = Select;


const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const LayoutComp = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (

    <Layout style={{
      height: '100vh',
    }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <div className="logo" /> */}
        <div>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </div>
        {/* <HStack>
            <Button
              bgColor={'transparent'}
              color={'white'}
              leftIcon={<StarOutlined />}
              fontSize={'sm'}
            >
              Casino
            </Button>
            <Button
              bgColor={'transparent'}
              color={'white'}
              leftIcon={<StarOutlined />}
              fontSize={'sm'}
            >
              Sport
            </Button>
          </HStack> */}

        <Menu
          mode="inline"
          className="menu-bar"
          style={{
            overflowX: 'hidden',
            overflowY: 'auto',
            height: '88vh',
            borderRight: 'none'
          }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <StarOutlined />
                <span>Casino</span>
              </span>
            }
          >
            <Menu.Item
              key="1"
              style={{
                paddingLeft: 20,
              }}
            >
              <StarOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Favourites
              </button>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Recent
              </button>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Challenges
              </button>
            </Menu.Item>
            <Divider />
            <Menu.Item
              key="4"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Stake Originals
              </button>
            </Menu.Item>
            <Menu.Item
              key="5"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Stake Exclusives
              </button>
            </Menu.Item>
            <Menu.Item
              key="6"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Slots
              </button>
            </Menu.Item>
            <Menu.Item
              key="7"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Live Casino
              </button>
            </Menu.Item>
            <Menu.Item
              key="8"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Game Shows
              </button>
            </Menu.Item>
            <Menu.Item
              key="9"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                New Releases
              </button>
            </Menu.Item>
            <Menu.Item
              key="10"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Feature Buy-in
              </button>
            </Menu.Item>
            <Menu.Item
              key="11"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Table Games
              </button>
            </Menu.Item>
            <Menu.Item
              key="12"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Blackjack
              </button>
            </Menu.Item>
            <Menu.Item
              key="13"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Baccarat
              </button>
            </Menu.Item>
            <Menu.Item
              key="14"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Roulette
              </button>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <StarOutlined />
                <span>Sports</span>
              </span>
            }
          >
            <Menu.Item
              key="1"
              style={{
                paddingLeft: 20,
              }}
            >
              <StarOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                My Bets
              </button>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Live Events
              </button>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Starting Soon
              </button>
            </Menu.Item>
            <Divider />
            <p
              style={{
                paddingLeft: 20,
                paddingBottom: 8,
              }}
            >
              Popular
            </p>
            <Menu.Item
              key="4"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                ATP London, Great...
              </button>
            </Menu.Item>
            <Menu.Item
              key="5"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                ATP Halle,Germany...
              </button>
            </Menu.Item>
            <Menu.Item
              key="6"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                KBO League
              </button>
            </Menu.Item>
            <Menu.Item
              key="7"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                NHL
              </button>
            </Menu.Item>
            <Divider />
            <p
              style={{
                paddingLeft: 20,
                paddingBottom: 8,
              }}
            >
              Top Sports
            </p>
            <Menu.Item
              key="8"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Tennis
              </button>
            </Menu.Item>
            <Menu.Item
              key="9"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Soccer
              </button>
            </Menu.Item>
            <Menu.Item
              key="10"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Baseball
              </button>
            </Menu.Item>
            <Menu.Item
              key="11"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Basketball
              </button>
            </Menu.Item>
            <Menu.Item
              key="12"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Table Tennis
              </button>
            </Menu.Item>
            <Divider />
            <p
              style={{
                paddingLeft: 20,
                paddingBottom: 8,
              }}
            >
              All Sports
            </p>
            <Menu.Item
              key="13"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Alpine Skiing
              </button>
            </Menu.Item>
            <Menu.Item
              key="14"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                American Football
              </button>
            </Menu.Item>
            <Menu.Item
              key="15"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Aussie Rules
              </button>
            </Menu.Item>
            <Menu.Item
              key="16"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Badminton
              </button>
            </Menu.Item>
            <Menu.Item
              key="17"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Baseball
              </button>
            </Menu.Item>
            <Menu.Item
              key="18"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Basketball
              </button>
            </Menu.Item>
            <Menu.Item
              key="19"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Beach Volley
              </button>
            </Menu.Item>
            <Menu.Item
              key="20"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Biathlon
              </button>
            </Menu.Item>
            <Menu.Item
              key="21"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Boxing
              </button>
            </Menu.Item>
            <Menu.Item
              key="22"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Counter-Strike
              </button>
            </Menu.Item>
            <Menu.Item
              key="23"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Cricket
              </button>
            </Menu.Item>
            <Menu.Item
              key="24"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Cross-Country
              </button>
            </Menu.Item>
            <Menu.Item
              key="25"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Cycling
              </button>
            </Menu.Item>
            <Menu.Item
              key="26"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Darts
              </button>
            </Menu.Item>
            <Menu.Item
              key="27"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Dota 2
              </button>
            </Menu.Item>
            <Menu.Item
              key="28"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Electronic Leagues
              </button>
            </Menu.Item>
            <Menu.Item
              key="29"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                FIFA
              </button>
            </Menu.Item>
            <Menu.Item
              key="30"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Formula 1
              </button>
            </Menu.Item>
            <Menu.Item
              key="30"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Futsal
              </button>
            </Menu.Item>
            <Menu.Item
              key="31"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Gaelic Hurling
              </button>
            </Menu.Item>
            <Menu.Item
              key="32"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Golf
              </button>
            </Menu.Item>
            <Menu.Item
              key="33"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Handball
              </button>
            </Menu.Item>
            <Menu.Item
              key="34"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Ice Hockey
              </button>
            </Menu.Item>
            <Menu.Item
              key="35"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Indy Racing
              </button>
            </Menu.Item>
            <Menu.Item
              key="36"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                League of Legends
              </button>
            </Menu.Item>
            <Menu.Item
              key="37"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                MMA
              </button>
            </Menu.Item>
            <Menu.Item
              key="38"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Motorcycle Racing
              </button>
            </Menu.Item>
            <Menu.Item
              key="39"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Pesapallo
              </button>
            </Menu.Item>
            <Menu.Item
              key="40"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Politics & Entertain...
              </button>
            </Menu.Item>
            <Menu.Item
              key="41"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Rainbow Six
              </button>
            </Menu.Item>
            <Menu.Item
              key="42"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Rugby
              </button>
            </Menu.Item>
            <Menu.Item
              key="43"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Ski Jumping
              </button>
            </Menu.Item>
            <Menu.Item
              key="44"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                snooker
              </button>
            </Menu.Item>
            <Menu.Item
              key="45"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Soccer
              </button>
            </Menu.Item>
            <Menu.Item
              key="46"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Stock Car Racing
              </button>
            </Menu.Item>
            <Menu.Item
              key="47"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Table Tennis
              </button>
            </Menu.Item>
            <Menu.Item
              key="48"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Tennis
              </button>
            </Menu.Item>
            <Menu.Item
              key="49"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Volleyball
              </button>
            </Menu.Item>
            <Menu.Item
              key="50"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Waterpolo
              </button>
            </Menu.Item>
            <Divider />
            <Select
              defaultValue="lucy"
              style={{
                width: 120,
                paddingLeft: 20,
              }}
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Divider />
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <StarOutlined />
                <span>Promotions</span>
              </span>
            }
          >
            <Menu.Item
              key="1"
              style={{
                paddingLeft: 20,
              }}
            >
              <StarOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Favourites
              </button>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Recent
              </button>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Challenges
              </button>
            </Menu.Item>
            <Divider />
            <Menu.Item
              key="4"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Stake Originals
              </button>
            </Menu.Item>
            <Menu.Item
              key="5"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Stake Exclusives
              </button>
            </Menu.Item>
            <Menu.Item
              key="6"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Slots
              </button>
            </Menu.Item>
            <Menu.Item
              key="7"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Live Casino
              </button>
            </Menu.Item>
            <Menu.Item
              key="8"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Game Shows
              </button>
            </Menu.Item>
            <Menu.Item
              key="9"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                New Releases
              </button>
            </Menu.Item>
            <Menu.Item
              key="10"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Feature Buy-in
              </button>
            </Menu.Item>
            <Menu.Item
              key="11"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Table Games
              </button>
            </Menu.Item>
            <Menu.Item
              key="12"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Blackjack
              </button>
            </Menu.Item>
            <Menu.Item
              key="13"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Baccarat
              </button>
            </Menu.Item>
            <Menu.Item
              key="14"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Roulette
              </button>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <StarOutlined />
                <span>Sponsorships</span>
              </span>
            }
          >
            <Menu.Item
              key="1"
              style={{
                paddingLeft: 20,
              }}
            >
              <StarOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Favourites
              </button>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Recent
              </button>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Challenges
              </button>
            </Menu.Item>
            <Divider />
            <Menu.Item
              key="4"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Stake Originals
              </button>
            </Menu.Item>
            <Menu.Item
              key="5"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Stake Exclusives
              </button>
            </Menu.Item>
            <Menu.Item
              key="6"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Slots
              </button>
            </Menu.Item>
            <Menu.Item
              key="7"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Live Casino
              </button>
            </Menu.Item>
            <Menu.Item
              key="8"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Game Shows
              </button>
            </Menu.Item>
            <Menu.Item
              key="9"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                New Releases
              </button>
            </Menu.Item>
            <Menu.Item
              key="10"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Feature Buy-in
              </button>
            </Menu.Item>
            <Menu.Item
              key="11"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Table Games
              </button>
            </Menu.Item>
            <Menu.Item
              key="12"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Blackjack
              </button>
            </Menu.Item>
            <Menu.Item
              key="13"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Baccarat
              </button>
            </Menu.Item>
            <Menu.Item
              key="14"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Roulette
              </button>
            </Menu.Item>
          </SubMenu>
          <Menu
            className="menu-bar"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Blog',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Live Support',
              },
            ]}
          />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className=".site-header-layout-background"
          style={{
            padding: 0,
          }}
        >
          {/* {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )} */}
        </Header>
        <Content
          className="site-layout-background"
        >
          <Stack style={{
            height: "calc(100vh - 64px)",
          }} overflowY={'auto'}>
            {children}
            <Footer />
          </Stack>

        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComp;
