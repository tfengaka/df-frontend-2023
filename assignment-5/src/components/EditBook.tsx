'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from './Button';
import EditBookForm from './Form/EditBookForm';
import Modal from './Modal';

interface IEditBookProps {
  data: IBook;
}

function EditBook({ data }: IEditBookProps) {
  const router = useRouter();
  const [isOpenModal, setOpenModal] = useState(false);

  const onFinished = () => {
    setOpenModal(false);
    router.refresh();
  };
  return (
    <>
      <Button className="px-[10px] py-[6px] bg-orange-400 text-white" onClick={() => setOpenModal(true)}>
        Edit
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setOpenModal(false)} className="max-w-[600px] max-h-[600px]">
          <h3 className="text-center text-xl font-bold text-secondary">Edit Book</h3>
          <EditBookForm item={data} onFinished={onFinished} />
        </Modal>
      )}
    </>
  );
}

export default EditBook;
