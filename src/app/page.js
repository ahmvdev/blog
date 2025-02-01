'use client';
import Header from "@/components/ui/Header";
import Card from "@/components/ui/Card";
import posts from "../../public/posts";


export default function Main() {

  const cardEntry =
    posts.map((post) => {
      return (
        <Card imgSrc={post.img.src}
          title={post.title}
          country={post.country}
          mapsLink={post.googleMapsLink}
          dates={post.dates}
          text={post.text}
        />
      )
    })

  return (
    <div>
      <Header />
      {cardEntry}
    </div >
  );
}
