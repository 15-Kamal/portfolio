import Navbar     from "@/components/Navbar";
import Home       from "@/components/Home";
import About      from "@/components/About";
import Skills     from "@/components/Skills";
import Projects   from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact    from "@/components/Contact";

export default function Page() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}