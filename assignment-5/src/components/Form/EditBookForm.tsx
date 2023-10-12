import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useBookContext } from '~/context/BookContext';
import { FormCreateBookSchema, FormEditBookType } from '~/validations/schema';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import Button from '../Button';

interface IEditBookFormProps {
  item: IBook;
  onFinished: () => void;
}

function EditBookForm({ item, onFinished }: IEditBookFormProps) {
  const { totalTopics, editBook } = useBookContext();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormEditBookType>({
    resolver: zodResolver(FormCreateBookSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormEditBookType> = (form) => {
    editBook(item.id, form);
    onFinished();
    toast.success('Book edited successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-10">
      <FormInput
        control={control}
        title="Title"
        name="title"
        defaultValue={item?.title}
        required
        errors={errors.title?.message}
        placeholder="Book Title"
      />
      <FormInput
        control={control}
        title="Author"
        name="author"
        defaultValue={item?.author}
        required
        errors={errors.author?.message}
        placeholder="Book author"
      />
      <FormSelect
        control={control}
        title="Topic"
        name="topic"
        defaultValue={item?.topic}
        options={totalTopics}
        errors={errors.topic?.message}
        placeholder="Select a topic"
        required
      />
      <Button type="submit" className="px-4 py-3 bg-primary text-white w-full mt-2">
        Update
      </Button>
    </form>
  );
}

export default EditBookForm;
