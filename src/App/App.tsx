import React from 'react';
import { Header } from '../components/header';
import { IntroMyself } from '../components/introduceMyself';
import { AboutMe } from '../components/aboutMe';
import { SectionProject } from '../components/sectionProjects';
import { Footer } from '../components/footer';
function App() {

  return (
    <div className="flex justify-center items-center flex-col">
      <Header />
      <main className="flex justify-center items-center flex-col">
        <IntroMyself />
        <AboutMe />
        <SectionProject />
      </main>
      <Footer />
    </div>
  );
}

export default App;
