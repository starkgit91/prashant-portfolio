import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black">
      <nav className="w-full flex justify-center gap-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm shadow-md z-10 sticky top-0">
        <Link href="/">
          <Button variant="ghost" className="text-white hover:text-black">Home</Button>
        </Link>
        <Link href="/hackathons">
          <Button variant="ghost" className="text-white hover:text-black">Hackathons</Button>
        </Link>
        <Link href="/ml-projects">
          <Button variant="ghost" className="text-white hover:text-black">ML Projects</Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost" className="text-white hover:text-black">Contact</Button>
        </Link>
      </nav>

      <section className="flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in-up">Prashant Mishra</h1>
        <p className="text-xl text-white max-w-2xl animate-fade-in-up delay-200">
          Final year B.Tech student at NIT Andhra Pradesh, passionate about AI, Signal Processing, and Full Stack Development.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-6 animate-fade-in-up delay-300">
          <a href="https://linkedin.com/in/prashant-mishra-976708157" target="_blank">
            <Button variant="outline" className="hover:bg-white hover:text-black">LinkedIn</Button>
          </a>
          <a href="https://github.com/starkgit91" target="_blank">
            <Button variant="outline" className="hover:bg-white hover:text-black">GitHub</Button>
          </a>
          <a href="https://drive.google.com/file/d/1IBBDi0EcNXQ4xiTMYaw3Rx1tNBXe6ZVm/view" target="_blank">
            <Button variant="outline" className="hover:bg-white hover:text-black">Resume</Button>
          </a>
          <a href="https://codeforces.com/profile/thetwoface" target="_blank">
            <Button variant="outline" className="hover:bg-white hover:text-black">Codeforces</Button>
          </a>
        </div>
      </section>


        <section className="mt-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto animate-fade-in-up delay-500">
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-black">Research Internships</h2>
              <p className="mt-2 text-gray-700 text-justify">
                I have worked as a Research Intern at IIT Kanpur under the mentorship of Prof. Abhilash Patel. My primary projects revolved around the modeling and simulation of Genetic Circuits using neural networks, which included implementing first and second-order system behaviors with neural approximations. These systems were modeled in detail through mathematical equations and trained using neural networks that captured system dynamics in real time.
                <br /><br />
                Additionally, I implemented cost functions for stability and response accuracy, and fine-tuned architectures to improve convergence. Our research explored learning-based control systems and their applications in synthetic biology. Challenges included handling complex non-linear systems and achieving precise time-response behavior. The work contributed to understanding how machine learning can accelerate biological circuit designs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-black">Major Projects</h2>
              <p className="mt-2 text-gray-700 text-justify">
                ● Automatic Speech Recognition system using RNNs: Built a deep learning model using LSTM networks to transcribe spoken commands into text. Integrated preprocessing techniques and achieved high word accuracy.
                <br />
                ● SHL Assessment Recommender: Developed an intelligent recommendation system using Gemini LLMs, sample vector embeddings, and a fast backend to suggest assessment modules. Designed with modular architecture and deployed on Vercel.
                <br />
                ● ODIR 5K – Retinal Disease Classification: Leveraged self-supervised learning techniques on ResNet variants to improve prediction performance for imbalanced multilabel ophthalmology datasets.
                <br />
                ● Car Repair Shop Web App: Created a full-stack system using Node.js, Express, and MongoDB to manage employee, service, and appointment records with authentication and analytics features.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-black">Skills</h2>
              <p className="mt-2 text-gray-700">
                C++, Python, JavaScript, TypeScript, Node.js, Express, MongoDB, TailwindCSS, React, Next.js, Machine Learning, Deep Learning, Self-Supervised Learning, Git, Docker.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-black">Achievements</h2>
              <p className="mt-2 text-gray-700">
                8.3 CGPA at NIT Andhra Pradesh, NPTEL Topper, Interned at IIT Kanpur, Built 4+ major ML/Fullstack projects, Active Competitive Programmer on Codeforces (handle: thetwoface), Won multiple coding and research contests.
              </p>
            </CardContent>
          </Card>
        </section>
        <div className="mt-10 flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold mb-2">Explore More</h2>
        <div className="flex gap-4">
          <Link href="/hackathons">
            <Button>Hackathon Participations</Button>
          </Link>
          <Link href="/ml-projects">
            <Button>Machine Learning Projects</Button>
          </Link>
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
        </div>
      
    </main>
  );
}
