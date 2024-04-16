import React from 'react';
import SelectBox from '@components/inputs/modalInput/selectBox/SelectBox';
import ImageInput from '@components/inputs/modalInput/imageInput/ImageInput';

function Home() {
  const sampleList = ['To Do', 'on Progress', 'Done'];
  const inputSelectType = true;
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
    </div>
  );
}

export default Home;
