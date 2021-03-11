/** @jsxImportSource @emotion/react */
import { ChangeEventHandler, FC , MouseEvent } from "react";
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
  title: string;
  id: number;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleUpdate: (e: MouseEvent<HTMLButtonElement>, id: number) => void;
  handleClose: (e: MouseEvent<HTMLButtonElement>) => void;
};


const EditField: FC<Props> = (props) => {
  const { handleChange, handleUpdate, handleClose, title, id,  ...rest } = props;
  return (
    <div css={editFieldStyle} {...rest}>
      <button css={closeButtonStyle} onClick={handleClose}>X</button>
      <input css={inputTextStyle} type="text" onChange={handleChange} defaultValue={title} />
      <button css={buttonStyle} onClick={(e) => handleUpdate(e, id)}>Update</button>
    </div>
  );
};

export default EditField;