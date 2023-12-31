"use client";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import Link from "next/link";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
     console.log(res)
      // const { accessToken } = res.data;
      if (res?.accessToken) {
        router.push("/");
        message.success("User Login Success");
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
          Frist login your accunt
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <>
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
                Login
              </Button>

              <Link href="/register">
                <Button
                  style={{
                    width: "100%",
                  }}
                >
                  Register
                </Button>
              </Link>
            </>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
