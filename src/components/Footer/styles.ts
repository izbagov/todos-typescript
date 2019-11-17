import styled, { css } from 'styled-components';

interface ILink {
  active?: boolean;
}

export const Container = styled.footer`
  font-size: 12px;
  padding-top: 5px;
  display: flex;
`;

export const Count = styled.div``;
export const Filters = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-left: 10px;
`;
export const Link = styled.span<ILink>`
  cursor: pointer;
  margin-left: 10px;

  ${props =>
    props.active &&
    css`
      color: red;
    `}
`;
