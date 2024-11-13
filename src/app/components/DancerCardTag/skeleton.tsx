import Skeleton from "@/components/Skeleton";
import styles from "./index.module.scss";

export function DancerCardTagSkeleton() {
  return (
    <div className={styles["tag-skeleton"]}>
      <Skeleton />
    </div>
  );
}
