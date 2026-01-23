import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface VisionBoardItem {
  id: string;
  name: string;
  photo_url: string;
  message: string;
}

interface VisionBoardApiResponse {
  status: "success" | "error";
  message: string;
  data?: VisionBoardItem[];
}

const fetchBoard = async (): Promise<VisionBoardItem[]> => {
  const response =
    await axiosInstance.get<VisionBoardApiResponse>("api/vision-board/get");

  return response.data.data ?? [];
};

const useGetBoard = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["vision-board"],
    queryFn: fetchBoard,
  });

  return {
    boards: data ?? [],
    isLoading,
    isError,
  };
};

export default useGetBoard;
