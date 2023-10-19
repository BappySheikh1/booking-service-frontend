import SMBreadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motel | Faqs",
};

const Faqs = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <SMBreadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Faqs", path: "/faq" },
          ]}
        />
        <h1>Faq</h1>
      </Container>

      <Footer />
    </div>
  );
};

export default Faqs;
