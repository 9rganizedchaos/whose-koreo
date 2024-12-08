"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { Tag } from "antd";
import { DancerCardTagSkeleton } from "../DancerCardTag/skeleton";

interface Props {
  tags: string[];
}

export function DancerCardDescription({ tags }: Props) {
  const [visibleTags, setVisibleTags] = useState<string[]>([]);
  const [hiddenCount, setHiddenCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (containerRef.current && tagRefs.current.length > 0) {
      const containerWidth = containerRef.current.clientWidth;
      let totalWidth = 20;
      let visibleCount = 0;

      tagRefs.current.forEach((tag, index) => {
        if (tag) {
          const tagWidth = tag.getBoundingClientRect().width;

          if (totalWidth + tagWidth <= containerWidth) {
            totalWidth += tagWidth;
            visibleCount = index + 1;
          }
        }
      });

      setVisibleTags(tags.slice(0, visibleCount));
      setHiddenCount(tags.length - visibleCount);
    }
  }, [tags]);

  return (
    <div className={styles["description"]} ref={containerRef}>
      {visibleTags.length === 0 ? (
        <div className={styles["tags-wrapper"]}>
          <DancerCardTagSkeleton />
          <DancerCardTagSkeleton />
          <DancerCardTagSkeleton />
        </div>
      ) : (
        <div className={styles["tags-wrapper"]}>
          {visibleTags.map((tag) => {
            return (
              <span key={tag}>
                <Tag>{tag}</Tag>
              </span>
            );
          })}
          {hiddenCount > 0 && <p>+{hiddenCount}</p>}
        </div>
      )}

      <div className={styles["invisible"]}>
        {tags.length > 0 &&
          tags.map((tag, index) => (
            <span
              key={tag}
              ref={(el) => (tagRefs.current[index] = el)}
              style={{
                opacity: 1,
              }}
            >
              <Tag>{tag}</Tag>
            </span>
          ))}
      </div>
    </div>
  );
}
