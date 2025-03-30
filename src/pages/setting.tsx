import JoditEditor from "jodit-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PrimaryButton } from "../components";
import {
  useCreatePrivacyMutation,
  useGetPrivacyQuery,
} from "../redux/api/pat.api";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const Setting = () => {
  const [createPrivacy, { isLoading }] = useCreatePrivacyMutation();
  const { data: privacyData, isLoading: getPrivacyLoading } =
    useGetPrivacyQuery();
  const [content, setContent] = useState(privacyData?.data?.body || "");

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

  const handleSubmit = async () => {
    try {
      const response = await createPrivacy({ body: content }).unwrap();
      console.log("response = ", response);
      toast.success(
        response.message ? response.message : "Privacy created successfully"
      );
    } catch (error: any) {
      toast.error(
        error.data.message
          ? error.data.message
          : "Something went wrong to create privacy"
      );
    }
  };
  useEffect(() => {
    if (privacyData?.data?.body) {
      setContent(privacyData?.data?.body);
    }
  }, [privacyData]);
  return (
    <div>
      <h3>Privacy Policy</h3>
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
