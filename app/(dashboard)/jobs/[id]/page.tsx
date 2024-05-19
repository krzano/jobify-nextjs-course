import EditJobForm from "@/components/edit-job-form";
import { getSingleJobAction } from "@/utils/actions";
import { HydrationBoundary, QueryClient } from "@tanstack/react-query";

async function SingleJobPage({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["job", params.id],
    queryFn: () => getSingleJobAction(params.id),
  });

  return (
    <HydrationBoundary>
      <EditJobForm jobId={params.id} />
    </HydrationBoundary>
  );
}
export default SingleJobPage;
