"use client";

import { useEffect, useRef, useState } from "react";

const content = {
  en: {
    invocation: "॥ श्री गणेशाय नमः ॥",
    heroTitle: "Ganpati Bappa Morya",
    heroSub: "",
    open: "Tap to Open",
    enter: "Come, celebrate with us",
    mantra:
      "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    welcomeTitle: "Welcome to our Ganesh Chaturthi celebration",
    welcome:
      "As we welcome Bappa into our home, we invite you to be a part of these beautiful days filled with devotion, togetherness, music, and joy.",
    welcome2:
      "Come seek Bappa’s blessings with us and celebrate the spirit of faith, family, and new beginnings.",

    // Event titles — shown only once
    sthapana: "Sthapana",
    sthapanaDate: "14 September 2026",
    sthapanaCopy:
      "With devotion, love and joy, we welcome Bappa into our home.",

    aarti: "Aarti",
    afternoon: "Afternoon — 1:00 PM",
    night: "Night — 9:30 PM",

    karaoke: "Karaoke Evenings with Ganesha",
    every: "Every Evening",
    karaokeTime: "6:30 PM – 8:00 PM",
    karaokeCopy: "Music, laughter, family and Bappa — together.",

    visarjan: "Visarjan",
    visarjanDate: "18 September 2026",
    visarjanTime: "3:00 PM",
    farewell:
      "As Bappa returns, He leaves behind blessings, memories, and a heart full of gratitude.",
    until: "Until we meet again…",
    venue: "Venue : Our Residence",
    wishes: "With Best Wishes",
    family: "Vijay Jadhav & Family",
    morya: "गणपती बाप्पा मोरया!",
    morya2: "गणपती बाप्पा मोरया, पुढच्या वर्षी लवकर या",
  },

  mr: {
    invocation: "॥ श्री गणेशाय नमः ॥",
    heroTitle: "गणपती बाप्पा मोरया",
    open: "स्पर्श करून उघडा",
    enter: "या, उत्सव साजरा करूया",
    mantra:
      "वक्रतुंड महाकाय सूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    welcomeTitle: "आमच्या गणेशोत्सवात आपले मनःपूर्वक स्वागत",
    welcome:
      "बाप्पांचे आमच्या घरी स्वागत करताना, भक्ती, आपुलकी, संगीत आणि आनंदाने भरलेल्या या सुंदर दिवसांमध्ये आपणही सहभागी व्हावे, ही मनापासून इच्छा.",
    welcome2:
      "बाप्पांचे आशीर्वाद घेण्यासाठी आणि श्रद्धा, कुटुंब व नव्या सुरुवातीचा उत्सव साजरा करण्यासाठी जरूर या.",

    // Event titles — shown only once
    sthapana: "स्थापना",
    sthapanaDate: "१४ सप्टेंबर २०२६",
    sthapanaCopy:
      "भक्ती, प्रेम आणि आनंदाने आम्ही बाप्पांचे आमच्या घरी स्वागत करतो.",

    aarti: "आरती",
    afternoon: "दुपार — १:०० वा.",
    night: "रात्र — ९:३० वा.",

    karaoke: "गणेशासोबत संगीताची संध्याकाळ",
    every: "दररोज",
    karaokeTime: "संध्याकाळी ६:३० – ८:०० वा.",
    karaokeCopy: "संगीत, हास्य, कुटुंब आणि बाप्पा — एकत्र.",

    visarjan: "विसर्जन",
    visarjanDate: "१८ सप्टेंबर २०२६",
    visarjanTime: "दुपारी ३:०० वा.",
    farewell:
      "बाप्पा परतीच्या वाटेवर निघताना आशीर्वाद, आठवणी आणि कृतज्ञतेने भरलेले मन मागे ठेवून जातात.",
    until: "पुन्हा भेटूया…",
    venue: "स्थळ : आमचे निवासस्थान",
    wishes: "शुभेच्छांसह",
    family: "विजय जाधव व परिवार",
    morya: "गणपती बाप्पा मोरया!",
    morya2: "गणपती बाप्पा मोरया, पुढच्या वर्षी लवकर या",
  },

  hi: {
    invocation: "॥ श्री गणेशाय नमः ॥",
    heroTitle: "गणपती बाप्पा मोरया",
    open: "स्पर्श करके खोलें",
    enter: "आइए, उत्सव मनाएँ",
    mantra:
      "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    welcomeTitle: "हमारे गणेश चतुर्थी उत्सव में आपका हार्दिक स्वागत है",
    welcome:
      "बप्पा का अपने घर में स्वागत करते हुए, भक्ति, अपनापन, संगीत और आनंद से भरे इन सुंदर दिनों में आपको भी हमारे साथ शामिल होने का स्नेहपूर्ण निमंत्रण है।",
    welcome2:
      "बप्पा का आशीर्वाद लेने और श्रद्धा, परिवार तथा नई शुरुआत की भावना का उत्सव मनाने अवश्य पधारें।",

    // Event titles — shown only once
    sthapana: "स्थापना",
    sthapanaDate: "१४ सितंबर २०२६",
    sthapanaCopy:
      "भक्ति, प्रेम और आनंद के साथ हम बप्पा का अपने घर में स्वागत करते हैं।",

    aarti: "आरती",
    afternoon: "दोपहर — १:०० बजे",
    night: "रात्रि — ९:३० बजे",

    karaoke: "गणेशा के साथ संगीत की शाम",
    every: "हर शाम",
    karaokeTime: "शाम ६:३० – ८:०० बजे",
    karaokeCopy: "संगीत, हँसी, परिवार और बप्पा — साथ-साथ।",

    visarjan: "विसर्जन",
    visarjanDate: "१८ सितंबर २०२६",
    visarjanTime: "दोपहर ३:०० बजे",
    farewell:
      "बप्पा लौटते हैं, अपने पीछे आशीर्वाद, यादें और कृतज्ञता से भरा हृदय छोड़ जाते हैं।",
    until: "फिर मिलेंगे…",
    venue: "कार्यक्रम का स्थान : हमारा निवास",
    wishes: "शुभकामनाओं सहित",
    family: "विजय जाधव एवं परिवार",
    morya: "गणपति बाप्पा मोरया!",
    morya2: "हे गणपति बप्पा, अगले साल जल्दी आना",
  },
};

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return ref;
}

function Bappa({ src, alt, className = "" }) {
  return (
    <div className={`bappa-frame ${className}`}>
      <div className="bappa-arch" aria-hidden="true" />

      <div className="bappa-backdrop-lights" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="bappa-glow" />

      <img src={src} alt={alt} className="bappa-image" />
    </div>
  );
}

function Petals({ count = 10 }) {
  return (
    <div className="petals" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ "--i": i }} />
      ))}
    </div>
  );
}

function FestivalLights({ className = "" }) {
  return (
    <div className={`festival-lights ${className}`} aria-hidden="true">
      {Array.from({ length: 11 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState("en");
  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);

  const audioRef = useRef(null);
  const c = content[lang];

  const welcomeRef = useReveal();
  const sthapanaRef = useReveal();
  const bhaktiRef = useReveal();
  const anandRef = useReveal();
  const visarjanRef = useReveal();

  const openInvitation = () => {
    setOpened(true);

    window.setTimeout(() => {
      document
        .querySelector(".hero-scene")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch {
      setPlaying(false);
    }
  };

  return (
    <main>
      <audio ref={audioRef} loop preload="none">
        <source src="/audio/devotional-ganesh.mp3" type="audio/mpeg" />
      </audio>

      {/* =========================
          OPEN INVITATION SCREEN
          ========================= */}
      <div
        className={`open-screen ${opened ? "open-screen-hidden" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Open invitation"
        aria-hidden={opened}
      >
        <div className="open-screen-glow" />

        <div className="open-card">
          <FestivalLights className="open-lights" />

          <div className="open-om">ॐ</div>

          <p className="open-invocation">{c.invocation}</p>

          <div className="open-card-line" />

          <h1>Ganesh Chaturthi</h1>

          <p className="open-family">28 Years of Faith, Family & Joy</p>

          <div className="open-mantra">
            {c.mantra.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>

          <button className="tap-open" onClick={openInvitation}>
            {c.open}
          </button>

          <p className="open-hint">A celebration from our home to yours</p>
        </div>
      </div>

      {/* =========================
          TOP CONTROLS
          ========================= */}
      <div className="top-controls">
        <div className="language-switcher" aria-label="Language">
          {[
            ["en", "EN"],
            ["mr", "मराठी"],
            ["hi", "हिंदी"],
          ].map(([key, label]) => (
            <button
              key={key}
              className={lang === key ? "active" : ""}
              onClick={() => setLang(key)}
              aria-pressed={lang === key}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          className="music-control"
          onClick={toggleMusic}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          <span>{playing ? "Ⅱ" : "♪"}</span>
          <small>{playing ? "Pause" : "Music"}</small>
        </button>
      </div>

      {/* =========================
          HERO
          ========================= */}
      <section className="scene hero-scene">
        <div className="scene-backdrop backdrop-home" />

        <FestivalLights className="hero-lights" />

        <div className="arch arch-one" />
        <div className="arch arch-two" />

        <div className="toran" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>

        <div className="hero-copy">
          <div className="om-mark">ॐ</div>

          <p className="invocation">{c.invocation}</p>

          <h1>{c.heroTitle}</h1>

          <div className="hero-mantra">
            {c.mantra.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>

        <Bappa
          src="/images/enhanced/bappa-hero.webp"
          alt="Traditional Ganesh murti"
          className="hero-bappa"
        />

        <div className="altar-floor" />

        <div className="diya diya-left">
          <span />
        </div>

        <div className="diya diya-right">
          <span />
        </div>

        <Petals count={12} />

        <div className="scroll-cue">
          <div className="scroll-message">{c.enter}</div>
          <div className="scroll-hint">
            <span>↓</span>
            <small>SCROLL TO EXPLORE</small>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* =========================
          WELCOME
          ========================= */}
      <section ref={welcomeRef} className="scene welcome-scene reveal">
        <FestivalLights className="section-lights welcome-lights" />

        <div className="soft-orb orb-a" />
        <div className="soft-orb orb-b" />

        <div className="welcome-layout">
          <div className="editorial-copy">
            <span className="eyebrow">28 YEARS OF FAITH</span>

            <h2>{c.welcomeTitle}</h2>

            <p>{c.welcome}</p>

            <p>{c.welcome2}</p>

            <div className="morya">{c.morya}</div>
          </div>

          <div className="portrait-stage">
            <div className="portrait-ring" />

            <Bappa
              src="/images/enhanced/bappa-welcome.webp"
              alt="Close view of the Ganesh murti"
            />

            <div className="floating-shri">श्री</div>
          </div>
        </div>
      </section>

      {/* =========================
          STHAPANA
          ========================= */}
      <section ref={sthapanaRef} className="scene sthapana-scene reveal">
        <div className="scene-backdrop backdrop-altar" />

        <FestivalLights className="section-lights" />

        <div className="marigold-border" />

        <div className="sthapana-layout">
          <div className="sthapana-art">
            <div className="rangoli" aria-hidden="true">
              <span>ॐ</span>
            </div>

            <Bappa
              src="/images/enhanced/bappa-hero.webp"
              alt="Ganesh murti at the family celebration"
            />

            <div className="altar-diyas">
              <div className="diya">
                <span />
              </div>

              <div className="diya">
                <span />
              </div>
            </div>
          </div>

          <div className="event-copy">
            {/* Single event heading */}
            <h2>{c.sthapana}</h2>

            <div className="date-display">{c.sthapanaDate}</div>

            <div className="ornament-line">✦</div>

            <p>{c.sthapanaCopy}</p>

            <div className="mantra">ॐ गं गणपतये नमः</div>

            <div className="morya dark-morya">{c.morya}</div>
          </div>
        </div>
      </section>

      {/* =========================
          AARTI
          ========================= */}
      <section ref={bhaktiRef} className="scene bhakti-scene reveal">
        <FestivalLights className="section-lights" />

        <div className="bhakti-light" />

        <div className="bhakti-layout">
          <div className="bhakti-copy">
            <span className="eyebrow">BHAKTI</span>

            {/* Single event heading */}
            <h2>{c.aarti}</h2>

            <div className="time-list">
              <div>
                <span>01</span>
                <strong>{c.afternoon}</strong>
              </div>

              <div>
                <span>02</span>
                <strong>{c.night}</strong>
              </div>
            </div>

            <p className="small-copy">
              A quiet moment of prayer, gratitude and Bappa’s blessings.
            </p>

            <div className="morya bhakti-morya">{c.morya}</div>
          </div>

          <div className="aarti-visual">
            <div className="aarti-halo" aria-hidden="true" />

            <Bappa
              src="/images/enhanced/bappa-aarti.webp"
              alt="Close-up of Bappa during the devotional moment"
            />

            <div className="incense" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>

            <div className="aarti-diya aarti-diya-left">
              <div className="diya">
                <span />
              </div>
            </div>

            <div className="aarti-diya aarti-diya-right">
              <div className="diya">
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ANAND / KARAOKE
          ========================= */}
      <section ref={anandRef} className="scene anand-scene reveal">
        <FestivalLights className="section-lights" />

        <div className="light-string" aria-hidden="true">
          {Array.from({ length: 11 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <div className="anand-layout">
          <div className="anand-copy">
            <span className="eyebrow">ANAND</span>

            <h2>{c.karaoke}</h2>

            <p className="every">{c.every}</p>

            <div className="time-pill">{c.karaokeTime}</div>

            <p>{c.karaokeCopy}</p>

            <div className="music-notes" aria-hidden="true">
              ♪ ♫ ♪
            </div>

            <div className="morya">{c.morya}</div>
          </div>

          <div className="family-window">
            <div className="window-glow" />

            <div className="window-arch" aria-hidden="true" />

            <div className="bappa-mini">
              <img src="/images/enhanced/bappa-hero.webp" alt="" />
            </div>

            <div className="home-lamps">
              <div className="diya">
                <span />
              </div>

              <div className="diya">
                <span />
              </div>

              <div className="diya">
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          VISARJAN
          ========================= */}
      <section ref={visarjanRef} className="scene visarjan-scene reveal">
        <div className="sunset" />

        <div className="water">
          <span />
          <span />
          <span />
          <span />
        </div>

        <FestivalLights className="visarjan-lights" />

        <div className="visarjan-copy">
          {/* Single event heading */}
          <h2>{c.visarjan}</h2>

          <div className="visarjan-date">{c.visarjanDate}</div>

          <div className="visarjan-time">{c.visarjanTime}</div>
        </div>

        <div className="visarjan-bappa">
          <div className="visarjan-halo" aria-hidden="true" />

          <img
            src="/images/enhanced/bappa-welcome.webp"
            alt="Ganesh murti at farewell"
          />
        </div>

        <div className="visarjan-copy visarjan-copy-bottom">
          <p>{c.farewell}</p>

          <em>{c.until}</em>

          <strong>{c.morya2}</strong>
        </div>

        <Petals count={9} />
      </section>

      {/* =========================
          FOOTER
          ========================= */}
      <footer className="closing">
        <FestivalLights className="section-lights" />

        <div className="closing-symbol">ॐ</div>

        <p>{c.venue}</p>

        <span>{c.wishes}</span>

        <h3>{c.family}</h3>

        <div className="closing-morya">{c.morya}</div>

        <div className="closing-line">
          रिद्धी * सिद्धी * शुभ * लाभ * क्षेम * मंगल * श्री
        </div>
      </footer>
    </main>
  );
}
