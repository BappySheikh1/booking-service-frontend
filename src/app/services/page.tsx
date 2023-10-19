import ServicesItem from "@/components/Services";
import SMBreadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motel | Services",
};

const Services = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <SMBreadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Services", path: "/services" },
          ]}
        />
        <div>
          <ServicesItem />
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Services;
