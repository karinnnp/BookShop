import { ReactElement, useState } from 'react'
import { ButtonM } from '../../component/Button'
import { Input } from '../../component/Input'
import validator from 'validator'
import PasswordChecklist from "react-password-checklist"

const typeDetail = {
    email: { value: '', error: false, limit: 0 },
    password: { value: '', error: false, limit: 8 },
};

export const Login = (): ReactElement => {
    const path = window.location.pathname
    const [login, setLogin] = useState(typeDetail)
    const [isValid, setIsValid] = useState(false)

    const checkValue = () => {
        const newData: any = { ...login };
        Object.entries(login).forEach(([k, v]) => {
            if (v.value === '' || (v.limit > 0 && v.value.length >= v.limit) || (k === "email" && !validator.isEmail(v.value)) || (k === "password" && !isValid)) {
                newData[k].error = true;
            }
        });
        return newData;
    }

    const handleLogin = () => {
        const check = checkValue();
        const isErrors = Object.values(check).some((item: any) => item.error);
        if (isErrors) {
            setLogin(check);
        } else {
            window.location.href = "/"
            // if (path === "/login") {

            // } else {

            // }
        }
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center gap-8'>
            <div className='text-5xl font-bold leading-10 text-red'>Book's</div>
            <Input
                title='Email'
                placeholder='Email'
                inputValue={login.email.value}
                handleChange={(e) => setLogin((item) => ({ ...item, email: { value: e.target.value, error: false, limit: 0 }, }))}
                bgStyle='grey'
                error={login.email.error}
                errorMessage="Please enter your email correctly." />
            <Input
                title='Password'
                placeholder='Password'
                inputValue={login.password.value}
                handleChange={(e) => setLogin((item) => ({ ...item, password: { value: e.target.value, error: false, limit: 0 }, }))}
                bgStyle='grey'
                error={login.password.error}
                errorMessage={path === "/login" ? "Please enter your email correctly." : ""} />
            {path === "/register" &&
                <PasswordChecklist
                    rules={["minLength", "specialChar", "number", "capital"]}
                    minLength={8}
                    value={login.password.value}
                    onChange={(isValids) => setIsValid(isValids)}
                    messages={{
                        minLength: "Password has more than 8 caracteres.",
                        specialChar: "Password has tiene caracteres especiales.",
                        number: "Password has a number.",
                        capital: "Password has a capital letter.",
                    }}
                />
            }
            {path === "/login" && <div className='w-full text-center text-base underline font-bold leading-10 text-red cursor-pointer' onClick={() => window.location.href = "/register"}>ลงทะเบียนผู้ใช้ใหม่</div>}
            <ButtonM title={path === '/login' ? "เข้าสู่ระบบ" : "สมัครสมาชิก"} bgStyle='black' handleClick={() => handleLogin()} />
            {path === "/register" && <ButtonM title="เข้าสู่ระบบ" bgStyle='whiteGrey' handleClick={() => window.location.href = "/login"} />}
        </div>
    )
}