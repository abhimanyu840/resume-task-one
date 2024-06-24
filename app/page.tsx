import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="gap-2 flex justify-center items-center mt-20">
      <Link href={'/money'} className="font-2xl font-semibold">Task 1</Link>
      <Link href={'/color'} className="font-2xl font-semibold">Task 2</Link>
    </div>
    </>
  );
}
