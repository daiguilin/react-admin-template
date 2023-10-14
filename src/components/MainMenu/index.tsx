import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import { Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('栏目 1', '/page1', <PieChartOutlined />),
    getItem('栏目 2', '/page2', <DesktopOutlined />),
    getItem('栏目 3', 'page3', <UserOutlined />, [
        getItem('栏目 301', '/page3/page301'),
        getItem('栏目 302', '/page3/page302'),
        getItem('栏目 303', '/page3/page303'),
    ]),
    getItem('栏目 4', '/page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('栏目 5', '/page5', <FileOutlined />),
];

const Comp: React.FC = () => {
    //获取当前路由地址
    const location = useLocation();
    const pathname = location.pathname;
    //设置展开项的初始值
    //拿到当前路由的pathname对items数组的每一项的children的key值进行对比，如果找到了相等了，就要他上一级的key
    //这个key给到openkeys数组的元素，作为初始值
    let firstOpenKey = '';
    for (let i = 0; i < items.length; i++) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (items[i]!.children && items[i]!.children.length > 1 && items[i]!.children.find((obj: MenuItem) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return obj.key === pathname
        })) {
            firstOpenKey = items[i]!.key as string;
            break;
        }
    }
    const [openKeys, setOpenKeys] = useState<string[]>([firstOpenKey]);
    const navigateTo = useNavigate();
    const gotoPage = (e: { key: string }) => {
        console.log(e.key);
        navigateTo(e.key)
    }
    //菜单展开收缩控制
    const handleOpenChange = (keys: string[]) => {
        console.log(keys);
        setOpenKeys([keys[keys.length - 1]]);
    }
    return (
        <Menu theme="dark"
            defaultSelectedKeys={[pathname]}
            mode="inline"
            items={items}
            onClick={gotoPage}
            onOpenChange={handleOpenChange}
            openKeys={openKeys}
        />
    )
}
export default Comp