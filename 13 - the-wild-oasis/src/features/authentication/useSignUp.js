import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created ! Please verify the new account from the user´s email address."
      );
    },
  });

  return { signUp, isLoading };
}
