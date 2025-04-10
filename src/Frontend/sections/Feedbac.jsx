import { useState, useEffect } from 'react';
import axios from 'axios';
import './Testimonial.css'; // You'll need to create this for custom styles

const Feedback = () => {
    const [homeData, setHomeData] = useState({
        testimonial: {
            title: ''
        },
        testimonial_cover: ''
    });
    const [testimonials, setTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                // Fetch both home data and testimonials in parallel
                const [homeResponse, testimonialsResponse] = await Promise.all([
                    axios.get('/api/home-testimonial'),
                    axios.get('/api/testimonials')
                ]);

                setHomeData(homeResponse.data);
                setTestimonials(testimonialsResponse.data);
            } catch (err) {
                setError('Failed to fetch testimonial data');
                console.error('Error fetching data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="tp-testimonial__area grey-bg pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div 
                            className="tp-testimonial__title-box text-center mb-80 wow tpfadeUp" 
                            data-wow-duration=".7s" 
                            data-wow-delay=".3s"
                        >
                            <h3 className="tp-section-title">
                                {homeData.testimonial?.title}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div 
                        className="col-xl-6 col-lg-6 col-12 wow tpfadeLeft" 
                        data-wow-duration=".9s" 
                        data-wow-delay=".5s"
                    >
                        <div className="tp-testimonial__thumb">
                            <img 
                                src={homeData.testimonial_cover} 
                                alt="Testimonial Cover"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12">
                        <div className="tp-testimonial__wrapper">
                            {testimonials.map((testimonial, index) => (
                                <div 
                                    key={testimonial.id || index}
                                    className="tp-testimonial__item mb-15 d-flex wow tpfadeUp" 
                                    data-wow-duration=".7s" 
                                    data-wow-delay=".7s"
                                >
                                    <div className="tp-testimonial__icon">
                                        <span>
                                            <img 
                                                src={testimonial.preview?.value} 
                                                alt={testimonial.title}
                                            />
                                        </span>
                                    </div>
                                    <div className="tp-testimonial__content">
                                        <p>
                                            {testimonial.excerpt?.value?.length > 150 
                                                ? `${testimonial.excerpt.value.substring(0, 150)}...` 
                                                : testimonial.excerpt?.value
                                            }
                                        </p>
                                        <h3 className="tp-testimonial__title-sm">
                                            {testimonial.title} 
                                            <span>({testimonial.slug})</span>
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
