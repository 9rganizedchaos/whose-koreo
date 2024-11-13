import { getDancers } from "@/utils/firebase";
import styles from "./page.module.scss";
import { DancerCard } from "./components/DancerCard";
import Input from "antd/es/input/Input";
import { SearchOutlined } from "@ant-design/icons";
import { CreateDancerButton } from "./components/CreateDancerButton";

export default async function Home() {
  const dancerList = await getDancers();

  return (
    <div className={styles["main-page"]}>
      <div className={styles["page-contents"]}>
        <div className={styles["list-toolbar"]}>
          <Input
            className={styles["search-box"]}
            placeholder="댄서 이름을 입력해보세요"
            suffix={<SearchOutlined />}
          />
          <CreateDancerButton />
        </div>
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
      </div>
    </div>
  );
}
