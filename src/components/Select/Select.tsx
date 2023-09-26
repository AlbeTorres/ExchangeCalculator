import styled from "styled-components";
import { UseFormRegister } from "react-hook-form";

type Props = JSX.IntrinsicElements["select"] & {
  label: string;
  error?: string;
  h?: number;
  w?: number;
  items: string[];
  register: UseFormRegister<any>;
  name: string;
};

export const Select = ({ name, label, error, h, w, items, register, ...props }: Props) => {
  return (
    <Div>
      <Label>{label}</Label>
      <SelectWrapper $h={h} $w={w}>
        <StyledSelect {...register(name)} {...props}>
          {items.map((i, index) => (
            <option value={i} key={index}>
              {i}
            </option>
          ))}
        </StyledSelect>
      </SelectWrapper>
    </Div>
  );
};

const StyledSelect = styled.select`
  background-color: transparent;
  box-shadow: none !important;
  flex: 1;
  height: 100%;
  outline: none !important;
  padding: 0 0.5rem;
  width: 100%;
  border-radius: 0.25rem;
  outline: none !important;
  border: none;
`;
const SelectWrapper = styled.div<{
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
