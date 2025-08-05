import { ipAddressValueAtom } from "@/atoms";
import { useSetAtom } from "jotai";
import { useRef, type FormEvent } from "react";
import iconArrow from "@assets/icon-arrow.svg";

type IpSearchBarProps = {
  refetch: () => void;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function IpSearchBar({ refetch, setEnabled }: IpSearchBarProps) {
  const setIpAddressValue = useSetAtom(ipAddressValueAtom);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current) {
      setIpAddressValue(inputRef.current.value);

      setEnabled(true);
      refetch();
    }
  };

  return (
    <form
      className="mx-auto flex max-w-2xl items-center overflow-hidden rounded-lg bg-white"
      onSubmit={handleSearch}
    >
      <div className="basis-full px-6 py-4">
        <span className="sr-only"> Search for IP Address </span>
        <input
          className="w-full outline-none"
          type="search"
          placeholder="Search for any IP address or domain"
          ref={inputRef}
        />
      </div>
      <button
        className="cursor-pointer bg-black p-6 hover:bg-black/80 focus:bg-black/80"
        type="submit"
      >
        <span className="sr-only">Search</span>
        <img src={iconArrow} alt="" />
      </button>
    </form>
  );
}
