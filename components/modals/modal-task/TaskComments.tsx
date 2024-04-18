import * as S from '@components/modals/modal-task/ModalTask.style';
import CommentInput from '@components/inputs/modalInput/commentInput/CommentInput';
// 임시로 만듦
type commentType = {
  author: {
    nickname: string;
  };
  content: string;
  createdAt: string;
  updatedAt: string;
};
const testComments: commentType[] = [
  {
    author: {
      nickname: '홍성욱1',
    },
    content: '언제까지 해야하는건가요?',
    createdAt: '2024-04-18 14:00',
    updatedAt: '2024-04-18 14:00',
  },
  {
    author: {
      nickname: '홍성욱2',
    },
    content: '내일까지요',
    createdAt: '2024-04-18 15:00',
    updatedAt: '2024-04-18 15:00',
  },
  {
    author: {
      nickname: '홍성욱1',
    },
    content: '수정 완료 했습니다',
    createdAt: '2024-04-18 16:00',
    updatedAt: '2024-04-18 17:00',
  },
];
function TaskComments() {
  return (
    <>
      <CommentInput placeholder="댓글 작성하기">댓글</CommentInput>
      <S.CommentList>
        {testComments
          ? testComments.map((comment, index) => (
              <S.CommentItem key={`${index} ${comment.author.nickname}`}>
                <S.AuthorProfile>{comment.author.nickname[0]}</S.AuthorProfile>
                <S.CommentWrapper>
                  <S.CommentInfo>
                    <S.AuthorName>{comment.author.nickname}</S.AuthorName>
                    <S.CreatedTime>{comment.updatedAt}</S.CreatedTime>
                  </S.CommentInfo>
                  <S.CommentContent>{comment.content}</S.CommentContent>
                  <S.Buttons>
                    <S.CommentButton>수정</S.CommentButton>
                    <S.CommentButton>삭제</S.CommentButton>
                  </S.Buttons>
                </S.CommentWrapper>
              </S.CommentItem>
            ))
          : null}
      </S.CommentList>
    </>
  );
}

export default TaskComments;
