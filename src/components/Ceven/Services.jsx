import React, { useEffect, useRef } from 'react';
import web from '../../assets/services/reshot-icon-coding-in-a-computer-DWHMJ8UE3L-0d8a1.svg';
import app from '../../assets/services/reshot-icon-coding-signs-C6T2PYMGR3-6be4e.svg';
import ml from '../../assets/services/reshot-icon-wisdom-PT6ED7ZAQG-daae8.svg';
import devops from '../../assets/services/reshot-icon-control-settings-MDG6WHZC7X-f25e1.svg';
import './styles.css'
function Services() {
  const boxesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      boxesRef.current.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top + scrollTop;
        const boxHeight = box.offsetHeight;
        const isInViewport = (scrollTop + windowHeight) > (boxTop + (boxHeight / 4));
        if (isInViewport) {
          setTimeout(() => {
            box.classList.add('open');
          }, index * 200); // Delay for each box
        } else {
          box.classList.remove('open');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='services' className='pt-8 pb-14 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32 text-center bg-gray-100'>
      <h2 className='text-3xl font-bold text-gray-700 mb-8'>Services We Provide</h2>
      <div className='relative overflow-x-auto'>
        <div className='whitespace-nowrap'>
          {/* Service Boxes */}
          {[
            {
              img: web,
              title: 'Web Development',
              features: ['Responsive Design', 'E-commerce Solutions', 'SEO Optimization', 'CMS']
            },
            {
              img: app,
              title: 'App Development',
              features: ['Cross-Platform Apps', 'User Experience Design', 'API Integration', 'Performance Optimization']
            },
            {
              img: ml,
              title: 'Machine Learning',
              features: ['Predictive Analytics', 'NLP', 'Computer Vision', 'Automation']
            },
            {
              img: devops,
              title: 'DevOps',
              features: ['CI/CD', 'Infrastructure as Code', 'Monitoring and Logging', 'Automated Testing']
            }
          ].map((service, index) => (
            <div
              className={`service-box inline-block border-2 border-gray-500 p-6 rounded-xl shadow-2xl transition-transform transform hover:scale-105 group mx-4`}
              ref={(el) => (boxesRef.current[index] = el)}
              key={index}
            >
              <img src={service.img} className='h-12 mb-4 mx-auto' alt={service.title} />
              <div className='group-hover:text-purple-700 text-xl lg:text-2xl font-semibold text-left'>
                {service.title}
              </div>
              <ul className='text-base lg:text-lg mt-2 text-left'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;