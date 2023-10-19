import SMBreadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motel | Blogs",
};

const Blogs = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <SMBreadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Blog", path: "/blog" },
          ]}
        />
        <h1>Blogs</h1>
      </Container>

      <Footer />
    </div>
  );
};

export default Blogs;
