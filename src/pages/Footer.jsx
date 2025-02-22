import React from "react";

function Footer() {
  return (
    <footer className="bg-netflixGray text-gray-400 py-2 text-center">
      <p>Questions? Contact us.</p>
      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms of Use</a>
      </div>
    </footer>
  );
}

export default Footer;
