import { getButtonStyles } from './ButtonStyles';

export const Button = ({ label, callBack }) => {
    return (
        <button css={getButtonStyles} onClick={callBack}>
            {label}
        </button>
    );
};
