import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getProjects, getCategories, getProfile } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();
  const categories = getCategories();
  const profile = getProfile();

  return (
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <ProjectGrid projects={projects} categories={categories} />
      <Contact profile={profile} />
      <Footer />
    </div>
  );
}
