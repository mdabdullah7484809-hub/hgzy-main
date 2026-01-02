import RegisterContents from "../Components/Register/RegisterContents";
import TopLoginRegisterPassword from "../Components/TopLoginRegisterPassword";


const Register = () => {
    return (
        <div className="max-w-[480px] mx-auto min-h-screen ">
            
            <TopLoginRegisterPassword/>
            <RegisterContents/>
        </div>
    );
};

export default Register;