import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero, About, Services, Projects, Approach } from "@/components/site/Sections";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIT — Building Technology for a World That Never Stands Still" },
      { name: "description", content: "VIT provides software development, web development, IT consulting, cloud solutions and IT support for growing businesses." },
      { property: "og:title", content: "VIT — Building Technology for a World That Never Stands Still" },
      { property: "og:description", content: "Software, web, cloud and IT services from VIT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Services /><Projects /><Approach /><Contact />
      </main>
      <Footer />
    </>
  );
}
