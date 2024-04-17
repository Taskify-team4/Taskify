import Button from '@components/buttons/Button';
import ModalBase from '@components/modals/ModalBase';
import Modal from '@components/modals/Modal';
import TestModal from '@components/modals/TestModal';
import React from 'react';

function Home() {
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
