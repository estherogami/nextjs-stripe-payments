"use client";
import Image from 'next/image'
import styles from './page.module.css'
import checkout from "./checkout";

export default function Home() {
  return (
    <main className={styles.main}>
      <div >
        <p>
         
        </p>
        <div>
        
        </div>
      </div>

      <div className={styles.center}>
        <h1>Choose your tour</h1>
      </div>

      <div className={styles.grid}>
        <a className={styles.card} 
          onClick={() => {
            checkout([
                {
                  price: "price_1O7SMlFI5Xg6FK2GkaUlHV1N",
                  quantity: 1
                }
              ]);
          }}>
          <h2>
            One day tour <span>-&gt;</span>
          </h2>
         
          <p>- Visit the most important touristic spots of the city.</p>
        </a>
        <div className={styles.card} >
          <h2>
            2 days tour <span>-&gt;</span>
          </h2>
          
          <p>- Visit the most important touristic spots of the city</p>
          <p>- 1 day trip to the national park</p>
        </div>

        {/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Premium pack <span>-&gt;</span>
          </h2>
         
          <p>- Visit the most important touristic spots of the city</p>
          <p>- 1 day trip to the national park</p>
          <p>- We take you from the airport</p>
        </a> */}

      </div>
    </main>
  )
}
