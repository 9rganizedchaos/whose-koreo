"use client";

import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd/lib";
import { CreateDancerModal } from "../CreateDancerModal";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { CreateDancerRequest } from "@/models/dancers/type";
import { useCreateDancerMutation } from "@/models/dancers/query";

export function CreateDancerButton() {
  const [createDancerModalOpen, setCreateDancerModalOpen] = useState(false);
  const [createDancerForm] = useForm();

  const { mutate: createDancer } = useCreateDancerMutation();

  const clickCreateDancerButton = () => {
    setCreateDancerModalOpen(true);
  };

  const closeModal = () => {
    setCreateDancerModalOpen(false);
  };

  const submitCreateDancerForm = (values: CreateDancerRequest) => {
    createDancer(values);
    closeModal();
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
