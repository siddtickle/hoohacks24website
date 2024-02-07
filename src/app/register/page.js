import { redirect } from 'next/navigation';

function Register(){
    redirect('https://app.hoohacks.io');
    return (
        <div>
            <h1>Register</h1>
        </div>
    );
}
export default Register;