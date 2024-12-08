import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKey } from "../query-keys";
import { addDancer, getDancers } from "./api";
import { CreateDancerRequest } from "./type";

export const useDancerListQuery = () => {
  return useQuery({
    queryKey: queryKey("dancer").lists(),
    queryFn: () =>
      getDancers().then((res) => {
        console.log(res);
        return res;
      }),
  });
};

export const useCreateDancerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: CreateDancerRequest) => {
      return addDancer(request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKey("dancer").lists(),
      });
    },
  });
};
