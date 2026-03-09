import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType: string;
  propertyAddress: string;
  preferredDate: string;
}

export function useSubmitForm() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: FormData) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitForm(
        data.name,
        data.email,
        data.phone,
        data.message,
        data.serviceType,
        data.propertyAddress,
        data.preferredDate,
      );
    },
  });
}
