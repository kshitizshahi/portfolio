export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-50 dark:from-background-dark dark:to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Kshitiz Bikram Shahi</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Software engineer specializing in building beautiful and functional
          full-stack web applications
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" className="btn btn-primary text-text-btn">
            Get in Touch
          </a>
          <a
            href="#projects"
            className="btn border border-primary text-primary hover:bg-primary/10"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
