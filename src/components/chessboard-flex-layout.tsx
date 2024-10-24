/* app imports */
import getClothingBrands from "@common/data/get-clothing-brands";

/* component */
function ChessboardFlexLayout(): JSX.Element {
  /* env */
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  /* data */
  const brands = getClothingBrands();

  return (
    <>
      <section className="demo chessboardLayout">
        <div className="container">
          <ul className="list-unstyled">
            {
              brands.map((item, index) => {
                return (
                  <>
                    <li key={index}>
                      <div className="item">
                        <div className="image">
                          <img src={`${IMG_ROOT}${item.src}`} className="img-fluid" alt={item.alt} title={item.title}/>
                        </div>
                        <span className="text-center">{item.title}</span>
                      </div>
                    </li>
                  </>
                );
              })
            }
            {
              brands.map((item, index) => {
                return (
                  <>
                    <li key={index}>
                      <div className="item">
                        <div className="image">
                          <img src={`${IMG_ROOT}${item.src}`} className="img-fluid" alt={item.alt} title={item.title}/>
                        </div>
                        <span className="text-center">{item.title}</span>
                      </div>
                    </li>
                  </>
                );
              })
            }
            {
              brands.map((item, index) => {
                return (
                  <>
                    <li key={index}>
                      <div className="item">
                        <div className="image">
                          <img src={`${IMG_ROOT}${item.src}`} className="img-fluid" alt={item.alt} title={item.title}/>
                        </div>
                        <span className="text-center">{item.title}</span>
                      </div>
                    </li>
                  </>
                );
              })
            }
            {
              brands.map((item, index) => {
                return (
                  <>
                    <li key={index}>
                      <div className="item">
                        <div className="image">
                          <img src={`${IMG_ROOT}${item.src}`} className="img-fluid" alt={item.alt} title={item.title}/>
                        </div>
                        <span className="text-center">{item.title}</span>
                      </div>
                    </li>
                  </>
                );
              })
            }
          </ul>
          <p className="text-center">
            Chessboard Layout done with the help of Flex Box Concept with Justify Content Space Between
          </p>
        </div>
      </section>
    </>
  );
}

/* exports */
export default ChessboardFlexLayout;
