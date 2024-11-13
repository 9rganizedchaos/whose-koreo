"use client";

import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd/lib";
import { CreateDancerModal } from "../CreateDancerModal";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { addDancer } from "@/utils/firebase";
import { CreateDancerFormType } from "../CreateDancerModal/form";

export function CreateDancerButton() {
  const [createDancerModalOpen, setCreateDancerModalOpen] = useState(false);
  const [createDancerForm] = useForm();

  const clickCreateDancerButton = () => {
    setCreateDancerModalOpen(true);
  };

  const closeModal = () => {
    setCreateDancerModalOpen(false);
  };

  const submitCreateDancerForm = (values: CreateDancerFormType) => {
    addDancer(values);
  };

  return (
    <div>
      <CreateDancerModal
        open={createDancerModalOpen}
        form={createDancerForm}
        onCancel={closeModal}
        onFinish={submitCreateDancerForm}
      />
      <Button icon={<PlusOutlined />} onClick={clickCreateDancerButton}>
        댄서 등록
      </Button>
    </div>
  );
}
