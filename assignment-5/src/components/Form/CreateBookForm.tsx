import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useBookContext } from '~/context/BookContext';
import { FormCreateBookSchema, FormCreateBookType } from '~/validations/schema';
import Button from '../Button';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

interface ICreateBookFormProps {
  onFinished: () => void;
}

function CreateBookForm({ onFinished }: ICreateBookFormProps) {
  const { totalTopics, createBook } = useBookContext();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormCreateBookType>({
    resolver: zodResolver(FormCreateBookSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormCreateBookType> = (form) => {
    createBook(form);
    onFinished();
    toast.success('Book created successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-10">
      <FormInput
        control={control}
        title="Title"
        name="title"
        required
        errors={errors.title?.message}
        placeholder="Book Title"
      />
      <FormInput
        control={control}
        title="Author"
        name="author"
        required
        errors={errors.author?.message}
        placeholder="Book author"
      />
      <FormSelect
        control={control}
        title="Topic"
        name="topic"
        options={totalTopics}
        errors={errors.topic?.message}
        placeholder="Select a topic"
        required
      />
      <Button type="submit" className="px-4 py-3 bg-primary text-white w-full mt-2">
        Create Item
      </Button>
    </form>
  );
}

export default CreateBookForm;
