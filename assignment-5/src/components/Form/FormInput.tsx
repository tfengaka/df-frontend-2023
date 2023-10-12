import React from 'react';
import { Control, useController } from 'react-hook-form';

interface IFormInputProps {
  control: Control<any>;
  title: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  placeholder?: string;
  errors?: string;
  defaultValue?: string;
}

function FormInput({ control, title, name, type = 'text', required, errors, defaultValue, ...rest }: IFormInputProps) {
  const { field } = useController({ control, name, defaultValue: defaultValue || '' });

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-[15px] font-bold">
        {title}
        {required && <strong className="text-danger">*</strong>}
      </label>
      <div className="w-full flex flex-col">
        <input
          id={name}
          type={type}
          className="text-sm font-semibold p-2 rounded-md outline-none border-2 border-[#acbbcf] transition-colors hover:border-rose-400 focus:border-rose-400 placeholder:text-[#606e81] placeholder:opacity-70"
          {...rest}
          {...field}
        />
        <div className="w-full min-h-[20px]">
          {errors && <span className="text-red-500 font-semibold text-sm">{errors}</span>}
        </div>
      </div>
    </div>
  );
}

export default FormInput;
