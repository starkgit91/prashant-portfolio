// pages/contact.tsx

export default function Contact() {
  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-pink-100 to-orange-100 text-black">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <p className="mb-4 text-lg">You can reach out to me via the following platforms:</p>

      <ul className="space-y-3 text-lg">
        <li><strong>Email:</strong> prashant.mishra.ee20@nitandhra.ac.in</li>
        <li><strong>LinkedIn:</strong> <a className="text-blue-600 underline" href="https://linkedin.com/in/prashant-mishra-976708157" target="_blank">linkedin.com/in/prashant-mishra-976708157</a></li>
        <li><strong>GitHub:</strong> <a className="text-blue-600 underline" href="https://github.com/starkgit91" target="_blank">github.com/starkgit91</a></li>
        <li><strong>Codeforces:</strong> <a className="text-blue-600 underline" href="https://codeforces.com/profile/thetwoface" target="_blank">codeforces.com/profile/thetwoface</a></li>
      </ul>
    </main>
  );
}