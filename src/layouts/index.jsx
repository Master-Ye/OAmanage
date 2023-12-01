import { Link, Outlet } from 'umi';
import styles from './index.less';
import {Button} from "antd"
import {selectLayout} from 'utils/selectLayout'
import BaseLayout from "./BaseLayout"
import LoginLayout from "./LoginLayout"
import { useLocation } from 'react-router-dom';

export default function Layout({children}) {
  const layoutMap = { BaseLayout,LoginLayout }
  const location  = useLocation();
  console.log(location)
  console.log(location.pathname)
  console.log()
  const Container = layoutMap[selectLayout(location.pathname)]
  console.log(selectLayout)
  return (
 <Container>
  <Outlet></Outlet>
 </Container>
  );
}
