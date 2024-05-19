import { JobType } from "@/utils/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import JobInfo from "./job-info";
import { Briefcase, CalendarDays, MapPin, RadioTower } from "lucide-react";
import { Badge } from "./ui/badge";
import DeleteJobBtn from "./delete-job-btn";

function JobCard({
  job: { company, createdAt, id, location, mode, position, status },
}: {
  job: JobType;
}) {
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{position}</CardTitle>
        <CardDescription>{company}</CardDescription>
      </CardHeader>
      <CardContent className="mt-4 grid grid-cols-2 gap-4">
        <JobInfo icon={<Briefcase />} text={mode} />
        <JobInfo icon={<MapPin />} text={location} />
        <JobInfo icon={<CalendarDays />} text={date} />
        <Badge className="w-32 justify-center">
          <JobInfo icon={<RadioTower className="h-4 w-4" />} text={status} />
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size="sm">
          <Link href={`/jobs/${id}`}>Edit</Link>
        </Button>
        <DeleteJobBtn id={id} />
      </CardFooter>
    </Card>
  );
}
export default JobCard;
