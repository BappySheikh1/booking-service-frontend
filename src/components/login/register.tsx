"use client";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import { useCreatUserMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import FormTextArea from "../forms/FormTextArea.tsx";

type FormValues = {
  id: string;
  password: string;
};

const RegisterPage = () => {
  const [creatUser] = useCreatUserMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await creatUser({ profileImg: "", ...data }).unwrap();

      // // const { accessToken } = res.data;
      if (res?.success) {
        router.push("/login");
        message.success("User Reister Success");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row
      align={"middle"}
      justify={"center"}
      style={{
        minHeight: "100vh",
      }}
    >
      {/* <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login" />
      </Col> */}

      <Col sm={12} md={8} lg={6}>
        <h1
          style={{
            margin: "15px 0",
          }}
        >
          Reister your Imformation
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  placeholder="Enter your Full Name"
                  label="User Name"
                />
              </div>
              <div>
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  placeholder="Enter your email"
                  label="User Email"
                />
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FormInput
                  name="contactNumber"
                  type="number"
                  size="large"
                  placeholder="Enter your contact number"
                  label="User Contact Number"
                />
              </div>
              <div>
                <FormTextArea
                  name="address"
                  placeholder="Provide  address"
                  label="User Address"
                />
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  placeholder="password"
                  label="User Password"
                />
              </div>
              <Button
                style={{
                  width: "100%",
                  margin: "15px 0",
                }}
                type="primary"
                htmlType="submit"
              >
                Register
              </Button>
            </>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterPage;
