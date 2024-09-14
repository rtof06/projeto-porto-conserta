import style from "./PrimaryInputs.module.css";

type PrimaryInputProps = {
  type: React.HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder?: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  title?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  required?: boolean;
};

export default function PrimaryInput({
  type,
  name,
  id,
  placeholder,
  minLength,
  maxLength,
  min,
  max,
  pattern,
  title,
  onChange,
  value,
  required,
}: PrimaryInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      onChange={onChange}
      className={style.input}
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
      title={title}
      value={value}
      required={required}
    />
  );
}
