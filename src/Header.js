export default function Header() {
  return (
    <div className="bg-gray-900 cursor-crosshair">
      <div className="flex items-center justify-center py-6 cursor-crosshair">
        <a
          href="https://jan.dalhuysen.co.za"
          className="font-mono font-family: consolas text-white px-6 cursor-crosshair"
        >
          Home
        </a>
        <a
          href="about.html"
          className="font-mono font-family: consolas text-blue-300 hover:text-white px-6 cursor-crosshair hover:scale-125"
        >
          About
        </a>
        <a
          href="explore.html"
          className="font-mono font-family: consolas text-blue-300 hover:text-white px-6 cursor-crosshair hover:scale-125"
        >
          Explore
        </a>
        <a
          href="blog.html"
          className="font-mono font-family: consolas text-blue-300 hover:text-white px-6 cursor-crosshair hover:scale-125"
        >
          Blog
        </a>
        <a
          href="contact.html"
          className="font-mono font-family: consolas text-blue-300 hover:text-white px-6 cursor-crosshair hover:scale-125"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
