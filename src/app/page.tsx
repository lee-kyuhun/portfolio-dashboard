import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import { getProjects, getCategories, getProfile } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();
  const categories = getCategories();
  const profile = getProfile();

  return (
    <div className="mx-auto max-w-5xl px-4">
      <Header />
      <ProfileSection profile={profile} />
      <ProjectGrid projects={projects} categories={categories} />
      <Footer />
    </div>
  );
}
