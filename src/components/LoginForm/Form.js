import { useState } from "react";
import { loginFields } from "../../mock/Fields";
import Input from "../Input";
import FormExtra from "../Common/FormExtra";
import FormAction from "../Common/FormAction";
import FormService from "../Common/FormService";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Form = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  //Handle Login API Integration here
  const authenticateUser = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };
  return (
    <>
      <form className="mt-8 space-y-6">
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
      <FormService text="Login" />
    </>
  );
};

export default Form;
