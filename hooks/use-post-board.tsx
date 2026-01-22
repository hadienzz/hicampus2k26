import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/navigation";

export type PostVisionBoard = {
  name: string;
  photo: File | null;
  photo_preview: string;
  message: string;
};

const usePostBoard = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (payload: PostVisionBoard) => {
      const formData = new FormData();
      formData.append("name", payload.name);
      formData.append("message", payload.message);
      if (payload.photo) {
        formData.append("photo", payload.photo);
      }
      if (payload.photo_preview) {
        formData.append("photo_preview", payload.photo_preview);
      }

      const response = await axiosInstance.post(
        "/api/vision-board/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      return response.data;
    },
    onError: () => {
      // TODO: handle error state / toast
    },
    onSuccess: () => {
      router.push("/vision-board");
    },
  });

  const formik = useFormik<PostVisionBoard>({
    initialValues: {
      name: "",
      photo: null,
      photo_preview: "",
      message: "",
    },
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return { formik, isPending: mutation.isPending };
};

export default usePostBoard;
