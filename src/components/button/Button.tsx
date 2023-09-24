import styled from "styled-components";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  variant?: "outlined" | "contained";
};

const Styledbutton = styled.button<{
  $variant?: "outlined" | "contained";
}>`
  background: ${(props) => (props.$variant === "contained" ? "#18189c" : "white")};
  color: ${(props) => (props.$variant === "contained" ? "white" : "#18189c")};
  height: 2rem;
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  min-height: 2rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  border: none;
  border-color: ${(props) => (props.$variant === "contained" ? "#18189c" : "white")};
  &:hover {
    cursor: pointer;
    background: ${(props) => (props.$variant === "contained" ? "#131368" : "white")};
    color: ${(props) => (props.$variant === "contained" ? "white" : "#131368")};
  }
`;

export const Button = ({ variant = "outlined", disabled, children, ...props }: ButtonProps) => (
  <Styledbutton $variant={variant} disabled={disabled} {...props}>
    {children}
  </Styledbutton>
);
