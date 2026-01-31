import Image from 'next/image'
import SilderCard from './SilderCard'
import Link from 'next/link'

const Accordion = ({ data, fullData = null }) => {
  console.log('first', fullData)
  return (
    <section className={data?.sectionbg || 'section-bg1'}>
      <div className='section-wid kce-acc'>
        {data.map((data, index) => (
          <div className='row g-5 align-items-center' key={index}>
            <div className='col-12 order-2 order-lg-1 mt_md--40 mt_sm--40'>
              <div className='rbt-accordion-style accordion'>
                <div className='section-title text-start'>
                  {data.title && <h2 className='section-ti'>{data.title}</h2>}
                  {data.description && (
                    <p className='mb-4'>{data.description}</p>
                  )}
                </div>
                <div className='rbt-accordion-style rbt-accordion-02 accordion'>
                  <div className='accordion' id='accordionExampleb2'>
                    {data.body.map((item, innerIndex) => (
                      <div className='accordion-item card' key={innerIndex}>
                        <h2
                          className='accordion-header card-header'
                          id={item.heading}
                        >
                          <button
                            className={`accordion-button ${
                              !item.collapsed ? 'collapsed' : ''
                            }`}
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target={`#${item.collapse}`}
                            aria-expanded={item.expanded}
                            aria-controls={item.collapse}
                          >
                            {item.accordionTitle}
                          </button>
                        </h2>
                        <div
                          id={item.collapse}
                          className={`accordion-collapse collapse ${
                            item.show ? 'show' : ''
                          }`}
                          aria-labelledby={item.heading}
                          data-bs-parent='#accordionExampleb2'
                        >
                          {item.desc && (
                            <div className='accordion-body card-body'>
                              {item.desc}
                            </div>
                          )}

                          {item?.cardSlider && (
                            <SilderCard data={item?.cardSlider} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {fullData?.button?.url && (
          <div className='pt-3'>
            <Link
              href={fullData?.button?.url || '#'}
              target='_blank'
              className='px-5 py-3 mt-3 d-inline-flex align-items-center justify-content-center text-decoration-none '
              style={{
                backgroundColor: '#f2fff9',
                color: '#1C3C4A',
                borderRadius: '20px'
              }}
            >
              <span className='faculty-ti'>{fullData?.button?.name}</span>
              <i className='feather-chevron-right ms-2 '></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Accordion
