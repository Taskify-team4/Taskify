import Button from '@components/buttons/Button';
import ModalBase from '@components/modals/ModalBase';
import Modal from '@components/modals/Modal';
import React from 'react';
import PasswordModal from '@components/modals/inconsistent_password/Modal';

function Home() {
  return (
    <div>
      <Modal
        content={
          <ModalBase>
            {/* 모달 content */}
            <PasswordModal />
          </ModalBase>
        }
      >
        <Button.ModalComment>모달 여는 버튼</Button.ModalComment>
      </Modal>
    </div>
  );
}

export default Home;
