import React from 'react';
import './About.css';
const featuresList = [
    {
        
        title: 'Customer Segmentation',
        description: 'Our platform allows businesses to segment their customers based on various criteria such as demographics, browsing behavior, purchase history, and more.'
    },
    {
    
        title: 'Personalized Content',
         description: 'With our platform, businesses can create and deliver tailored content to individual customers, increasing relevancy and engagement.',  
    },
    {
      
        title: 'Analytics & Reporting',
        description:
          'Our platform provides in-depth analytics and reporting capabilities, allowing businesses to measure the performance of their marketing campaigns and make data-driven decisions.',
      },
      {
       
        title: 'Integration & Scalability',
        description:
          'We offer seamless integration with various third-party tools and APIs, allowing businesses to extend the functionality of their marketing platform as needed.',
      },
];

const technologyList = [
    'React.js',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'MySQL',
    'JSON web Tokens(JWT)',
];

export default function AboutUs() {
    return (
     <div className='about-container animation-slide-up'>

        <h1 className='title'>About Us</h1>
        <p className='description'>Welcome to Jay Marketing Ambiance!</p>

         <section className='section'>
        <h2 className='title'>Overview</h2>
        <p className='description'>
        Jay Marketing Ambiance is an online marketing
         agency based in Kiamyko, KE. 
         We offer a wide variety of services to our clients, 
         from website design to digital marketing.
          We are a team of professionals who are passionate about our clients’ needs
         and are always looking for new opportunities.
         </p>
         </section>

         <section className="section">
         <h2 className='title'>Key Features</h2>
         <ul className='features-list'>
            {featuresList.map((feature,index) => (
                <li className='feature-item' key={index}>
                    <div className='icon'>{feature.icon}</div>
                    <div>
                        <h3 className='feature-title'>{feature.title}</h3>
                        <p className='feature-description'>{feature.description}</p>
                    </div>
                    </li>
                 ))}
                 </ul>
            </section>

        <section className="section">
        <h2 className='title'>Technology Stack</h2>
        <p className='description'>
        Our personalized marketing platform is built using the following
        technologies: 
        </p>
        <ul className='technology-list'>
            {technologyList.map((technology,index) => (
                <li className='technology-item' key={index}>
                    {technology}
             </li>
            ))}
            </ul>
        </section>

        <section className="section">
        <h2 className='title'>Contact Us</h2>
        <p className='description'>
        If you have any questions or would like to discuss how our platform can
        benefit your business, please feel free to contact us!  
        </p>
        <div className='contact-details'>
        <p className='contact-info'>Email: jeffjay@jaymbianceafrica.com</p>
        <p className='contact-info'>Phone: +254 721 300 000</p>
     </div>
     </section>
     </div>
    );
}