import { ManifestoScroll } from "@/components/manifesto-scroll";

const DISCORD_URL = "https://discord.gg/Cw9x7NdRBk";
const GITHUB_URL = "https://github.com/ryansldev/kiwi";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col bg-background">
      <ManifestoScroll discordUrl={DISCORD_URL} githubUrl={GITHUB_URL} />
    </main>
  );
}
