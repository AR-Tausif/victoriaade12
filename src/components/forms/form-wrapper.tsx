import { Form } from "antd";
import { FunctionComponent, ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
type TProps = {
  onSubmit: FunctionConstructor;
  children: ReactNode;
  defaultValues: any;
  resolver: any;
};
export const FormWrapper = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TProps) => {
  const formConfig = {
    defaultValues,
  };

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  // set default value-------------------------
  const methods = useForm(formConfig);

  // useEffect(() => {
  //   if (defaultValues) {
  //     // Set default values after form is mounted
  //     methods.reset(defaultValues);
  //   }
  // }, [defaultValues, methods]);

  const handleSubmit = (data) => {
    onSubmit(data);
    // methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(handleSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};
