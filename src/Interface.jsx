
export const sections = ["intro", "titanium", "camera", "action-button"];
import { useEffect, useState } from "react";

export const Interface = ({ section, onSectionChange }) => {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInit(true);
    }, 2000);
  }, []);

  return (
    <main className="interface">
      <div className="flex justify-between text-white">
        <button
          className="hover:opacity-50 transition-opacity duration-200 cursor-pointer pointer-events-auto"
          onClick={() =>
            onSectionChange(section === 0 ? sections.length - 1 : section - 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="relative h-full">
          {sections.map((sectionItem, idx) => (
            <section
              key={sectionItem}
              className={`absolute inset-4 flex flex-col justify-${
                idx === 0 ? "center" : "end"
              } text-center transition-opacity duration-1000 ${
                sections[section] === sectionItem && isInit ? "" : "opacity-0"
              }`}
            >
              <h1 className="text-2xl font-medium text-stone-100">
                {sectionItem === "intro"
                  ? "iPhone 15 Pro Max"
                  : sectionItem === "titanium"
                  ? "New titanium body"
                  : sectionItem === "camera"
                  ? "Professional camera"
                  : "Action button"}
              </h1>
              <p
                className={`text-${
                  sectionItem === "intro"
                    ? "4xl md:text-6xl font-extrabold"
                    : "white"
                }`}
              >
                {sectionItem === "intro"
                  ? "Titanium"
                  : sectionItem === "titanium"
                  ? "Titanium armor for your iPhone. More durable than any smartphone glass."
                  : sectionItem === "camera"
                  ? "Capture your best life moments with its 48MP main camera."
                  : "The all-new Action button is a fast track to your favorite feature. Once you set the one you want, just press and hold to launch the action."}
              </p>
            </section>
          ))}
        </div>
        <button
          className="hover:opacity-50 transition-opacity duration-200 cursor-pointer pointer-events-auto"
          onClick={() =>
            onSectionChange(section === sections.length - 1 ? 0 : section + 1)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center gap-2">
        {sections.map((sectionItem, idx) => (
          <div
            key={sectionItem}
            className={`rounded-full border border-stone-100 w-3 h-3 flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition-opacity duration-200 pointer-events-auto ${
              section === idx ? "bg-stone-100" : ""
            }`}
            onClick={() => onSectionChange(idx)}
          ></div>
        ))}
      </div>
    </main>
  );
};
