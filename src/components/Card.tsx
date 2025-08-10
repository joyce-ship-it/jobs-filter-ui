export type jobTypes = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  handleFilter: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Card({
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  handleFilter,
}: jobTypes) {
  return (
    <div className="flex w-full max-w-[1200px] flex-col gap-6 rounded bg-[#052f4a] p-4 text-neutral-200 hover:border-l-10 hover:border-neutral-900 md:flex-row md:items-center md:justify-between">
      <div className="border-cyan border-b-1 py-4 md:border-0">
        <div className="relative flex items-center gap-4">
          <div className="">
            <img
              src={logo}
              alt="a logo of the company"
              className="absolute top-[-80%] h-[66px] w-[66px] rounded-[50%] md:relative"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 pt-2 text-[.6rem] text-neutral-300">
              <span className="text-[.8rem] font-medium">{company}</span>
              {isNew && (
                <span className="rounded-lg bg-[#007595] px-2 py-1 uppercase">
                  {"New"}
                </span>
              )}

              {featured && (
                <span className="rounded-lg bg-black px-2 py-1 uppercase">
                  {"Featured"}
                </span>
              )}
            </div>
            <div className="font-bold">{position}</div>
            <div className="flex gap-2 text-[0.8rem] text-neutral-400">
              <span>{postedAt}</span>
              <span>{contract}</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-[.8rem]">
        <button
          onClick={handleFilter}
          className="cursor-pointer rounded-sm bg-[#00a6f4] px-2 py-2 font-medium text-black uppercase"
        >
          {role}
        </button>
        <button
          onClick={handleFilter}
          className="cursor-pointer rounded-sm bg-[#00a6f4] px-2 py-2 font-medium text-black uppercase"
        >
          {level}
        </button>
        {languages.map((language) => {
          return (
            <button
              onClick={handleFilter}
              key={language}
              className="cursor-pointer rounded-sm bg-[#00a6f4] px-2 py-2 font-medium text-black uppercase"
            >
              {language}
            </button>
          );
        })}
        {tools.map((tool) => {
          return (
            <button
              key={tool}
              onClick={handleFilter}
              className="cursor-pointer rounded-sm bg-[#00a6f4] px-2 py-2 font-medium text-black uppercase"
            >
              {tool}
            </button>
          );
        })}
      </div>
    </div>
  );
}
