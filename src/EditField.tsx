/** @jsxImportSource @emotion/react */
import { ChangeEventHandler, FC } from "react";
import { Interpolation, Theme } from "@emotion/react";
import { colors } from "colors";

const editFieldStyle: Interpolation<Theme> = {
  width: "100%",
  height: "300px",
  padding: "2rem",
  backgroundColor: colors.orange,
  position: "absolute",
  top: "100%",
  left: "0",
  transform: "translateY(-100%)",
};

const inputTextStyle: Interpolation<Theme> = {
  border: `1px solid ${colors.gray}`,
  display: "block",
  backgroundColor: colors.white,
};

const buttonStyle: Interpolation<Theme> = {
  backgroundColor: colors.green.level1,
  borderRadius: "5px",
  transition: ".25s",
  color: colors.white, 
  padding: ".5rem 1rem",
  border: `1px solid ${colors.gray}`,
  "&:hover": {
    backgroundColor: colors.white,
    color: colors.gray,
  }
};

const closeButtonStyle: Interpolation<Theme> = {
  color: colors.white,
};

type Props = {
  layout?: Interpolation<Theme>;
  handleChange?: ChangeEventHandler<HTMLButtonElement>;
};


const EditField: FC<Props> = (props) => {
  return (
    <div css={editFieldStyle} {...props}>
      <button css={closeButtonStyle}>X</button>
      <input css={inputTextStyle} type="text" />
      <button css={buttonStyle}>Update</button>
    </div>
  );
};

export default EditField;