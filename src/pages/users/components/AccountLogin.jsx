import React from "react";
import {UserOutlined,LockOutlined} from "@ant-design/icons"
import {loginRule} from "utils/rules"
export default function AccountLogin({ Input, FormItem }) {
  return (
    <>
      <FormItem name="account" rules={loginRule.userRule}>
        <Input placeholder="请输入账号" prefix={<UserOutlined/>}></Input>
      </FormItem>
      <FormItem name="password" rules={loginRule.passwordRule} hasFeedback>
        <Input placeholder="请输入密码" prefix={<LockOutlined/>} type="password"></Input>
      </FormItem>
    </>
  );
}
