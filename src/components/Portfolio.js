import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import cluster_correction from "../assets/images/portfolio/cluster_correction.png";
import ISL1 from "../assets/images/portfolio/ISL1.png";
import UND from "../assets/images/portfolio/UnDetNam.png";
import VStroop from "../assets/images/portfolio/VStroop.png";
import RISE_3 from "../assets/images/portfolio/RISE_3.png";
import TISLR_IMG from "../assets/images/portfolio/TISLRfigure.png"
import VerbalStroopPoster from "../assets/images/pdfs/VerbalStroopPoster.pdf";
import TISLR from "../assets/images/pdfs/TISLR_Poster_Ferrara.pdf";
import Handshape_img from "../assets/images/portfolio/HandshapeFigure.png";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check out some of my projects</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://www.ncbi.nlm.nih.gov/pubmed/28847712" title="Cluster Correction Paper">
                <img alt="Cluster Correction" src={cluster_correction} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Corrections for multiple comparisons in voxel-based lesion-symptom mapping.</h5>
                    <p>Mirman, D., Landrigan, J., Kokolis, S., Verillo, S., Ferrara, C., Pustina, D. (2017). <em>Neuropsychologia</em></p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://www.taylorfrancis.com/books/e/9781317213307/chapters/10.4324%2F9781315619224-3" title="Performing Irishness Paper">
                <img alt="ISL Interpreting" src={ISL1} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Performing Irishness in an Interpreted Inaugural Presidential Speech</h5>
                    <p>Leeson, L., Stewart, M., Ferrara, C., Drexel, I., Nilsson, P., Cooper, M. (2017). <em>Interpreting and the Politics of Recognition</em> </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4937813/" title="Frontiers in Psychology">
                <img alt="Picture Naming" src={UND} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Distinct Effects of Lexical and Semantic Competition during Picture Naming</h5>
                    <p>Britt, A., Ferrara, C., Mirman, D. (2016).<em>Frontiers in Psychology</em></p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://riseebooks.wixsite.com/access/about-r-i-s-e" title="Rise Books">
                <img alt="Rise Book" src={RISE_3} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>"Reading Involves Shared Experience" (R.I.S.E.) eBook Project</h5>
                    <p>Bimodal-bilingual ebooks. Available in ASL-English, as well as 13 other signed and spoken languages. Now accessible on Youtube and iTunes</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/cogs.12741" title="One- vs two-handed shapes paper">
                <img alt="ASL shapes" src={TISLR_IMG} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Manual Movement in Sign Languages: One Hand Versus Two in Communicating Shapes</h5>
                    <p>Ferrara, C., Napoli, D.J. (2019). <em>Cognitive Science</em></p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href={TISLR} title="Handshape, Movement, and Geometry: Communicating shapes in sign languages">
                <img alt="TISLR13 poster" src={Handshape_img} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>"Handshape, Movement, and Geometry: Communicating shapes in sign languages"</h5>
                    <p>Ferrara, C., Napoli, D.J. (2019). <em>TISLR13 Conference</em></p>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* <div id="modal-01" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-coffee.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Coffee Cup</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag /> Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-02" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-console.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Console</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Web Development
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-03" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-judah.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Judah</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-04" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-intothelight.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Into the Light</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-05" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-farmerboy.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Farmer Boy</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-06" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-girl.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Girl</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-07" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-origami.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Origami</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Illustration
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-08" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-retrocam.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Retrocam</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <i className="fa fa-tag" />Webdesign, Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div> */}
    </div>
  </section>
);

export default Portfolio;
