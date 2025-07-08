import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";


async function getData() {
  const res = await fetch("https://dummyjson.com/products?skip=100", {
    cache: "no-store", // مهم علشان البيانات تظهر فورًا
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  // راجع كل المنتجات من غير فلترة
  return data.products;
}

export default async function Blog() {
  const products = await getData();

  return (
    <div className={styles.maincontainer}>
      {products.map((product) => (
        <Link
          href={`/blog/${product.id}`}
          className={styles.post}
          key={product.id}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={product.thumbnail}
              width={350}
              height={250}
              alt={product.title}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.text}>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
