interface PrimaryInputProps {
   name:string,
   value:string,
   onChange():void
}

export default function PrimaryInput({name, value, onChange} : PrimaryInputProps) {
   return (
      <input type="text" placeholder="" name={name} value={value} onChange={onChange}/>
   )
}