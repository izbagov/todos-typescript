import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
  padding: 0 15px;
  height: 50px;
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #e0e0e0;
  }
`;

export const Text = styled.div`
  flex: 1;
`;

export const Status = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
export const Delete = styled.span`
  margin-right: 25px;
  border-radius: 4px;
  width: 30px;
  text-align: center;
  padding-left: 5px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;
