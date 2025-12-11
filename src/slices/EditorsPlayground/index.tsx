import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import clsx from "clsx";
import { EditorCard } from "@/components/EditorsCard";

/**
 * Props for `EditorsPlayground`.
 */
export type EditorsPlaygroundProps =
  SliceComponentProps<Content.EditorsPlaygroundSlice>;

/**
 * Component for "EditorsPlayground" Slices.
 */
const EditorsPlayground: FC<EditorsPlaygroundProps> = ({ slice }) => {
   const editors = [
    {
      image: "https://images.unsplash.com/photo-1608760000795-547e78bfc003?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1950",
      title: "CodeStudio",
      description: "Professional IDE with intelligent AI assistance.",
      href: "https://codeswift-codestudio.vercel.app/dashboard",
    },
    {
      image: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      title: "SketchFlow",
      description: "Turn wireframes into production-ready code instantly.",
      href: "https://www.google.com",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      title: "AutoBuild",
      description: "Natural language to production code.",
      href: "https://www.google.com",
    },
  ];

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
      innerClassName="flex flex-col justify-center"
    >

      <FadeIn>

      <h2 className="font-bold-slanted text-6xl md:text-8xl uppercase scroll-pt-6 "> 

        <PrismicText field={slice.primary.heading} />
      </h2>
        

        <div className="mb-6 max-w-4xl text-xl text-pretty">
           <PrismicRichText field={slice.primary.description} />
        </div>
       
       


             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {editors.map((editor, index) => (
                <EditorCard
                  key={index}
                  image={editor.image}
                  title={editor.title}
                  description={editor.description}
                  href={editor.href}
                />
              ))}
            </div>


       
      </FadeIn>


      
    </Bounded>
  );
};

export default EditorsPlayground;

