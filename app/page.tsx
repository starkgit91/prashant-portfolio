import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center py-10">
          <h1 className="text-5xl font-extrabold text-black mb-4">Prashant Mishra</h1>
          <p className="text-xl text-gray-800">
            Final year B.Tech student at NIT Andhra Pradesh. Passionate about Artificial Intelligence, Signal Processing, Competitive Programming, and Full Stack Development.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="https://linkedin.com/in/prashant-mishra-976708157" target="_blank">
              <Button className="bg-blue-800 hover:bg-blue-700 text-white">LinkedIn</Button>
            </Link>
            <Link href="https://github.com/starkgit91" target="_blank">
              <Button className="bg-gray-800 hover:bg-black text-white">GitHub</Button>
            </Link>
            <Link href="https://drive.google.com/file/d/1IBBDi0EcNXQ4xiTMYaw3Rx1tNBXe6ZVm/view" target="_blank">
              <Button className="bg-blue-800 hover:bg-green-700 text-white">Resume</Button>
            </Link>
            <Link href="https://codeforces.com/profile/thetwoface" target="_blank">
              <Button className="bg-blue-800 hover:bg-purple-700 text-white">Codeforces</Button>
            </Link>
            <Link href="https://leetcode.com/u/imnoobcoder/" target="_blank">
              <Button className="bg-blue-800 hover:bg-purple-700 text-white">Leetcode</Button>
            </Link>
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
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
      </div>
      <div className="mt-10 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold text-black">Explore More</h2>
            <ul className="list-disc list-inside text-black">
              <li><Link href="/hackathons" className="text-blue-600 underline">Hackathon Participations</Link></li>
              <li><Link href="/ml-projects" className="text-blue-600 underline">Machine Learning Projects</Link></li>
              <li><Link href="/contact" className="text-blue-600 underline">Contact</Link></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
