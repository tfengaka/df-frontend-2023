import React from 'react';

interface ITextFieldProps {
  title: string;
  type?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({ title, name, type = 'text', placeholder, required, onChange }: ITextFieldProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-[15px] font-bold">{title}</span>
      <input
        id={name}
        type={type}
        name={name}
        className="text-sm font-semibold p-2 rounded-md outline-none border-2 border-[#acbbcf] transition-colors hover:border-primary focus:border-primary placeholder:text-[#606e81] placeholder:opacity-70"
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;
