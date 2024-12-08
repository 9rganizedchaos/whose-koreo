type QueryDomain = "dancer";

export const queryKey = (domain: QueryDomain) => {
  const keys = {
    all: [domain] as const,
    lists: () => [...keys.all, "list"] as const,
    list: (options: Record<string, unknown>) =>
      [...keys.lists(), { ...options }] as const,
    details: () => [...keys.all, "detail"] as const,
    detail: (id: number | string) => [...keys.details(), id] as const,
  };

  return keys;
};
