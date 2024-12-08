"use client";

import { useDancerListQuery } from "@/models/dancers/query";
import styles from "./index.module.scss";
import { DancerCard } from "../DancerCard";

export function DancerList() {
  const { data: dancerList, isLoading: isDancerListLoading } =
    useDancerListQuery();

  if (isDancerListLoading || !dancerList) {
    return null;
  }

  return (
    <div className={styles["card-list"]}>
      {dancerList.map(({ name }) => (
        <DancerCard
          key={name.ko}
          name={`${name.ko} ${name.en}`}
          tags={["샤이니", "에스파", "소녀시대", "보아", "슈퍼주니어"]}
          imgSrc="https://image.diowith.me/public/artist/0a7a9662-5cad-417d-a65b-e0e1463d2547.webp"
        />
      ))}
    </div>
  );
}
