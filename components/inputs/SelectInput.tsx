import css from './Inputs.module.scss';

type Props = {
  id: string;
  changeHandler: (e: any) => void;
  required?: boolean;
  children: string;
  options: { id: string; label: string; default?: boolean }[];
};

export default function SelectInput({ id, changeHandler, required, options, children }: Props) {
  return (
    <label htmlFor={id} className={css.input}>
      <select
        id={id}
        name={id}
        onChange={changeHandler}
        defaultValue={options.find((opt) => opt.default === true)?.id}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <span>{children}</span>
    </label>
  );
}
