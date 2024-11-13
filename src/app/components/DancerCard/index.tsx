import Card from "antd/es/card/Card";
import styles from "./index.module.scss";
import Image from "next/image";
import Meta from "antd/es/card/Meta";
import { DancerCardDescription } from "../DancerCardDescription";

interface Props {
  name: string;
  imgSrc: string;
  tags: string[];
}

export function DancerCard({ name, imgSrc, tags }: Props) {
  return (
    <Card
      className={styles["dancer-card"]}
      hoverable
      cover={
        <Image
          className={styles["dancer-img"]}
          src={imgSrc}
          alt={`image of the dancer ${name}`}
          width="200"
          height="200"
        />
      }
    >
      <Meta title={name} description={<DancerCardDescription tags={tags} />} />
    </Card>
  );
}
