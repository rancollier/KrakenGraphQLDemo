import React from "react";

const RegisterComponent = props => {
    const {
        onInputOnChange,
        handleSubmit,
        isSubmitDisabled
    } = props;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        First name
                        <input
                            type="text"
                            name="firstName"
                            onChange={onInputOnChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Last name
                        <input
                            type="text"
                            name="lastName"
                            onChange={onInputOnChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        email
                        <input
                            type="text"
                            name="email"
                            onChange={onInputOnChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        password
                        <input
                            type="text"
                            name="password"
                            onChange={onInputOnChange}
                        />
                    </label>
                </div>

                <button type="submit" disabled={isSubmitDisabled}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterComponent;
