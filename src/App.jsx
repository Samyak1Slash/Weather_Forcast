import Button from '@mui/material/Button';
import WeatherApp from './WeatherApp';
// import SearchBox from './SearchBox';
// import InfoBox from './infoBox';

function App() {

  let handleclick=()=>{
    console.log("Button Was Clicked");
  }

  return (
    <>
      {/* <h1>MUI baackchodi</h1>
      <Button variant='contained' onClick={handleclick}>Click Meee </Button>
      <Button variant='contained' onClick={handleclick} color='success' size='small'>Click Meee </Button> */}
      {/* <SearchBox/>
      <InfoBox/> */}

      <WeatherApp/>

    </>
  )
}

export default App
