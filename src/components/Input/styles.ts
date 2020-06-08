import { MiddleBackground, Primary } from 'src/styles/components';
import styled from 'styled-components';

const inputDefault = `
  padding: 15px;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  color: #666;
  border-radius:6px;
  margin: 10px 0;
  box-shadow: 0px 3px 6px #00000029;
  &:focus {
    outline: none;
  }

`;
export const Input = styled.input`
  ${inputDefault}
  background:${MiddleBackground};
  border:2px solid ${MiddleBackground};
  &[type="file"] {
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`;
export const File = styled.input`
  height: 1px;
  width: 1px;
  opacity: 0;
  pointer-events: none;
  + label {
    cursor: pointer;
    .cont-pictures {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
    }
    .select-picture {
      height: 150px;
      width: 150px;
      border: 1px dashed #aaa;
      display: inline-block;
      border-radius: 6px;
      position: relative;
      &::before {
        content: '+';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
        color: #aaa;
      }
    }
    picture {
      height: 150px;
      width: 150px;
      border: 1px solid #888;
      display: inline-block;
      margin: 0;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
export const CheckBox = styled.input`
  height: 1px;
  width: 1px;
  opacity: 0;
  position: absolute;
  + label {
    padding: 5px 0;
    display: inline-block;
    &::before {
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 3px;
      vertical-align: middle;
      display: inline-block;
      margin-right: 5px;
      background-size: cover;
      background-color: ${MiddleBackground};
      box-shadow: 0px 3px 6px #00000029;
      transition: 0.3s;
    }
    &::after {
      content: '';
      width: 20px;
      height: 20px;
      position: absolute;
      left: 0;
      top: 7px;
      transform: scale(0);
      border-radius: 3px;
      vertical-align: middle;
      display: inline-block;
      margin-right: 5px;
      background-size: cover;
      background-color: ${MiddleBackground};
      transition: 0.3s;
    }
  }
  &:checked {
    + label {
      position: relative;
      &::before {
        content: '';
        background-color: ${Primary};
      }
      &::after {
        transform: scale(0.4);
      }
    }
  }
`;
export const Radio = styled(CheckBox)`
  + label {
    padding: 5px 0;
    &::before {
      border-radius: 50%;
    }
    &::after {
      border-radius: 50%;
    }
  }
`;
export const TextArea = styled.textarea`
  ${inputDefault}
  background:${MiddleBackground};
  border:2px solid ${MiddleBackground};
  resize:none;
`;
