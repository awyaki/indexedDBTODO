/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { Interpolation, Theme } from "@emotion/react";
import { colors } from "colors";

const editFieldStyle: Interpolation<Theme> = {
  width: "100%",
  height: "300px",
  backgroundColor: "rgba(0, 0, 0, .25)",
};

type Props = {
  layout: Interpolation<Theme>;
};

const EditField: FC<Props> = (props) => {
  return (
    <div css={editFieldStyle} {...props}>
      <h1>Edit Field</h1>
    </div>
  );
};

export default EditField;