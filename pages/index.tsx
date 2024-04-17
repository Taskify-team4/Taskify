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
    <div style={{ padding: '15px' }}>
      {/* <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id
        voluptas laboriosam ipsam eum obcaecati tenetur. Distinctio ipsa enim
        cupiditate cum illo eius inventore tenetur, et, delectus quidem ex
        fugiat.
      </span> */}
      <SelectBox onData={sampleList}>상태</SelectBox>
      <br />
      <br />
      <br />
      <br />
      <SelectBox onData={sampleList} onType={inputSelectType}>
        담당자
      </SelectBox>
      <br />
      <br />
      <br />
      <br />
      <ImageInput />
      <br />
      <br />
      <br />
      <br />
      <ModalInput id="title" type="text" placeholder="제목을 입력해 주세요." onRequired={modalInputRequired}>
        제목
      </ModalInput>
      <br />
      <br />
      <br />
      <br />
      <TagInput id="tag" type="text" placeholder="입력 후 Enter">
        태그
      </TagInput>
      <br />
      <br />
      <br />
      <br />
      <DateInput>마감일</DateInput>
      <br />
      <br />
      <br />
      <br />
      <CommentInput id="comment" placeholder="댓글 작성하기">
        댓글
      </CommentInput>
    </div>
  );
}

export default Home;
