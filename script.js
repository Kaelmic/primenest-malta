:root {
  --bg: #f5f1ea;
  --paper: #fffaf2;
  --ink: #171717;
  --muted: #6f6a60;
  --line: rgba(23,23,23,.12);
  --accent: #8a6f3d;
  --olive: #5f6f52;
  --dark: #1f241d;
  --radius: 18px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html { scroll-behavior: smooth; }

body {
  font-family: Georgia, "Times New Roman", serif;
  background: var(--bg);
  color: var(--ink);
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  padding: 18px 0;
  background: rgba(245,241,234,.88);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--line);
}

.nav-container {
  width: min(92%, 1320px);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: var(--ink);
  display: flex;
  flex-direction: column;
  letter-spacing: .12em;
  line-height: 1;
}

.logo span {
  font-size: 1.15rem;
  font-weight: 700;
}

.logo small {
  margin-top: 5px;
  font-size: .62rem;
  color: var(--muted);
  letter-spacing: .38em;
}

.nav-links {
  display: flex;
  gap: 34px;
  list-style: none;
  font-family: Arial, sans-serif;
}

.nav-links a {
  font-size: .82rem;
  color: var(--muted);
  transition: .25s ease;
}

.nav-links a:hover {
  color: var(--ink);
}

.contact-btn,
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  font-family: Arial, sans-serif;
  font-size: .82rem;
  font-weight: 700;
  letter-spacing: .04em;
  transition: .25s ease;
}

.contact-btn {
  padding: 12px 20px;
  background: var(--dark);
  color: #fff;
}

.contact-btn:hover,
.primary-btn:hover {
  transform: translateY(-2px);
  background: #30392c;
}

.hero {
  position: relative;
  min-height: 720px;
  padding: 140px 8% 90px;
  display: flex;
  align-items: center;
  background:
    linear-gradient(to right, rgba(245,241,234,.96) 0%, rgba(245,241,234,.82) 44%, rgba(245,241,234,.1) 100%),
    url("images/1.png") center/cover no-repeat;
}

.hero-overlay,
.hero-parallax {
  display: none;
}

.hero-content {
  max-width: 620px;
  animation: none;
  opacity: 1;
  transform: none;
}

.hero-label,
.section-label {
  font-family: Arial, sans-serif;
  font-size: .72rem;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--olive);
  margin-bottom: 18px;
}

.hero h1 {
  max-width: 520px;
  font-size: clamp(3rem, 4.8vw, 5rem);
  line-height: .86;
  font-weight: 400;
  letter-spacing: -.07em;
  margin-bottom: 28px;
}

.hero h1 span {
  display: block;
  color: var(--accent);
}

.hero-text {
  max-width: 460px;
  font-family: Arial, sans-serif;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 34px;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn {
  padding: 15px 24px;
}

.primary-btn {
  background: var(--dark);
  color: white;
}

.secondary-btn {
  border: 1px solid var(--line);
  color: var(--ink);
  background: rgba(255,255,255,.42);
}

.secondary-btn:hover {
  background: white;
  transform: translateY(-2px);
}

.scroll-indicator {
  margin-top: 70px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: Arial, sans-serif;
  font-size: .7rem;
  letter-spacing: .18em;
  color: var(--muted);
}

.scroll-indicator span {
  width: 38px;
  height: 1px;
  background: var(--muted);
  border: 0;
  border-radius: 0;
  animation: none;
}

section:not(.hero) {
  position: relative;
  padding: 110px 8%;
  background: var(--bg);
}

section:not(.hero)::before {
  display: none;
}

.section-header {
  max-width: 780px;
  margin-bottom: 52px;
}

.section-header h2,
.content-section h2,
.contact-section h2,
.property-details h2 {
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  line-height: .96;
  font-weight: 400;
  letter-spacing: -.05em;
  margin-bottom: 18px;
}

.section-header p,
.content-section p,
.contact-section p,
.property-description {
  max-width: 620px;
  font-family: Arial, sans-serif;
  color: var(--muted);
  line-height: 1.8;
  font-size: .98rem;
}

.property-grid {
  display: grid;
  gap: 26px;
}

.property-card {
  display: grid;
  grid-template-columns: minmax(320px, 45%) 1fr;
  align-items: stretch;
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 22px;
  overflow: hidden;
  transition: .28s ease;
}

.property-card:hover {
  background: rgba(255,250,242,.55);
  transform: translateY(-3px);
  box-shadow: 0 22px 50px rgba(40,35,25,.09);
}

.property-card:nth-child(even) {
  grid-template-columns: 1fr minmax(320px, 45%);
}

.property-card:nth-child(even) .property-image {
  order: 2;
}

.property-image {
  min-height: 330px;
  height: auto;
  position: relative;
  background-size: cover;
  background-position: center;
}

.property-image span {
  position: absolute;
  left: 22px;
  bottom: 22px;
  top: auto;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255,250,242,.94);
  color: var(--ink);
  font-family: Arial, sans-serif;
  font-size: .72rem;
  font-weight: 700;
}

.img-1 {
  background-image: url("images/Modern-Apartment.png");
}

.img-2 {
  background-image: url("images/Luxury Penthouse with Sea View.png");
}

.img-3 {
  background-image: url("images/Townhouse with Private Yard.png");
}

.property-info {
  padding: clamp(28px, 5vw, 58px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.property-info h3 {
  max-width: 520px;
  font-size: clamp(2rem, 3vw, 3.6rem);
  line-height: .95;
  letter-spacing: -.05em;
  font-weight: 400;
  margin-bottom: 16px;
}

.location {
  font-family: Arial, sans-serif;
  color: var(--muted);
  font-size: .88rem;
  margin-bottom: 24px;
}

.price {
  color: var(--accent);
  font-size: clamp(1.6rem, 2vw, 2.4rem);
  font-weight: 700;
  margin-bottom: 26px;
}

.price.large {
  font-size: 2.2rem;
  color: var(--accent);
}

.property-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 34px;
  font-family: Arial, sans-serif;
}

.property-meta span {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(95,111,82,.1);
  color: var(--olive);
  font-size: .78rem;
}

.property-link {
  width: fit-content;
  font-family: Arial, sans-serif;
  color: var(--ink);
  font-weight: 700;
  border-bottom: 1px solid currentColor;
  padding-bottom: 5px;
}

.property-link::after {
  content: " →";
}

.single-property {
  background: #ebe4d8 !important;
}

.single-property-grid {
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 56px;
  align-items: center;
}

.main-preview {
  min-height: 540px;
  border-radius: 24px;
  background: url("images/Modern-Apartment.png") center/cover no-repeat;
  border: 1px solid var(--line);
}

.thumbnail-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 14px;
}

.thumbnail-row div {
  height: 120px;
  border-radius: 14px;
  background-size: cover;
  background-position: center;
  border: 1px solid var(--line);
  opacity: .92;
}

.thumbnail-row div:nth-child(1) {
  background-image: url("images/Modern-Apartment.png");
}

.thumbnail-row div:nth-child(2) {
  background-image: url("images/Luxury Penthouse with Sea View.png");
}

.thumbnail-row div:nth-child(3) {
  background-image: url("images/Townhouse with Private Yard.png");
}

.detail-meta {
  margin: 26px 0;
}

.property-description {
  margin-bottom: 30px;
}

.table-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr .6fr;
  gap: 12px;
  padding: 16px;
  border-radius: 13px;
  background: white;
  color: var(--muted);
}

.table-head {
  background: #ebe4d8;
  color: var(--ink);
  font-weight: 700;
}

.content-section,
.contact-section {
  max-width: none;
}

.content-section > *,
.contact-section > * {
  max-width: 900px;
}

.contact-section {
  background: #ebe4d8 !important;
}

.contact-section .btn {
  margin-top: 28px;
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .7s ease, transform .7s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.property-card:nth-child(2),
.property-card:nth-child(3) {
  transition-delay: 0s;
}

.about-section {
  background: var(--bg);
}

.about-grid {
  display: grid;
  grid-template-columns: .95fr 1fr;
  gap: 70px;
  align-items: start;
}

.about-grid h2,
.services-section h2 {
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  line-height: .96;
  font-weight: 400;
  letter-spacing: -.05em;
}

.about-copy {
  display: grid;
  gap: 22px;
  padding-top: 36px;
}

.about-copy p {
  font-family: Arial, sans-serif;
  color: var(--muted);
  line-height: 1.85;
  font-size: 1rem;
}

.about-highlights {
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.about-highlights div {
  padding: 30px;
  border-right: 1px solid var(--line);
}

.about-highlights div:last-child {
  border-right: 0;
}

.about-highlights strong {
  display: block;
  margin-bottom: 18px;
  font-family: Arial, sans-serif;
  color: var(--accent);
  font-size: .8rem;
}

.about-highlights span {
  display: block;
  font-size: 1.35rem;
  line-height: 1.25;
}

.services-section {
  background: #ebe4d8 !important;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.service-item {
  min-height: 320px;
  padding: 30px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(255,250,242,.36);
  transition: .25s ease;
}

.service-item:hover {
  background: var(--paper);
}

.service-item span {
  display: block;
  margin-bottom: 90px;
  font-family: Arial, sans-serif;
  color: var(--accent);
  font-size: .78rem;
  font-weight: 700;
}

.service-item h3 {
  margin-bottom: 16px;
  font-size: 1.45rem;
  font-weight: 400;
}

.service-item p {
  font-family: Arial, sans-serif;
  color: var(--muted);
  line-height: 1.75;
  font-size: .92rem;
}

.footer {
  padding: 24px 8%;
  border-top: 1px solid var(--line);
  background: var(--paper);
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.footer-brand {
  font-size: 1rem;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.footer-links a {
  font-family: Arial, sans-serif;
  font-size: .85rem;
  color: var(--muted);
  transition: .2s ease;
}

.footer-links a:hover {
  color: var(--ink);
}

.footer-admin a {
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--line);
  border-radius: 50%;

  transition: .25s ease;
}

.footer-admin img {
  width: 18px;
  height: 18px;
  opacity: .7;
}

.footer-admin a:hover {
  background: var(--dark);
}

.footer-admin a:hover img {
  filter: invert(1);
}
