import { Button, Form, ModalProps } from "antd";
import Modal from "antd/es/modal/Modal";
import styles from "./index.module.scss";
import { FormInstance } from "antd/lib";
// import Upload from "antd/es/upload/Upload";
// import UploadButton from "../UploadButton";
import Input from "antd/es/input/Input";
import { CreateDancerRequest } from "@/models/dancers/type";

interface Props extends ModalProps {
  form: FormInstance;
  onFinish: (values: CreateDancerRequest) => void;
}

export function CreateDancerModal({ open, form, onCancel, onFinish }: Props) {
  return (
    <Modal
      open={open}
      title="새로운 댄서 등록하기"
      onCancel={onCancel}
      footer={null}
    >
      <Form<CreateDancerRequest>
        form={form}
        onFinish={onFinish}
        className={styles["form"]}
        layout="vertical"
      >
        <div className={styles["contents"]}>
          {/* <Form.Item
            colon={false}
            name="logo"
            // rules={logoImageRules}
            className={styles["logo-upload-wrapper"]}
            // getValueFromEvent={getFileList}
            tooltip={
              <div>
                <p>* 2MB 이하의 파일을 업로드해주세요.</p>
                <p>* png, jpg, jpeg, webp 형식의 파일을 업로드해주세요.</p>
              </div>
            }
          >
            <Upload
              className={styles["logo-upload"]}
              maxCount={1}
              listType="picture-card"
              //   onPreview={handlePreview}
              //   onRemove={handleRemove}
              //   fileList={watchedLogoImage}
              //   beforeUpload={checkLogoBeforeUpload}
              action={`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/images?type=studio-logo`}
              //   customRequest={customRequestForUpload}
            >
              {UploadButton}
            </Upload>
          </Form.Item> */}

          <div className={styles["input-wrapper"]}>
            <Form.Item label="댄서 이름(한글)" name={["name", "ko"]}>
              <Input />
            </Form.Item>
            <Form.Item label="댄서 이름(영문)" name={["name", "en"]}>
              <Input />
            </Form.Item>
            <Form.Item label="인스타그램 ID" name={["instagramId"]}>
              <Input />
            </Form.Item>
          </div>

          {/* <Form.Item<MessageSendFormType>
            required
            name="templateCode"
            label="메시지 템플릿"
            rules={templateCodeRules}
          >
            <Select
              placeholder="템플릿을 선택하세요."
              className={styles["template-select"]}
              options={[
                {
                  label: "스케쥴 취소 안내 (SCHEDULECANCEL)",
                  value: "SCHEDULECANCEL",
                },
              ]}
            />
          </Form.Item> */}
        </div>

        <div className={styles["button-box"]}>
          <Button htmlType="button" onClick={onCancel}>
            취소
          </Button>
          <Button type="primary" htmlType="submit">
            등록
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
