import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold">Shaian.ir</span>
            </Link>
          </div>
          <Link href="/" className="ml-auto flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <Button variant="outline" className="ml-4" asChild>
            <Link href="#" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Link>
          </Button>
        </div>
      </header>

      <main className="container py-12 px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Shaian Kiany</h1>
            <p className="text-xl text-muted-foreground">Full Stack Developer</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="mailto:shaian.kiany1@gmail.com"><p className="text-sm text-muted-foreground">shaian.kiany1@gmail.com</p></a>
              <p className="text-sm text-muted-foreground">iran (esfahan - tehran)</p>
              <a href="tel:+989369064744"><p className="text-sm text-muted-foreground">+98 936 906 4744</p></a>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            <div className="space-y-8">
              <ExperienceItem
                title="Senior Full Stack Developer"
                company="nafun tech."
                period="2018 - Present"
                location="San Francisco, CA"
                responsibilities={[
                  "Led a team of 5 developers in building a scalable e-commerce platform using Next.js and Node.js",
                  "Implemented CI/CD pipelines that reduced deployment time by 40%",
                  "Architected and developed RESTful APIs serving over 1M requests daily",
                  "Optimized database queries resulting in a 30% improvement in application performance",
                ]}
              />

              <ExperienceItem
                title="Full Stack Developer"
                company="Digital Solutions LLC"
                period="2018 - 2021"
                location="Seattle, WA"
                responsibilities={[
                  "Developed and maintained multiple client-facing web applications using React and Express",
                  "Collaborated with UX designers to implement responsive designs and improve user experience",
                  "Integrated third-party APIs and services including payment gateways and authentication systems",
                  "Participated in code reviews and mentored junior developers",
                ]}
              />

              <ExperienceItem
                title="Frontend Developer"
                company="WebCraft Studios"
                period="2016 - 2018"
                location="Portland, OR"
                responsibilities={[
                  "Built interactive user interfaces using React and Redux",
                  "Implemented responsive designs ensuring cross-browser compatibility",
                  "Worked with backend developers to integrate frontend with RESTful APIs",
                  "Participated in agile development processes including daily standups and sprint planning",
                ]}
              />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              <EducationItem
                degree="Master of Science in Computer Science"
                institution="Stanford University"
                period="2014 - 2016"
                description="Specialized in Software Engineering and Artificial Intelligence. Thesis on 'Optimizing React Applications for Performance'."
              />

              <EducationItem
                degree="Bachelor of Science in Computer Engineering"
                institution="University of California, Berkeley"
                period="2010 - 2014"
                description="Graduated with honors. Relevant coursework included Data Structures, Algorithms, Database Systems, and Web Development."
              />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Certifications & Courses</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <CertificationItem title="AWS Certified Solutions Architect" issuer="Amazon Web Services" date="2022" />
              <CertificationItem title="Professional Scrum Master I (PSM I)" issuer="Scrum.org" date="2021" />
              <CertificationItem title="Advanced React and Redux" issuer="Udemy" date="2020" />
              <CertificationItem title="MongoDB University Certification" issuer="MongoDB Inc." date="2019" />
              <CertificationItem title="Google Cloud Professional Developer" issuer="Google Cloud" date="2020" />
              <CertificationItem title="TypeScript Advanced Concepts" issuer="Frontend Masters" date="2021" />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Skills & Qualifications</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <SkillCategory
                category="Programming Languages"
                skills={["JavaScript/TypeScript", "Python", "Java", "SQL", "HTML/CSS"]}
              />
              <SkillCategory
                category="Frontend"
                skills={["React", "Next.js", "Redux", "TailwindCSS", "Material UI", "Responsive Design"]}
              />
              <SkillCategory
                category="Backend"
                skills={["Node.js", "Express", "Django", "RESTful APIs", "GraphQL", "Microservices"]}
              />
              <SkillCategory category="Databases" skills={["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"]} />
              <SkillCategory
                category="DevOps & Tools"
                skills={["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Jest", "GitHub Actions"]}
              />
              <SkillCategory
                category="Soft Skills"
                skills={["Team Leadership", "Project Management", "Agile/Scrum", "Technical Writing", "Mentoring"]}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Languages</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <LanguageItem language="English" proficiency="Native" />
              <LanguageItem language="Spanish" proficiency="Professional Working" />
              <LanguageItem language="French" proficiency="Elementary" />
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 John.dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

function ExperienceItem({ title, company, period, location, responsibilities }: ExperienceItemProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-lg">{company}</p>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <p className="text-muted-foreground">{period}</p>
          <p className="text-muted-foreground">{location}</p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  )
}

interface EducationItemProps {
  degree: string
  institution: string
  period: string
  description: string
}

function EducationItem({ degree, institution, period, description }: EducationItemProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold">{degree}</h3>
          <p className="text-lg">{institution}</p>
        </div>
        <p className="text-muted-foreground mt-2 md:mt-0">{period}</p>
      </div>
      <p>{description}</p>
    </Card>
  )
}

interface CertificationItemProps {
  title: string
  issuer: string
  date: string
}

function CertificationItem({ title, issuer, date }: CertificationItemProps) {
  return (
    <Card className="p-4">
      <h3 className="font-semibold">{title}</h3>
      <div className="flex justify-between items-center mt-1">
        <p className="text-sm text-muted-foreground">{issuer}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </Card>
  )
}

interface SkillCategoryProps {
  category: string
  skills: string[]
}

function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-3">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  )
}

interface LanguageItemProps {
  language: string
  proficiency: string
}

function LanguageItem({ language, proficiency }: LanguageItemProps) {
  return (
    <Card className="p-4">
      <h3 className="font-semibold">{language}</h3>
      <p className="text-sm text-muted-foreground">{proficiency}</p>
    </Card>
  )
}
