import Button from '@components/buttons/Button';
import ModalBase from '@components/modals/ModalBase';
import Modal from '@components/modals/Modal';
import TestModal from '@components/modals/TestModal';
import React from 'react';
import SelectBox from '@components/inputs/modalInput/selectBox/SelectBox';
import ImageInput from '@components/inputs/modalInput/imageInput/ImageInput';
import ModalInput from '@components/inputs/modalInput/ModalInput';
import TagInput from '@components/inputs/modalInput/tagInput/TagInput';
import CommentInput from '@components/inputs/modalInput/commentInput/CommentInput';
import DateInput from '@components/inputs/modalInput/dateInput/DateInput';

function Home() {
  const sampleList = ['To Do', 'on Progress', 'Done'];
  const inputSelectType = true;
  const modalInputRequired = true;
  return (
    <div>
      <Modal
        content={
          <ModalBase>
            {/* 모달 content */}
            <TestModal />
          </ModalBase>
        }
      >
        <Button.ModalComment>모달 여는 버튼</Button.ModalComment>
      </Modal>
    </div>
  );
}

export default Home;
