import "../../styles/components/pagesComponents/quotation.scss";
import quotationMark from "../../assets/icons/quote.svg";

const QuotationParagraph = ({ text, center }) => {
  return (
    <section className="quotation">
      <div className="container">
        <div className={`row d-flex ${center && "justify-content-center"}`}>
          <div className="quotation__mark__img col-2">
            <img src={quotationMark} alt="quotation mark" />
          </div>

          <div className="col-10">
            <p className="mt-4">
              Nullam sodales bibendum nulla ut vulputate. Vivamus auctor
              tincidunt urna, ac molestie lectus imperdiet id. Maecenas nisl
              massa, mollis sed sem a, finibus dapibus dui. Phasellus rhoncus,
              quam id molestie efficitur, elit ipsum blandit diam, ac lobortis
              lectus nibh quis ligula. Ut nunc erat, lobortis vel ultrices
              aliquet, efficitur id mauris. Duis posuere hendrerit est lacinia
              consectetur. Morbi nec volutpat ipsum. Cras blandit efficitur
              velit ut consequat. Suspendisse potenti.
            </p>

            <p className="mt-4">
              Nullam sodales bibendum nulla ut vulputate. Vivamus auctor
              tincidunt urna, ac molestie lectus imperdiet id. Maecenas nisl
              massa, mollis sed sem a, finibus dapibus dui. Phasellus rhoncus,
              quam id molestie efficitur, elit ipsum blandit diam, ac lobortis
              lectus nibh quis ligula. Ut nunc erat, lobortis vel ultrices
              aliquet, efficitur id mauris. Duis posuere hendrerit est lacinia
              consectetur. Morbi nec volutpat ipsum. Cras blandit efficitur
              velit ut consequat. Suspendisse potenti.
            </p>

            <p className="mt-4">
              Nullam sodales bibendum nulla ut vulputate. Vivamus auctor
              tincidunt urna, ac molestie lectus imperdiet id. Maecenas nisl
              massa, mollis sed sem a, finibus dapibus dui. Phasellus rhoncus,
              quam id molestie efficitur, elit ipsum blandit diam, ac lobortis
              lectus nibh quis ligula. Ut nunc erat, lobortis vel ultrices
              aliquet, efficitur id mauris. Duis posuere hendrerit est lacinia
              consectetur. Morbi nec volutpat ipsum. Cras blandit efficitur
              velit ut consequat. Suspendisse potenti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotationParagraph;
