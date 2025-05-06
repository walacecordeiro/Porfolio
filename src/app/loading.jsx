import { SkeletonCard } from "@/components/_components/SkeletonCard";

export default function Loading() {
  return (
    <div className="flex w-fit justify-center place-self-center">
      <SkeletonCard />
    </div>
  );
}
