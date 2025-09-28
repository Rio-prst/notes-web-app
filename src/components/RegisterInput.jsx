import React, {useContext} from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import ThemeContext from '../context/ThemeContext';

function RegisterInput({register}) {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [confirmPassword, onConfirmPasswordChange] = useInput('');
    const {theme} = useContext(ThemeContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        register({
            name,
            email,
            password,
            confirmPassword
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className={`input-register ${theme}`}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' value={name} onChange={onNameChange}/>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={email} onChange={onEmailChange}/>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={password} onChange={onPasswordChange}/>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input type='password' id='confirmPassword' value={confirmPassword} onChange={onConfirmPasswordChange}/>
            <button>Register</button>
        </form>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired
};

export default RegisterInput;