import Card from "./Card";
import type { jobTypes } from "./Card";
export type CardProps = {
  jobData: jobTypes[];
  handleFilter: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export default function CardList({ jobData, handleFilter }: CardProps) {
  console.log(jobData);
  return (
    <div className="flex flex-col items-center gap-12 p-4 md:gap-6">
      {jobData.map((data) => {
        return (
          <Card key={data.id} {...data} handleFilter={handleFilter}></Card>
        );
      })}
    </div>
  );
}
