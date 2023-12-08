import React, { useState } from "react";
import AccountLogin from "./components/AccountLogin";
import SmCodeLogin from "./components/SmCodeLogin";
import { Button, Form, Input, Row, Col } from "antd";
import logoImg from "common/img/logo.svg";
import { ArrowRightOutlined } from "@ant-design/icons";
import IconMap from "components/IconMap";
import "./css/login.less"
import { useDispatch } from 'umi';
import { request, useRequest } from 'umi';
const map = (({ user }) => ({
  user,
}))
function login() {

  const dispatch = useDispatch()

  const [form] = Form.useForm();
  const [type, setType] = useState(0);
  const FormItem = Form.Item;
  const submitUserInfo = (data) => {
    console.log(data)
    //- 登录请求的参数处理  type为必选项 + 当前登录模式的参数 手机号码  mobile + code 账户：accountName ,password
    dispatch({ type: 'user/login', payload: { ...data, type } });
  };

  const ComponentSelector = (props) =>
    !type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />;
  return (
    <div className="form">
      <div className="logo">
        <img src={logoImg} alt="" />
        <span>人事管理系统</span>
      </div>
      <Form form={form} onFinish={submitUserInfo}>
        {ComponentSelector({ form, FormItem, Input })}
        <Form.Item
   	name="title"
   	label="标题">
   	<Input />
   </Form.Item>
        <Row>
          <Button type="primary" block={true} onClick={submitUserInfo}>登录</Button>
        </Row>
        <Row className="ft-12">
          <Col span={6}>忘记密码？</Col>
          <Col span={18} className="align-right" onClick={()=>setType(!type?1:0)}>
            {type ? "使用账号密码登录" : "使用手机号码登录"}
            <ArrowRightOutlined />
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default login;