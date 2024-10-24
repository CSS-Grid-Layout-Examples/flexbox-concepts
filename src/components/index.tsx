/* app imports */
import "./style.scss";
import SimpleFlexBox from "./simple-flex-box";
import SimpleFlexBoxLargeWidth from "./simple-flex-box-large-width";
import SimpleFlexBoxGrow from "./simple-flex-box-grow";
import SimpleFlexBoxColumn from "./simple-flex-box-column";
import ChessboardFlexLayout from "./chessboard-flex-layout";
import FlexGrowInteractive from "./flex-grow-interact";
import FlexBoxReverseRow from "./simple-reverse-row";
import FlexBoxCentralizeElements from "./flexbox-central-positioning";

/* component */
function AppOutletComponent(): JSX.Element {
  return (
    <>
      <SimpleFlexBox />
      <SimpleFlexBoxLargeWidth />
      <SimpleFlexBoxGrow />
      <SimpleFlexBoxColumn />
      <ChessboardFlexLayout />
      <FlexGrowInteractive />
      <FlexBoxReverseRow />
      <FlexBoxCentralizeElements />
    </>
  );
}

/* exports */
export default AppOutletComponent;
