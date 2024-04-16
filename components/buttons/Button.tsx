import React, { MouseEventHandler, ReactNode } from 'react';
import * as S from '@components/buttons/Button.style';
import Image from 'next/image';

// Icons
import addIcon from '@public/icons/add.svg';
import rightArrowIcon from '@public/icons/right_arrow.svg';
import leftArrowIcon from '@public/icons/left_arrow.svg';
import crownIcon from '@public/icons/crown.svg';

export type DashboardData = {
  color: string;
  title: string;
  createdByMe: boolean;
};

type ButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

type DashboardButtonProps = ButtonProps & {
  dashboardData: DashboardData;
};

function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

function Login(props: ButtonProps) {
  return <S.LoginButton {...props} />;
}

function Confirm(props: ButtonProps) {
  return <S.ConfirmButton {...props} />;
}

function Reject(props: ButtonProps) {
  return <S.RejectButton {...props} />;
}

function ModalConfirm(props: ButtonProps) {
  return <S.ModalConfirmButton {...props} />;
}

function ModalReject(props: ButtonProps) {
  return <S.ModalRejectButton {...props} />;
}

function ModalComment(props: ButtonProps) {
  return <S.ModalCommentButton {...props} />;
}

function Delete(props: ButtonProps) {
  return <S.DeleteButton {...props} />;
}

function DeleteDashboard(props: ButtonProps) {
  return <S.DeleteDashboardButton {...props} />;
}

function AddColumn({ children, onClick }: ButtonProps) {
  return (
    <S.AddColumnButton onClick={onClick}>
      {children}
      <Image src={addIcon.src} width={30} height={30} alt="임시 add 아이콘" />
    </S.AddColumnButton>
  );
}

function AddTodo({ onClick }: ButtonProps) {
  return (
    <S.AddTodoButton onClick={onClick}>
      <Image src={addIcon.src} width={30} height={30} alt="임시 add 아이콘" />
    </S.AddTodoButton>
  );
}

function PagenationLeft({ onClick }: ButtonProps) {
  return (
    <S.PagenationLeftButton onClick={onClick}>
      <Image src={leftArrowIcon.src} width={16} height={16} alt="왼쪽 화살표 아이콘" />
    </S.PagenationLeftButton>
  );
}

function PagenationRight({ onClick }: ButtonProps) {
  return (
    <S.PagenationRightButton onClick={onClick}>
      <Image src={rightArrowIcon.src} width={16} height={16} alt="오른쪽 화살표 아이콘" />
    </S.PagenationRightButton>
  );
}

function AddDashboard({ children, onClick }: ButtonProps) {
  return (
    <S.AddDashboardButton onClick={onClick}>
      {children}
      <Image src={addIcon.src} width={30} height={30} alt="임시 add 아이콘" />
    </S.AddDashboardButton>
  );
}

function Dashboard({ onClick, dashboardData }: DashboardButtonProps) {
  return (
    <S.DashboardButton onClick={onClick}>
      <S.Dashboard>
        <S.UserData>
          <S.ColorChip color={dashboardData.color}></S.ColorChip>
          <S.DashboardTitle>{dashboardData.title}</S.DashboardTitle>
          {dashboardData.createdByMe && <Image src={crownIcon.src} width={20} height={16} alt="왕관 아이콘" />}
        </S.UserData>
        <Image src={rightArrowIcon.src} width={16} height={16} alt="오른쪽 화살표 아이콘" />
      </S.Dashboard>
    </S.DashboardButton>
  );
}

Button.Login = Login;
Button.Confirm = Confirm;
Button.Reject = Reject;
Button.Delete = Delete;
Button.AddColumn = AddColumn;
Button.AddTodo = AddTodo;
Button.DeleteDashboard = DeleteDashboard;
Button.PagenationRight = PagenationRight;
Button.PagenationLeft = PagenationLeft;
Button.AddDashboard = AddDashboard;
Button.Dashboard = Dashboard;
Button.ModalConfirm = ModalConfirm;
Button.ModalReject = ModalReject;
Button.ModalComment = ModalComment;

export default Button;
