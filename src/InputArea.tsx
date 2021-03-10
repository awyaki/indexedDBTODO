/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { colors } from "colors";
import { ChangeEventHandler, FC, MouseEvent } from "react";

const inputTodoLayout: Interpolation<Theme> = {
  display: "flex",
  alignItems: "center",
};

const textAreaStyle: Interpolation<Theme> = {
  width: "100%",
  border: `1px solid ${colors.green.level1}`,
  height: "2.3rem",
  borderRadius: "5px",
  padding: ".3rem",
  marginRight: ".7rem",
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

const disabledButtonStyle: Interpolation<Theme> = {
  ...buttonStyle,
  backgroundColor: colors.gray,
  "&:hover": {
    backgroundColor: colors.gray,
    color: colors.white,
  }
}; 

type Props = {
  text: string,
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const InputArea: FC<Props> = (props) => {
  const { text, handleChange, handleClick } = props;

  return (
    <div css={inputTodoLayout}>
      <input 
        css={textAreaStyle} 
        type="text" 
        value={text} 
        onChange={handleChange} />
      <button 
        css={text === "" ? disabledButtonStyle : buttonStyle} 
        onClick={(e) => handleClick(e)} 
        disabled={text === ""}>Create</button>
    </div>
  );
};

export default InputArea;