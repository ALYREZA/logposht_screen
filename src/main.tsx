import { render } from 'preact'
import Index from './components/index'
import "./style.css";
import type { ILogposht } from './@types/logposht';

type AppType = { logposht: { value: ILogposht[] } }
import { signal } from "@preact/signals";

const logposhtSignal = signal(JSON.parse(window?.logposht || '{}'));

function App({ logposht }: AppType) {
  return (<Index logposht={logposht} />);
}
render(<App logposht={logposhtSignal} />, document.getElementById('app')!)