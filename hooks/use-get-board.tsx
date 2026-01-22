import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface VisionBoardResponse {
  id: string;
  name: string;
  photo_url: string;
  text: string;
}

const fetchBoard = async (): Promise<VisionBoardResponse[]> => {
  const response =
    await axiosInstance.get<VisionBoardResponse[]>("/api/vision-board/");

  return response.data;
};

const useGetBoard = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["vision-board"],
    queryFn: fetchBoard,
  });

  return {
    boards: data,
    isLoading,
    isError,
  };
};

export default useGetBoard;
