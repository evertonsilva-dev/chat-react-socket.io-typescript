import { MiddleBackground, MiddleSecondBackground, Shadow } from 'src/styles/components';
import styled from 'styled-components';
export const ChatContainer = styled.div`
  background-color: ${MiddleSecondBackground};
  width: 400px;
  display: block;
  border-radius: 6px;
  box-shadow: 0 10px 30px ${Shadow};
  padding: 30px;
  align-self: center;
  position: relative;
`;
export const MessageContainer = styled.div`
  background-color: ${MiddleBackground};
  height: 400px;
  left: 30px;
  padding: 30px;
  border-radius: 6px;
  overflow-y: auto;
`;
export const Message = styled.span`
  display: block;
  padding: 10px;
  background: ${MiddleSecondBackground};
  border-radius: 6px;
  margin-bottom: 10px;
  .name {
    display: block;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
