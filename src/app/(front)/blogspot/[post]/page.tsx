import { FrontBlogPost } from "@/components/Front/FrontBlogPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogspot | Hemvo",
};

export default function Post() {
  return <FrontBlogPost />;
}
