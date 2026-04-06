import React, { useRef } from "react";
import produkData from "../Utils/produkData";
import styles from "../styles/Produk.module.css";

function Produk() {
  let produkList = [...produkData]; // Salin data produk awal
  const produkContainerRef = useRef(null); //Ref untuk container produk
  const handleClick = () => {
    const newProduk = {
      id: produkList.length + 1,
      nama: "Printer Epson",
      tahun: 2023,
      harga: "Rp. 3.000.000",
      gambar: "https://placehold.co/150",
    };
    produkList.push(newProduk); //menamnbahkan produk ke array

    // menambah produk baru kedalam ref menggunakan ref
    if (produkContainerRef.current) {
      const newProductElement = document.createElement("div");
      newProductElement.className = StyleSheet.card;
      newProductElement.innerHTML = `
    <img src="{newProduk.gambar}" alt="${newProduk.nama}"/>
    <h3>${newProduk.nama}</h3>
    <p>Tahu: ${newProduk.tahun}</p>
    <p>Harga: ${newProduk.harga}</p>
    `;
      produkContainerRef.current.appendChild(newProductElement);
    }
    console.log("Produk terbaru:", produkList);
    alert(
      "produk baru berhasil ditambahkan! silahkan cek produk baru di browser",
    );
  };
  return (
    <div className={styles.produkContainer}>
      <h1 className={styles.title}>Daftar Produk</h1>
      <div className={styles.cardContainer} ref={produkContainerRef}>
        {produkList.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.gambar} alt={item.nama} />
            <h3>{item.nama}</h3>
            <p>Tahun: {item.tahun}</p>
            <p>Harga: {item.harga}</p>
          </div>
        ))}
        <button onClick={handleClick} className={styles.addButton}>
          Tambah Produk Baru
        </button>
      </div>
    </div>
  );
}

export default Produk;
