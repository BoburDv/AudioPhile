import styles from "./BestAudioGear.module.css";

export default function BestAudioGear() {
  return (
    <section className={styles.gearContainer}>
      <div className={styles.gearMain}>
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div>

        <picture>
        <source srcSet="/HeadPhones/tablet/audioGearTablet.png" media="(max-width: 790px)" />
        <img src="/HeadPhones/desktop/AudioGearBrat.png" width="100%" />
      </picture>

      </div>
    </section>
  );
}
