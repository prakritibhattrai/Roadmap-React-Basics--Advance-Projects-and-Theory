const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-t from-sky-100 to-slate-100
     dark:from-slate-900 dark:to-slate-800 text-white py-4"
    >
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-sky-500">Prakriti</span> All
          rights reserved. Just like that bug that keeps coming back.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
