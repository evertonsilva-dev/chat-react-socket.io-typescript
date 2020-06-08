import React, { InputHTMLAttributes, ReactNodeArray, useState } from 'react';
import { CheckBox, File, Input, Radio } from './styles';

interface OwnProps {
  label?: string;
  type: string;
  id?: string;
  name: string;
  placeholder?: string;
  options?: Array<object>;
  mask?: string;
}

type Props = OwnProps & InputHTMLAttributes<any>;

const InputWrapper = (props: Props) => {
  const [pictures, setPictures] = useState<ReactNodeArray>([]);

  const selectFile = (e: any) => {
    let files: Array<any> = [];

    Array.from(e.target.files).map(function (value: any) {
      return files.push(
        <picture>
          <img src={`${URL.createObjectURL(value)}`} alt="" />
        </picture>
      );
    });
    setPictures(files);
  };
  return (
    <div className={`cont-input ${props.type + ' ' + props.className}`}>
      {props.label && props.type !== 'checkbox' && props.type !== 'radio' && props.type !== 'file' && (
        <label htmlFor={props.id}>{props.label}</label>
      )}
      {props.type === 'checkbox' ? (
        <>
          <CheckBox {...props} />
          <label htmlFor={props.id} className="check checkbox">
            {props.label}
          </label>
        </>
      ) : props.type === 'radio' ? (
        <>
          <Radio {...props} />
          <label htmlFor={props.id} className="check radio">
            {props.label}
          </label>
        </>
      ) : props.type === 'file' ? (
        <>
          <File {...props} onChange={(e) => selectFile(e)} />
          <label htmlFor={props.id}>
            {props.label}
            <div className="cont-pictures">
              {pictures.length <= 0 ? <div className="select-picture"></div> : pictures}
            </div>
          </label>
        </>
      ) : (
        <Input {...props} />
      )}
    </div>
  );
};
export default InputWrapper;
