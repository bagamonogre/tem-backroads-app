import { pageLinks } from "../data";

const PageLinks = ({ parenClass, itemClass }) => {
  return (
    <ul className="nav-links" id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className="{itemClass}">
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
