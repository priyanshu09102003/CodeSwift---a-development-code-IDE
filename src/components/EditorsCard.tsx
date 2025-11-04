import { FC } from "react";

interface EditorCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export const EditorCard: FC<EditorCardProps> = ({ image, title, description, href }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      
      <a
        href={href}
        className="absolute inset-0 z-10 cursor-pointer"
        aria-label={`Open ${title}`}
      />

      
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

     
      <div className="relative p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold uppercase tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        <a
          href={href}
          className="relative z-20 block w-full overflow-hidden rounded-lg bg-black px-6 py-3 font-bold uppercase text-white text-center transition-all duration-300 hover:bg-gray-900 hover:shadow-lg active:scale-95 cursor-pointer"
        >
          <span className="relative z-10">Launch Editor →</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </a>
      </div>

  
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-blue-500/50 pointer-events-none" />
    </div>
  );
};