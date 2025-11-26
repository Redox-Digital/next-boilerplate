import css from './Inputs.module.scss';

type Props = {
  type: string;
  id: string;
  value: string;
  changeHandler: (e: any) => void;
  regex?: string;
  errorMsg?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  children: string;
};

export default function TextInput({
  type,
  id,
  changeHandler,
  regex,
  required,
  errorMsg,
  placeholder,
  min,
  max,
  children,
  value,
}: Props) {
  if (type === 'textarea') {
    return (
      <label htmlFor={id} className={`${css.input} ${css.textarea}`}>
        <textarea
          id={id}
          name={id}
          required={required}
          placeholder={placeholder || children}
          value={value}
          onChange={changeHandler}
        />
        <span>{children}</span>
      </label>
    );
  } else {
    return (
      <label htmlFor={id} className={css.input}>
        <input
          type={type}
          id={id}
          name={id}
          required={required}
          placeholder={placeholder || children}
          pattern={regex}
          title={errorMsg}
          minLength={min}
          maxLength={max}
          value={value}
          onChange={changeHandler}
        />
        <span>{children}</span>
      </label>
    );
  }
}
