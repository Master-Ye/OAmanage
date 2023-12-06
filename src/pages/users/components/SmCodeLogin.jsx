import React from "react";
import { PhoneOutlined, CodeSandboxOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { loginRule } from "utils/rules";
export default function SmCodeLogin({ FormItem, Input, from }) {
  const [disabled, setDisabled] = useState(true);
  const [currentStatus, setCurrentStatus] = useState(true);
  let [currentTime, setCurrentTime] = useState(60);
  const _sendSmCode = async () => {
    setCurrentStatus(false);
    //- 获取当前用户输入的手机号码
    const mobile = form.getFieldValue("mobile");
    const res = await $http.getSmCode({ mobile });
    message.success(res.msg);
    setDisabled(true);
    runTime();
  };
  const mobileValChange = async () => {
    try {
      const status = await form.validateFields(["mobile"]);
      setDisabled(false);
    } catch (error) {
      setDisabled(true);
    }
  };
  const runTime = () => {
    const timer = setInterval(() => {
      if (currentTime === 0) {
        clearInterval(timer);
        setCurrentStatus(true);
        setDisabled(false);
        setCurrentTime(60);
        return;
      }
      setCurrentTime(--currentTime);
    }, 1000);
  };
  return (
    <>
      <FormItem name="mobile" rules={loginRule.mobileRule} hasFeedback>
        <Input
          placeholder="请输入手机号"
          prefix={<PhoneOutlined />}
          onChange={mobileValChange}
        ></Input>
      </FormItem>
      <FormItem name="code" rules={loginRule.smCodeRule}>
        <Input
          placeholder="请输入验证码"
          prefix={<CodeSandboxOutlined />}
          addonAfter={
            <Button onClick={_sendSmCode} disabled={disabled}>
              {currentStatus ? "发送验证码" : `${currentTime}秒后重新发送`}
            </Button>
          }
        ></Input>
      </FormItem>
    </>
  );
}
