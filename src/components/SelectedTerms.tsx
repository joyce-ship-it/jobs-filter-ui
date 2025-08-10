import { IoMdClose } from "react-icons/io";
type SelectedTermsProps = {
  selectedKeywords: string[];
  removeKeyword: (word: string) => void;
};
export default function SelectedTerms({
  selectedKeywords,
  removeKeyword,
}: SelectedTermsProps) {
  return (
    <div className="mx-auto mb-4 flex flex-wrap gap-2 px-4 py-4 lg:max-w-[1200px] lg:px-1">
      {selectedKeywords.map((word) => {
        return (
          <button key={word} className="flex items-center">
            <IoMdClose
              size={40}
              className="cursor-pointer rounded-l-sm bg-black text-red-600 hover:text-red-400"
              onClick={() => removeKeyword(word)}
            />
            <span className="rounded-r-sm bg-[#00a6f4] px-2 py-2 font-medium text-black uppercase">
              {word}
            </span>
          </button>
        );
      })}
    </div>
  );
}
