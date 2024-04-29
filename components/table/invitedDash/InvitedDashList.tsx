import React, { useRef, useEffect } from 'react';
import * as S from '@components/table/TableList.style';
import Button from '@components/buttons/Button';
import { InvitedDashListProps } from '@components/table/Table.type';

const NOT_LAST = 9;
function InvitedDashList({ data, IsObserverEnd, onConfirmClick, onRejectClick }: InvitedDashListProps) {
  const myEndRef = useRef(null);
  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && data[NOT_LAST]) {
        IsObserverEnd?.setCursorId(data[NOT_LAST].id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (myEndRef.current) {
      observer.observe(myEndRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [data]);

  return (
    <>
      <S.InvitedDashListTitleContainer>
        <S.ListData>
          <span>이름</span>
          <span>초대자</span>
          <span>수락여부</span>
        </S.ListData>
      </S.InvitedDashListTitleContainer>
      <S.TableListScrollBox>
        {data?.map((item, index) => (
          <S.TableList key={item.id} ref={index === data.length - 1 ? myEndRef : null}>
            <S.ListData $isInvitedDash>
              <S.DashTitle>{item.dashboard.title}</S.DashTitle>
              <S.InviterName>{item.inviter.nickname}</S.InviterName>
              <span>
                <S.InvitedDashButtonsContainer>
                  <Button.Confirm
                    onClick={() => {
                      if (onConfirmClick) {
                        onConfirmClick(item.id);
                      }
                    }}
                  >
                    수락
                  </Button.Confirm>
                  <Button.Reject
                    onClick={() => {
                      if (onRejectClick) {
                        onRejectClick(item.id);
                      }
                    }}
                  >
                    거절
                  </Button.Reject>
                </S.InvitedDashButtonsContainer>
              </span>
            </S.ListData>
          </S.TableList>
        ))}
      </S.TableListScrollBox>
    </>
  );
}

export default InvitedDashList;
