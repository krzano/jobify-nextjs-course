type JobInfoProps = {
  icon: React.ReactNode;
  text: string;
};

function JobInfo({ icon, text }: JobInfoProps) {
  return (
    <div className="flex items-center gap-x-2">
      {icon}
      {text}
    </div>
  );
}
export default JobInfo;
