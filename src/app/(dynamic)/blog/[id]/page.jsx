import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed To Fetch data");
  }
  return res.json();
}









export async function generateMetadata({ params}) {

  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.description,
  }
}












export default async function Post({ params }) {
  const product = await getData(params.id);
  console.log(product);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>

        <div className={styles.imageContainer}>
          <Image
            className={styles.postImage}
            src={product.thumbnail}
            alt="post image"
            fill={true}
          />
          <span className={styles.author}>{product.brand}</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((image) => (
            <Image
              src={image}
              alt={product.title}
              width={200}
              height={200}
              key={product.id}
            />
          ))}
        </div>
        <div className={styles.text}>
          In Greek mythology, the Amazons (Ancient Greek: Ἀμαζόνες Amazónes,
          singular Ἀμαζών Amazṓn, via Latin Amazōn, -ōnis) are portrayed in a
          number of ancient epic poems and legends, such as the Labours of
          Heracles, the Argonautica and the Iliad. They were a group of female
          warriors and hunters, who were as skilled and courageous as men in
          physical agility, strength, archery, riding skills, and the arts of
          combat. Their society was closed to men and they only raised their
          daughters and returned their sons to their fathers, with whom they
          would only socialize briefly in order to reproduce.[1][2] Courageous
          and fiercely independent, the Amazons, commanded by their queen,
          regularly undertook extensive military expeditions into the far
          corners of the world, from Scythia to Thrace, Asia Minor and the
          Aegean Islands, reaching as far as Arabia and Egypt.[3] Besides
          military raids, the Amazons are also associated with the foundation of
          temples and the establishment of numerous ancient cities like Ephesos,
          Cyme, Smyrna, Sinope, Myrina, Magnesia, Pygela, etc.[4][5] The texts
          of the original myths envisioned the homeland of the Amazons at the
          periphery of the then-known world. Various claims to the exact place
          ranged from provinces in Asia Minor (Lycia, Caria, etc.) to the
          steppes around the Black Sea, or even Libya. However, authors most
          frequently referred to Pontus in northern Anatolia, on the southern
          shores of the Black Sea, as the independent Amazon kingdom where the
          Amazon queen resided at her capital Themiscyra, on the banks of the
          Thermodon river.[6] Palaephatus, who himself might have been a
          fictional character, attempted to rationalize the Greek myths in his
          work On Unbelievable Tales. He suspected that the Amazons were
          probably men who were mistaken for women by their enemies because they
          wore clothing that reached their feet, tied up their hair in
          headbands, and shaved their beards. Probably the first in a long line
          of skeptics, he rejected any real basis for them, reasoning that
          because they did not exist during his time, most probably they did not
          exist in the past either.[7][8] Decades of archaeological discoveries
          of burial sites of female warriors, including royalty, in the Eurasian
          Steppes suggest that the horse cultures of the Scythian, Sarmatian and
          Hittite peoples likely inspired the Amazon myth.[10][11] In 2019, a
          grave with multiple generations of female Scythian warriors, armed and
          in golden headdresses, was found near Russia's Voronezh.[12]
        </div>
      </div>
    </div>
  );
}
