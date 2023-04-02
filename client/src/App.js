import './App.css';
import { Routes, Route } from 'react-router-dom';
import Doctor from './Components/Doctor/Doctor';
import Login from './Components/Login/Login';
import Patient from './Components/Patient/Patient';
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
// import FileUpload from "./components/FileUpload";
// import Display from "./components/Display";
// import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "Your Contract Address Here";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);









  return (
    <Routes>
      <Route path="/doctor" element={<Doctor 
        account={account}
        provider={provider}
        contract={contract}
      />} />
      <Route path="/" element={<Login />} />
      <Route path="/patient" element={<Patient 
        account={account}
      />} />
    </Routes>
  );
}

export default App;