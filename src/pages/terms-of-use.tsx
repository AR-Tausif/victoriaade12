import JoditEditor from "jodit-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PrimaryButton } from "../components";
import {
  useCreateTermsMutation,
  useGetTermsQuery,
} from "../redux/api/pat.api";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const TermsOfUse = () => {
  const { data, isLoading: getTermsLoading } = useGetTermsQuery();
  const [createTerms, { isLoading }] = useCreateTermsMutation();

  const [content, setContent] = useState(data?.data?.body || "");

  const config = useMemo(
    () => ({
      readonly: false,
      uploader: { insertImageAsBase64URI: true },
      height: "76vh",
    }),
    []
  );

  const onBlur = useCallback(
    (newContent: string) => {
      setContent(newContent);
    },
    [setContent]
  );

  useEffect(() => {
    if (data?.data?.body) {
      setContent(data?.data?.body);
    }
  }, [data]);
  if (getTermsLoading) return <Loader2 className="h-12 w-12 animate-spin" />;

  const handleSubmit = async () => {
    try {
      const response = await createTerms({ body: content }).unwrap();
      console.log("response = ", response);
      toast.success(
        response.message ? response.message : "Terms created successfully"
      );
    } catch (error: any) {
      toast.error(
        error.data.message
          ? error.data.message
          : "Something went wrong to create terms"
      );
    }
  };

  console.log("data = ", data);

  return (
    <div>
      <h3>Terms Of Use</h3>
      <div
        style={{
          background: "#fdfdfd",
          padding: 8,
          borderRadius: 8,
          marginTop: 20,
        }}
      >
        <div>
          <JoditEditor
            value={content}
            config={config}
            tabIndex={1}
            onBlur={onBlur}
          />
        </div>
        {isLoading ? (
          <PrimaryButton styles={{ width: "100%" }} disabled>
            Saving... <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          </PrimaryButton>
        ) : (
          <PrimaryButton styles={{ width: "100%" }} onClick={handleSubmit}>
            Save Changes
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};
