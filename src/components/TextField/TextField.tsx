import { ForwardedRef, forwardRef } from "react";
import styled, { css } from "styled-components";

type Props = JSX.IntrinsicElements["input"] & {
  label: string;
  error?: string;
  h?: number;
  w?: number;
  textAlign: "start" | "center" | "end";
};

const _TextField = (
  { disabled = false, readOnly = false, label, error, h, w, textAlign, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <Div>
      <Label>{label}</Label>
      <InputWrapper $h={h} $w={w}>
        <StyledInput
          ref={ref}
          readOnly={readOnly}
          disabled={disabled}
          $textAlign={textAlign}
          {...props}
        />
      </InputWrapper>
      {error && <Error>{error}</Error>}
    </Div>
  );
};

export type TextAlign = "start" | "center" | "end";

const StyledInput = styled.input<{ $textAlign?: TextAlign }>`
  ${({ $textAlign = "start" }) => css`
    background-color: transparent;
    box-shadow: none !important;
    flex: 1;
    height: 100%;
    outline: none !important;
    padding: 0 0.5rem;
    text-align: ${$textAlign};
    width: 100%;
    border-radius: 0.25rem;
    outline: none !important;
    border: none;
  `}
`;

const InputWrapper = styled.div<{
  $h?: number;
  $w?: number;
}>`
  height: ${({ $h }) => ($h ? `${$h}rem` : "100%")};
  width: ${({ $w }) => ($w ? `${$w}rem` : "100%")};
  padding: 2;
  border: 1.5px solid;
  border-color: #a5a5a5;
  border-radius: 0.25rem;
`;

const Div = styled.div`
  padding: 2;
`;

const Label = styled.label`
  font-weight: bold;
`;
const Error = styled.p`
  color: #d01e1e;
`;

const TextField = forwardRef(_TextField);
export default TextField;
