import React from 'react'
import { useState } from 'react'
const DropDown = () => {

    const [country ,setCountry]= useState('');
    const [state , setState] = useState('');
    const [city , setCity] =useState('');

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        setState("");
        setCity("");
      };
    
      const handleStateChange = (e) => {
        setState(e.target.value);
        setCity("");
      };
    

  return (
    <>
    <label htmlFor="">Country</label> <br />
    <select onChange={handleCountryChange} value={country}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="Turkey">Turkey</option>
        <option value="Canada">Canada</option>
      </select>
      <br />
      <br />
      <label htmlFor="">State</label>
      <br/>
      <select value={state} disabled={country === ""} onChange={handleStateChange}>
        <option value="">Select State</option>
        {country === "India" && (
          <>
          <option key="Andhra Pradesh">Andhra Pradesh</option>
          <option key="Chhattisgarh">Chhattisgarh</option>
          <option key="Haryana">Haryana</option>
          <option key="Goa">Goa</option>
          <option key="Gujarat">Gujarat</option>
          <option key="Assam">Assam</option>
          <option key="Bihar">Bihar</option>
          </>
        )}
        {country === "China" && (
          <>
          <option key="Anhui">Anhui</option>
          <option key="Guangdong">Guangdong</option>
          <option key="Guizhou">Guizhou</option>
          <option key="Hebei">Hebei</option>
          <option key="Hainan">Hainan</option>
          <option key="Sichuan">Sichuan</option>
          <option key="Qinghai">Qinghai</option>
          <option key="Yunnan">Yunnan</option>
          
          </>
        )}
        {country === "Turkey" && (
          <>
          <option key="Antalya">Antalya</option>
          <option key="Kırklareli ">Kırklareli </option>
          <option key="Edirne ">Edirne </option>
          <option key="Bursa  ">Bursa  </option>
          <option key="Zonguldak  ">Zonguldak  </option>
          <option key="Bolu ">Bolu </option>
          <option key="Balıkesir ">Balıkesir </option>
          </>
        )}
         {country === "Canada" && (
          <>
          <option key="Alberta">Alberta</option>
          <option key="British Columbia">British Columbia </option>
          <option key="Manitoba ">Manitoba </option>
          <option key="New Brunswick  ">New Brunswick  </option>
          <option key="Newfoundland and Labrador ">Newfoundland and Labrador </option>
          <option key="Northwest Territories ">Northwest Territories </option>
          <option key="Nova Scotia ">Nova Scotia</option>
          </>
        )}
      </select>
    <br /><br />
    <label htmlFor="">City</label>
    <br />
      <select value={city} disabled={state === ""}>
        <option value="">Select City</option>
        {state === "Andhra Pradesh" && (
          <>
          <option key="Kakinada">Kakinada</option>
          <option key="Visakhapatnam">Visakhapatnam</option>
          <option key="Tirupati ">Tirupati </option>
          <option key="Guntur ">Guntur </option>
          <option key="Nellore ">Nellore </option>
          <option key="Rajamahendravaram ">Rajamahendravaram </option>
          <option key="Vizianagaram ">Vizianagaram </option>
          </>
        )}
        {state === "Chhattisgarh" && (
          <><option key="Raipur">Raipur</option>
          <option key="Raigarh">Raigarh</option>
          <option key="Bhilai">Bhilai</option></>
        )}
        {state === "Haryana" && (
          <><option key="Gurugram">Gurugram</option>
          <option key="Faridabad">Faridabad</option>
          <option key="Panipat">Panipat</option></>
        )}
        {state === "Goa" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Gujarat" && (
          <>
          <option key="Ahmedabad">Ahmedabad</option>
          <option key="Surat">Surat</option>
          <option key="Vadodara">Vadodara</option>
          <option key="Rajkot">Rajkot</option>
          <option key="Bhavnagar	">Bhavnagar	</option>
          <option key="Jamnagar">Jamnagar</option>
          <option key="Gandhinagar">Gandhinagar</option>
          <option key="Gandhidham	">Gandhidham	</option>
          <option key="Anand	">Anand	</option>
          <option key="Navsari">Navsari</option>
          <option key="Morbi">Morbi</option>
          </>
        )}
        {state === "Assam" && (
          <><option key="Guwahati">Guwahati</option>
          <option key="jorhat">jorhat</option>
          <option key="Tezpur">Tezpur</option></>
        )}
        {state === "Bihar" && (
          <><option key="Patna">Patna</option>
          <option key="Gaya">Gaya</option>
          <option key="Bhagalpur ">Bhagalpur </option></>
        )}
        {state === "Anhui" && (
          <><option key="Hefei">Hefei</option>
          <option key="Wuhu">Wuhu</option>
          <option key="Lu'An">Lu'An</option></>
        )}
        {state === "Guangdong" && (
          <><option key="Guangzhou">Guangzhou</option>
          <option key="Margao">Margao</option>
          <option key="Zhuhai">VZhuhai</option></>
        )}
        {state === "Guizhou" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Hebei" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Hainan" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Sichuan" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Qinghai" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Yunnan" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Antalya" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Kırklareli" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Edirne" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Bursa" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Zonguldak" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Bolu" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Balıkesir" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Alberta" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "British Columbia" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Manitoba" && (
          <><option key="Winniepeg">Winniepe</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "New Brunswick " && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Newfoundland and Labrador" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Northwest Territories " && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        {state === "Nova Scotia" && (
          <><option key="Panaji">Panaji</option>
          <option key="Margao">Margao</option>
          <option key="Vasco da Gama">Vasco da Gama</option></>
        )}
        </select>
    </>
  )
}

export default DropDown