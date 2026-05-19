import './IndustryPartners.css';

const logos = [
  '/images/kce/home/industry-logos/1.svg',
  '/images/kce/home/industry-logos/2.svg',
  '/images/kce/home/industry-logos/3.svg',
  '/images/kce/home/industry-logos/4.svg',
  '/images/kce/home/industry-logos/5.svg',
  '/images/kce/home/industry-logos/6.svg',
  '/images/kce/home/industry-logos/7.svg',
  '/images/kce/home/industry-logos/8.svg',
  '/images/kce/home/industry-logos/9.svg',
  '/images/kce/home/industry-logos/10.svg',
  '/images/kce/home/industry-logos/11.svg',
  '/images/kce/home/industry-logos/12.svg',
  '/images/kce/home/industry-logos/13.svg',
  '/images/kce/home/industry-logos/14.svg',
  '/images/kce/home/industry-logos/15.svg',
  '/images/kce/home/industry-logos/16.svg',
  '/images/kce/home/industry-logos/17.svg',
  '/images/kce/home/industry-logos/18.svg',
  '/images/kce/home/industry-logos/19.svg',
  '/images/kce/home/industry-logos/20.svg',
   '/images/kce/home/industry-logos/21.svg',
  '/images/kce/home/industry-logos/22.svg',
  '/images/kce/home/industry-logos/23.svg',
  '/images/kce/home/industry-logos/24.svg',
  '/images/kce/home/industry-logos/25.svg',
  '/images/kce/home/industry-logos/26.svg',
  '/images/kce/home/industry-logos/27.svg',
  '/images/kce/home/industry-logos/28.svg',
  '/images/kce/home/industry-logos/29.svg',
  '/images/kce/home/industry-logos/30.svg',
  '/images/kce/home/industry-logos/31.svg',
  '/images/kce/home/industry-logos/32.svg',
  '/images/kce/home/industry-logos/33.svg',
  '/images/kce/home/industry-logos/34.svg',
  '/images/kce/home/industry-logos/35.svg',
  '/images/kce/home/industry-logos/36.svg',
  '/images/kce/home/industry-logos/37.svg',
  '/images/kce/home/industry-logos/38.svg',
  '/images/kce/home/industry-logos/39.svg',
  '/images/kce/home/industry-logos/40.svg',
  '/images/kce/home/industry-logos/41.svg',
  '/images/kce/home/industry-logos/42.svg',
  '/images/kce/home/industry-logos/43.svg',
  '/images/kce/home/industry-logos/44.svg',
  '/images/kce/home/industry-logos/45.svg',
  '/images/kce/home/industry-logos/46.svg',
  '/images/kce/home/industry-logos/47.svg',
  '/images/kce/home/industry-logos/48.svg',
  '/images/kce/home/industry-logos/49.svg',
  '/images/kce/home/industry-logos/50.svg',
  '/images/kce/home/industry-logos/51.svg',
  '/images/kce/home/industry-logos/52.svg',
  '/images/kce/home/industry-logos/53.svg',
  '/images/kce/home/industry-logos/54.svg',
];

export default function IndustryPartners() {
  return (
    <section className='industry'>
      <h2>INDUSTRY & KCE</h2>
      <div className='logoGrid'>
        {logos.map((logo, i) => (
          <div className='logoCard' key={i}>
            <img src={logo} alt='company' />
          </div>
        ))}
      </div>
    </section>
  );
}
