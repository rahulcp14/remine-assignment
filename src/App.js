import "./App.css";

export default function App() {
  return (
    <div className="landing-page">
      <div className="header-section">
        <h1>Recycle Your Electronics Responsibly with Remine</h1>
        <p>
          At Remine, we're committed to responsible e-waste recycling. We
          believe that by recycling electronic waste, we can help reduce the
          environmental impact of technology and promote sustainable practices.
        </p>
        <form>
          <label htmlFor="email">Stay updated on our progress:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
          />
          <button>Subscribe</button>
        </form>
      </div>

      <div class="services-section">
        <div class="container">
          <h2>Our Services</h2>
          <p>We offer a variety of recycling services to meet your needs:</p>
          <ul>
            <li>
              Free pickup service: We offer free pickup services for businesses
              and organizations with a minimum of 10 items for recycling.
            </li>
            <li>
              Drop-off centers: We have conveniently located drop-off centers
              where individuals can drop off their electronic waste for
              recycling.
            </li>
            <li>
              Secure data destruction: We offer secure data destruction services
              to protect your sensitive information.
            </li>
            <li>
              Recycling programs: We offer customized recycling programs to meet
              the unique needs of businesses and organizations.
            </li>
          </ul>
        </div>
      </div>
      <div class="benefits-section">
        <div class="b-container">
          <h2>Benefits</h2>
          <p>
            By choosing Remine for your e-waste recycling needs, you'll enjoy
            the following benefits:
          </p>
          <ul>
            <li>
              Helping the environment: By recycling e-waste, you're reducing the
              environmental impact of technology.
            </li>
            <li>
              Sustainable practices: Recycling with Remine promotes sustainable
              practices and helps conserve natural resources.
            </li>
            <li>
              Safe and secure: We use industry-standard data destruction
              techniques to ensure your sensitive information is safe and
              secure.
            </li>
            <li>
              Extra money: Our recycling programs can help businesses and
              organizations earn extra money while promoting sustainability.
            </li>
          </ul>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>What Our Customers Are Saying</h2>
        <div className="testimonial">
          <p>
            "Remine made it easy for our business to recycle our e-waste
            responsibly. Their pickup service was quick and convenient, and we
            feel good knowing we're doing our part to help the environment."
          </p>
          <p className="author">- Sarath S.</p>
        </div>
        <div className="testimonial">
          <p>
            "I've used this service multiple times now and have always been
            impressed with the speed and quality of the work."
          </p>
          <p className="author">- Shyam D.</p>
        </div>
        <form>
          <label htmlFor="email">
            Ready to recycle your e-waste with Remine?
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
          />
          <button>Subscribe</button>
        </form>
      </div>

      <div class="faq-section">
        <div class="faq-container">
          <h2>Frequently Asked Questions</h2>
          <p>
            By choosing Remine for your e-waste recycling needs, you'll enjoy
            the following benefits:
          </p>
          <ul>
            <li className="ques">
              Q: What types of electronics do you accept for recycling?
            </li>
            <li>
              A: We accept a wide range of electronics, including computers,
              laptops, tablets, smartphones, printers, and more.
            </li>
            <li className="ques">
              Q: How do you ensure data security during the recycling process?
            </li>
            <li>
              A: We use industry-standard data destruction techniques to ensure
              your sensitive information is safe and secure.
            </li>
            <li className="ques">
              Q: Do you offer recycling programs for businesses and
              organizations?
            </li>
            <li>
              A: Yes, we offer customized recycling programs to meet the unique
              needs of businesses and organizations.
            </li>
          </ul>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Get in touch with us if you have any questions or would like to
          schedule a pickup:
        </p>
        <form>
          <label htmlFor="email">Enter your email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
          />
          <button>Subscribe</button>
        </form>
        <p>
          You can also follow us on social media to stay updated on our
          progress:
        </p>
        <ul></ul>
      </div>
    </div>
  );
}
