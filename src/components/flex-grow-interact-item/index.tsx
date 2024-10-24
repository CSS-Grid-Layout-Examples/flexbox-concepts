/* app imports */
import getClothingBrands from "@common/data/get-clothing-brands";
import arrowUpIcon from "@common/assets/icons/arrow-up.svg";
import arrowDownIcon from "@common/assets/icons/arrow-down.svg";
import useFlexGrowInteractive from "@hooks/use-flex-grow-interactive";

/* interface */
interface FCProps {
  alt: string;
  title: string;
  src: string;
  index: number;
}

/* component */
function FlexGrowInteractiveItem(props: FCProps): JSX.Element {
  /* env */
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  /* props */
  const { alt, title, src, index } = props;
  /* hook */
  const { grow, onDecrement, onIncrement } = useFlexGrowInteractive();

  return (
    <>
      <li style={{flexGrow: grow[index].value}}>
        <div className="item">
          {/* brand */}
          <div className="image">
            <img src={`${IMG_ROOT}${src}`} className="img-fluid" alt={alt} title={title}/>
          </div>
          {/* flex grow value */}
          <p className="text-center">Flex Grow: { grow[index].value }</p>
          {/* buttons */}
          <div className="row">
            <button type="button" className="btn btn-default" onClick={() => onIncrement(index)}>
              <img src={arrowUpIcon} className="img-fluid" alt="Increment" title="Increment"/>
            </button>
            <button type="button" className="btn btn-default" onClick={() => onDecrement(index)}>
              <img src={arrowDownIcon} className="img-fluid" alt="Decrement" title="Decrement"/>
            </button>
          </div>
          {/* title text */}
          <span className="text-center">{title}</span>
        </div>
      </li>
    </>
  );
}

/* exports */
export default FlexGrowInteractiveItem;
