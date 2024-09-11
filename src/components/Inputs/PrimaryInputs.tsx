import style from "./PrimaryInputs.module.css";

type PrimaryInputProps = {
  type: React.HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  required?: boolean;
};

export default function PrimaryInput({
  type,
  name,
  id,
  placeholder,
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
      value={value}
      required={required}
    />
  );
}
