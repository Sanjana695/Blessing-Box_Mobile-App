import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title, color, width }) {
  const { handleSubmit } = useFormikContext();
  return (
    <>
      <AppButton
        title={title}
        onPress={handleSubmit}
        color={color}
        width={width}
      />
    </>
  );
}
export default SubmitButton;
