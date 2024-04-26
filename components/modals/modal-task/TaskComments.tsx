import * as S from '@components/modals/modal-task/ModalTask.style';
import CommentInput from '@components/inputs/modalInput/commentInput/CommentInput';
import { useEffect, useState } from 'react';
import { TComment } from '@pages/dashboard/Dashboard.type';
import { useDashContext } from '@contexts/dashContext';
import { deleteComment, getComments, postNewComment, updateComment } from '@utils/api';

function TaskComments({ cardid, columnid }) {
  const { dashboardId } = useDashContext();
  const [comments, setComments] = useState<TComment[]>([]);
  const [commentData, setCommentData] = useState({
    id: 0,
    content: '',
    cardId: cardid,
    columnId: columnid,
    dashboardId: Number(dashboardId),
  });
  const [isEdit, setIsEdit] = useState(false);

  const fetchComments = async () => {
    const res = await getComments(cardid);
    setComments(res);
  };

  const handleChangeCommentContent = (comment: string) => {
    setCommentData((prevState) => ({
      ...prevState,
      content: comment,
    }));
  };

  const handleCreateNewComment = async () => {
    try {
      const res = await postNewComment(commentData);
      if (res.id) {
        fetchComments();
      }
    } catch (error) {
      console.error('댓글 생성 실패', error);
    }
  };

  const handleUpdateComment = async (id: number) => {
    try {
      const res = await updateComment(commentData, id);
      if (res.id) {
        fetchComments();
      }
    } catch (error) {
      console.error('댓글 생성 실패', error);
    }
  };

  const handleDeleteComment = async (id: number) => {
    try {
      await deleteComment(id);
      fetchComments();
    } catch (error) {
      console.error('댓글 삭제 실패', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <S.CommentContainer>
      <CommentInput placeholder="댓글 작성하기" onChange={handleChangeCommentContent} onClick={handleCreateNewComment}>
        댓글
      </CommentInput>
      <S.CommentList>
        {comments
          ? comments.map((comment, index) => (
              <S.CommentItem key={`${index} ${comment.author.nickname}`}>
                <S.AuthorProfile str={comment.author.nickname[0]} />
                <S.CommentWrapper>
                  <S.CommentInfo>
                    <S.AuthorName>{comment.author.nickname}</S.AuthorName>
                    <S.CreatedTime>{comment.updatedAt}</S.CreatedTime>
                  </S.CommentInfo>
                  {isEdit ? (
                    <S.EditCommentInput
                      defaultValue={comment.content}
                      onChange={handleChangeCommentContent}
                      onClick={() => {
                        handleUpdateComment(comment.id);
                        setIsEdit(false);
                      }}
                      children={''}
                    />
                  ) : (
                    <S.CommentContent>{comment.content}</S.CommentContent>
                  )}
                  <S.Buttons>
                    <S.CommentButton onClick={() => setIsEdit(true)}>수정</S.CommentButton>
                    <S.CommentButton onClick={() => handleDeleteComment(comment.id)}>삭제</S.CommentButton>
                  </S.Buttons>
                </S.CommentWrapper>
              </S.CommentItem>
            ))
          : null}
      </S.CommentList>
    </S.CommentContainer>
  );
}

export default TaskComments;
