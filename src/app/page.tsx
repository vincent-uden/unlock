import sql from "~/db.js";

export default function HomePage() {
  async function postUnlock() {
    "use server"

    console.log("Server action");
    console.log(await sql`INSERT INTO door_unlocks (executed) VALUES (false);`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <form action={postUnlock}>
        <button className="bg-sky-400 py-2 px-4 rounded-lg hover:bg-sky-500 cursor-pointer" type="submit">UNLOCK</button>
        </form>
      </div>
    </main>
  );
}
