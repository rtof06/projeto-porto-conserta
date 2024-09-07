import style from "./PrimaryInputs.module.css";

interface PrimaryInputProps {
  type: React.HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

export default function PrimaryInput({
  type,
  name,
  id,
  placeholder,
  onChange,
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
      required={required}
      
    />
  );
}
