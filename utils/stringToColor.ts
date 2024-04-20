// 글자를 랜덤 파스텔색으로 변경하는 함수
function stringToColor(str: string) {
  if (str && str.length > 0) {
    let hash = 0;

    hash = (str.charCodeAt(0) * 12345) % 100000;

    const color = (hash * 127 + 128).toString(16);
    return color;
  }
}

export default stringToColor;
