import {useEffect,createContext, useState} from "react"
import {ethers} from "ethers"

import {contractABI,contractAddress} from "../utils/contants"
export const TransactionContext=createContext();

const {ethereum} = window;

const getEthereumContract=()=>{
    const provider=new ethers.providers.Web3Provider(ethereum)
    const signer= provider.getSigner();
    const transactionsContract= new ethers.Contract(contractAddress,contractABI,signer);

    return transactionsContract;
}

export const TransactionProvider =({ children })=>{
    const [currentAccount,setCurrentAccount]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    const [transactions,setTransactions]=useState([]);
    const [transactionCount,setTransationCount]=useState(localStorage.getItem("transactionCount"));
    const [formData,setFormData]=useState({
        addressTo:"",
        amount:"",
        keyword:"",
        message:""
    });

    const handleChange=(e)=>{
        const name=e.target.name;
        setFormData((prevState)=>({...prevState,[name]:e.target.value}));
    }
    const checkIfWalletIsConnected=async()=>{
        try{
            if(!ethereum) return alert("pliz install Metamask.");
            const accounts= await ethereum.request({method: "eth_accounts"});
            if(accounts){
                setCurrentAccount(accounts[0]);
                getAllTransactions();

            }else{
                console.log("No accounts found");
            }
        }catch(err){
            console.log(err);
        }
    }

    const connectWallet=async ()=>{
        try{
            if(!ethereum) return alert("pliz install Metamask.");
            const accounts= await ethereum.request({method: "eth_requestAccounts"});
             setCurrentAccount(accounts[0]);
             window.location.reload();
        }catch(err){
            console.log(err);
            throw new Error("No ethereum object");
        }
    }

    const sendTransaction=async()=>{
        try{
            if(ethereum){
                const {addressTo,amount,keyword,message}=formData;
                const transactionsContract=getEthereumContract();
                const parseAmount=ethers.utils.parseEther(amount);

                await ethereum.request({
                    method: "eth_sendTransaction",
                    params:[{
                        from: currentAccount,
                        to: addressTo,
                        gas: "0x5208", //21000GWEI
                        value: parseAmount._hex,
                    }],
                });

                const transactionHash= await transactionsContract.addToBlockchain(addressTo,parseAmount,message,keyword);

                setIsLoading(true);
                console.log(`Loading - ${transactionHash.hash}`);
                await transactionHash.wait();
                console.log(`Success - ${transactionHash.hash}`);
                setIsLoading(false);

                const transactionCount=await transactionsContract.getTransactinCount();

                setTransationCount(transactionCount?.toNumber());
                window.location.reload();
            }else{
                console.log("No ethereum object")
            }
        }catch(err){
            console.log(err);
            throw new Error("No ethereum object")
        }
    }

    const checkIfTransactionExists=async()=>{
        try{
            if(ethereum){
                const transactionsContract=getEthereumContract();
                const currentTransactionCout=await transactionsContract.getTransactinCount();

                window.localStorage.setItem("transactionCount",currentTransactionCout);
            }
        }catch(err){
              console.log(err)
              throw new Error("No ethereum objct");
        }
    }

    const getAllTransactions= async()=>{
        try{
            if(ethereum){
                const transactionsContract=getEthereumContract();
                const availableTransactions=await transactionsContract.getAllTransactions();

                const structuredTransactions=availableTransactions.map((transaction)=>({
                   addressTo: transaction.receiver,
                   addressFrom: transaction.sender,
                   timestamp: new Date(transaction.timeStamp.toNumber()*1000).toLocaleString(),
                   message: transaction.message,
                   keyword: transaction.keyword,
                   amount: parseInt(transaction.amount._hex)/(10**18)
                }));

                 console.log(structuredTransactions);
                setTransactions(structuredTransactions);

            }
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        checkIfWalletIsConnected();
        checkIfTransactionExists();
    },[transactionCount])
    return(
        <TransactionContext.Provider
        value={{
            connectWallet,
            currentAccount,
            handleChange,
            formData,
            sendTransaction,
            isLoading,
            transactionCount,
            transactions            
        }}
        >
            { children }
        </TransactionContext.Provider>

    )
}