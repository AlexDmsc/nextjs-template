import Link from "next/link";
import Image from "next/image";

const socialMediasIcons = {
  git: {
    src: "/icon_git.svg",
    href: "Lorem Ipsum",
  },
  linkedin: {
    src: "/icon_linkedin.svg",
    href: "Lorem Ipsum",
  },
  mail: {
    src: "/icon_mail.svg",
    href: "/contact",
  },
};

export default function Home() {
  return (
    <section className="container">
      <div className="home-intro">
        <div className="home-intro_personal">
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            quisquam inventore ipsam, iure libero animi necessitatibus voluptate
            reiciendis totam ut. Enim, magni debitis aperiam accusamus
            laudantium dolor minus aliquam doloribus.
          </p>
        </div>
        <div className="home-aside">
          <div className="home-latests_articles">
            <h3>Latests articles</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="home-latests_projects">
            <h3>Latests projects</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="home-social_medias">
            <h3>Social media</h3>
            {Object.entries(socialMediasIcons).map(
              ([iconName, { src, href }]) => (
                <Link key={iconName} href={href} target="_blank">
                  <Image
                    src={src}
                    alt={`Icon - ${iconName}`}
                    width={35}
                    height={35}
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
