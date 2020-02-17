import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { close } from 'store/modules/overlay';
import * as S from './Overlay.style';

const Overlay = () => {
  const { isOpen } = useSelector(state => state.overlay);
  const dispatch = useDispatch();

  const onClickAround = () => {
    dispatch(close());
  };

  return (
    <S.Overlay data-testid="overlay" open={isOpen}>
      <S.UL>
        <S.LI>
          <Link to="/around" data-testid="around-link" onClick={onClickAround}>
            둘러보기
          </Link>
        </S.LI>
        <S.LI>좋아요</S.LI>
        <S.LI>소개</S.LI>
      </S.UL>
    </S.Overlay>
  );
};

export default Overlay;