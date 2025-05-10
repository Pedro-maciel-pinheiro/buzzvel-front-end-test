import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold tracking-tighter uppercase">
          Buzzvel Front-end Test
        </h1>

        <SignIn />
      </div>
    </div>
  );
}
