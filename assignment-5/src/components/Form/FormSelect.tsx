import { Control, useController } from 'react-hook-form';

interface IFormSelectProps {
  control: Control<any>;
  title: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  options: string[];
  errors?: string;
  defaultValue?: string;
}

function FormSelect({ control, title, name, options, placeholder, errors, required, defaultValue }: IFormSelectProps) {
  const { field } = useController({ control, name, defaultValue: defaultValue || '' });

  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={name} className="text-[15px] font-bold">
        {title}
        {required && <strong className="text-danger"> *</strong>}
      </label>
      <div className="w-full flex flex-col">
        <select
          id={name}
          className="text-sm font-semibold p-2 rounded-md outline-none border-2 border-[#acbbcf] transition-colors hover:border-primary focus:border-primary"
          {...field}
        >
          <option className="font-semibold text-sm text-[#535f70]" defaultValue="" hidden>
            {placeholder}
          </option>
          {options.length > 0 &&
            options.map((option, index) => (
              <option key={index} value={option} className="font-semibold text-sm text-secondary">
                {option}
              </option>
            ))}
        </select>
        <div className="w-full min-h-[20px]">
          {errors && <span className="text-red-500 font-semibold text-sm">{errors}</span>}
        </div>
      </div>
    </div>
  );
}

export default FormSelect;
