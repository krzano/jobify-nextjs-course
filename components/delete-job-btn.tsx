import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { deleteJobAction } from "@/utils/actions";

type DeleteJobBtnProps = { id: string };

function DeleteJobBtn({ id }: DeleteJobBtnProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast({
          description: "There was an error",
        });
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });
      toast({ description: "Job removed" });
    },
  });
  return (
    <Button size="sm" onClick={() => mutate(id)}>
      {isPending ? "Deleting..." : "Delete"}
    </Button>
  );
}
export default DeleteJobBtn;
