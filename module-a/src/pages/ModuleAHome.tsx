import { useEffect } from 'react';
import reactLogo from '../assets/react.svg';
import { rootStore } from '@poc/core/app';
import { observer } from "mobx-react-lite"

function ModuleAHome() {
  const modBStore = rootStore.getStore<{
    secondsPassed: number;
    increaseTimer: () => void;
  }>('ModuleB');

  useEffect(() => {
    console.log('increasing timer');
    setTimeout(() => {
      modBStore.increaseTimer();
    }, 5000)
  }, [])
  return (
    <div>
      <h1 style={{ color: 'white', fontSize: '40px' }}>Module A home</h1>
      <div>Seconds passed{modBStore.secondsPassed}</div>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  );
}

const ObservedModuleAHome = observer(ModuleAHome);
export default ObservedModuleAHome;