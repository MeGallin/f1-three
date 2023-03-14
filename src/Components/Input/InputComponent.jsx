import './InputComponent.css';
import PropTypes from 'prop-types';

const InputComponent = ({
  id,
  type,
  label,
  name,
  value,
  placeholder,
  error,
  className,
  onChange,
  btnType,
  btnOnClick,
  btnDisabled,
}) => {
  return (
    <>
      <div className="input-wrapper">
        {label && <label htmlFor={`input-field-${label}`}>{label}</label>}
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          error={error}
          className={className}
          onChange={onChange}
        />

        {error && <p className="validation-error">{error}</p>}
        <button type={btnType} disabled={btnDisabled} onClick={btnOnClick}>
          {btnDisabled ? 'DISABLED' : 'SUBMIT'}
        </button>
      </div>
    </>
  );
};

InputComponent.defaultProps = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
InputComponent.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputComponent;
