import Brands from "@/components/Brands";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Audience from "@/components/Audience";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import Card2 from "@/components/Card2";
import Testemonials from "@/components/Testemonials";
import Galary from "@/components/Galary";

export default function Home() {
  return (
    <main className={`${styles.main} container`}>
      {/* Banner Section Start   */}
      <Banner />
      {/* Banner Section End  */}
      <Brands />
      <Audience />

      <TwoColumnLayout>
        <Card2
          background="graphicDesign"
          title="Graphic design"
          description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        />
        <Card2
          background="photoGraphy"
          title="Photography"
          description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </TwoColumnLayout>

      <Testemonials />
      <Galary />
    </main>
  );
}
