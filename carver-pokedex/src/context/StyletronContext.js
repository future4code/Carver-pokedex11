import {Provider as StyletronProvider} from "styletron-react";
import {Client as Styletron} from "styletron-engine-atomic";

const StyletronContext = (props) => {
 
 const engine = new Styletron({
 hydrate: document.getElementsByClassName("_styletron_hydrate_")
 });

 return (
  <StyletronProvider value={engine}>
    {props.children}
  </StyletronProvider>
);
}
export  default StyletronContext