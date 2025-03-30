import JoditEditor from "jodit-react";
import { useCallback, useMemo, useState } from "react";
import { PrimaryButton } from "../components";
import { useCreatePrivacyMutation } from "../redux/api/pat.api";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const Setting = () => {
  const [content, setContent] = useState("");
  // const appendLog = useCallback(
  //   (message) => {
  // console.log("logs = ", logs);
  //     const newLogs = [...logs, message];
  //     setLogs(newLogs);
  //   },
  //   [logs, setLogs]
  // );

  const [createPrivacy, { isLoading }] = useCreatePrivacyMutation();

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
      const response = await createPrivacy({body : content}).unwrap();
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
            // onChange={onChange}
          />
          {/* <h3>Logs</h3>
          <div>
            {logs.map((log, index) => (
              <p key={index}>{log}</p>
            ))}
          </div> */}
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
