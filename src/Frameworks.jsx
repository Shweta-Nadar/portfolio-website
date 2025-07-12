import { OrbitingCircles } from "./Orbitingcircles";

export function Frameworks() {
  const skills = [
    "html5",
    "c",
    "pyhton",
    "css3",
    "sss",
    // "image",
    "cplusplus",
    "csharp",
    "javascript",
    "react",
    "tailwindcss",
    "vitejs",
    "threejs"
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`${skill}.svg`} />

        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`${skill}.svg`} />

        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={`/${src}`}  // this becomes /react.svg — correct path!
    alt={src}
    className="w-full h-full object-contain duration-200 hover:scale-110 drop-shadow-[0_0_6px_rgba(147,51,234,0.5)]"
  />
);

