import { useState } from "react";
import "../../styles/components/pagesComponents/quotation.scss";
import quotationMark from "../../assets/icons/quote.svg";

const QuotationParagraph = ({ texts, center }) => {
  const [Data] = useState(texts);

  return (
    <section className="quotation">
      <div className="container">
        <div className={`row d-flex ${center && "justify-content-center"}`}>
          <div className="quotation__mark__img col-2">
            <img src={quotationMark} alt="quotation mark" />
          </div>

          <div className="col-10">
            {Data?.map((data, index) => {
              return (
                <p key={index} className="mt-4">
                  {data}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotationParagraph;
