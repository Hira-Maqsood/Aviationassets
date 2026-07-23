import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aviation Assets. Reach our team for inquiries about aviation training courses, consulting services, and partnership opportunities.",
  openGraph: {
    title: "Contact Us | Aviation Assets",
    description:
      "Get in touch with Aviation Assets for aviation training and consulting inquiries.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactContent />
    </>
  );
}
