import { render } from 'preact'
import Index from './components/index'
import "./style.css";
import type { ILogposht } from './@types/logposht';

type AppType = {logposht:ILogposht[] }

function App({ logposht }: AppType) {
  return (
      <Index logposht={logposht} />
  );
}
render(<App logposht={JSON.parse(window?.logposht || '{}')} />, document.getElementById('app')!)