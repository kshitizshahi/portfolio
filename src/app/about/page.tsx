import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="relative aspect-square w-full md:w-7/8  max-w-sm mx-auto md:mx-0  overflow-hidden rounded-full shadow-md">
            <Image
              src="/photo.jpg"
              alt="Profile"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 30vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Skills</h2>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Programming Languages</p>
                <p className="text-gray-600 dark:text-gray-400">
                  JavaScript, TypeScript, Python, Java, SQL
                </p>
              </div>
              <div>
                <p className="font-medium">Frameworks/Libraries</p>
                <p className="text-gray-600 dark:text-gray-400">
                  React.js, Next.js, Express.js, Django, Redux Toolkit, Java
                  Swing, Pandas, NumPy, Scikit-learn, Matplotlib
                </p>
              </div>
              <div>
                <p className="font-medium">Databases & Tools</p>
                <p className="text-gray-600 dark:text-gray-400">
                  PostgreSQL, MongoDB, MySQL, Redis, Prisma, Git, Jest, Postman,
                  Figma, Vercel, AWS
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/Kshitiz-Bikram-Shahi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-primary text-primary hover:bg-primary/10"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            {"Hello, I'm Kshitiz Bikram Shahi"}
          </h2>
          <p className="mb-4 text-justify">
            {`I'm a passionate full-stack software engineer with over two years of experience building modern, scalable web applications. I specialize in React and Next.js, and focus on creating responsive, user-friendly interfaces supported by strong and reliable backend systems.`}
          </p>
          <p className="mb-4 text-justify">
            I have a solid academic background with a Bachelor's degree in
            Computer Science and am currently pursuing my Master's in the same
            field. I stay committed to continuous learning through real-world
            projects, certifications, and online courses that help me stay up to
            date with evolving technologies and best practices.
          </p>
          <p className="mb-6 text-justify">
            I'm committed to writing clean, efficient, and maintainable code,
            and I enjoy tackling problems and learning through debugging and
            iteration. I'm proficient in both SQL and NoSQL databases, and I
            work confidently across the stack using technologies like Java,
            JavaScript, and Python. Driven by curiosity and a deep passion for
            technology, I strive to create meaningful digital experiences and
            bring ideas to life through thoughtful, well-crafted code.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Planned Career Break</h3>
              <p className="text-primary">Feb 2022 – Aug 2024</p>
              <ul className="mt-2 list-disc pl-5">
                <li>
                  Conducted extensive research and documentation for a master's
                  program, exploring universities and courses aligned with
                  long-term career goals.
                </li>
                <li>
                  Self-studied React.js fundamentals via online platforms
                  including YouTube and technical blogs.
                </li>
                <li>
                  Built and deployed a blog site using Next.js to strengthen
                  front-end development skills.
                </li>
                <li>
                  Continuously explored trends in React and Next.js, with a
                  growing interest in DevOps and plans to gain hands-on
                  experience with cloud platforms such as AWS, Azure, and Google
                  Cloud.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Dakshya Nepal | Full Stack MERN Intern
              </h3>
              <p className="text-primary">
                Nov 2021 – Jan 2022 | Kathmandu, Nepal
              </p>
              <ul className="mt-2 list-disc pl-5">
                <li>
                  Contributed to a full-stack e-commerce platform for a beauty
                  brand, working across frontend and backend systems.
                </li>
                <li>
                  Wrote and tested API endpoints using Jest, ensuring reliable
                  functionality through rigorous testing.
                </li>
                <li>
                  Assisted in debugging and code refactoring to improve
                  performance and maintainability.
                </li>
                <li>
                  Collaborated with board members and stakeholders, providing
                  demos of new features and fixes.
                </li>
                <li>
                  Maintained development documentation to support future
                  iterations.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              Master's in Computer Science | Wright State University
            </h3>
            <p className="text-primary">
              2024 – Present | Dayton, United States
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor of Science with Honors (BSc Hons) in Computing |
              Islington College
            </h3>
            <p className="text-primary">2019 – 2022 | Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
