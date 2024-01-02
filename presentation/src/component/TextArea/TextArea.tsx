import React, { TextareaHTMLAttributes } from 'react';
import { textAreaTypes } from 'lib/@native/rkTextarea/textArea.rk'


interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   textareas:textAreaTypes
}

const Textarea = ({ textareas, ...props }:TextareaProps) => {
  return (
    <>
    <label>{textareas.label}</label>
    <textarea {...props} />
    </>
  )
  
};

export default Textarea;
